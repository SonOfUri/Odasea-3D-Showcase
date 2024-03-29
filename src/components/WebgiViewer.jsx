import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from "react";

import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    mobileAndTabletCheck

} from "webgi";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);


const WebgiViewer = forwardRef((props, ref) => {

    {

        const canvasRef = useRef(null);
        const [viewerRef, setViewerRef] = useState(null);
        const [targetRef, setTargetRef] = useState(null);
        const [cameraRef, setCameraRef] = useState(null);
        const [positionRef, setPositionRef] = useState(null);
        const canvasContainerRef = useRef(null);
        const [previewMode, setpreviewMode] = useState(false);


        useImperativeHandle(ref, () => ({
            triggerPreview() {
                setpreviewMode(true);
                canvasContainerRef.current.style.pointerEvents = "all";
                props.contentRef.current.style.opacity = "0";

                gsap.to(positionRef, {
                    x: -0.46,
                    y: 4.00,
                    z: 10.24,
                    duration: 2,
                    onUpdate: () => {
                        viewerRef.setDirty();
                        cameraRef.positionTargetUpdated(true);
                    }
                });

                gsap.to(targetRef, {
                    x: -0.16,
                    y: -0.80,
                    z: 1.28, duration: 2
                });

                viewerRef.scene.activeCamera.setCameraOptions({controlsEnabled: true});

            }
        }));

        const memoizedScrollAnimation = useCallback(
            (position, target, onUpdate) => {
                if (position && target && onUpdate) {
                    scrollAnimation(position, target, onUpdate);
                }
            }, []
        )

        const setupViewer = useCallback(async () => {

            // Initialize the viewer
            const viewer = new ViewerApp({
                canvas: canvasRef.current,
            })

            setViewerRef(viewer)

            // Add some plugins
            const manager = await viewer.addPlugin(AssetManagerPlugin)

            const camera = viewer.scene.activeCamera;
            const position = camera.position;
            const target = camera.target;

            setCameraRef(camera);
            setPositionRef(position);
            setTargetRef(target);




            // Add plugins individually.
            await viewer.addPlugin(GBufferPlugin)
            await viewer.addPlugin(new ProgressivePlugin(32))
            await viewer.addPlugin(new TonemapPlugin(true))
            await viewer.addPlugin(GammaCorrectionPlugin)
            await viewer.addPlugin(SSRPlugin)
            await viewer.addPlugin(SSAOPlugin)
            await viewer.addPlugin(BloomPlugin)

            // This must be called once after all plugins are added.
            viewer.renderer.refreshPipeline()

            await manager.addFromPath("Kaneki.glb");

            viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

            viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

            window.scrollTo(0, 0);

            let needsUpdate = true;

            const onUpdate = () => {
                needsUpdate = true;
                viewer.setDirty();
            }

            viewer.addEventListener("preFrame", () => {
                if (needsUpdate) {
                    camera.positionTargetUpdated(true);
                    needsUpdate = false;
                }
            });

            memoizedScrollAnimation(position, target, onUpdate);

        }, []);

        useEffect(() => {
            setupViewer();
        }, []);

        const handleExit = useCallback(() => {
            canvasContainerRef.current.style.pointerEvents = "none";
            props.contentRef.current.style.opacity = "1";
            viewerRef.scene.activeCamera.setCameraOptions({controlsEnabled: false});
            setpreviewMode(false);

            gsap.to(positionRef, {
                x: -3.16,
                y: -0.50,
                z: -7.28,
                scrollTrigger: {
                    trigger: '.display-section',
                    start: "top bottom",
                    end: "top top",
                    scrub: 2,
                    immediateRender: false
                },
        
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                },
            });
            gsap.to(targetRef, {
                x: -0.16,
                y: 0.20,
                z: 1.28,
                scrollTrigger: {
                    trigger: '.display-section',
                    start: "top bottom",
                    end: "top top",
                    scrub: 2,
                    immediateRender: false
                },
            })

        }, [canvasContainerRef, viewerRef, positionRef, cameraRef, targetRef]);

        return (
            <div ref={canvasContainerRef} id="webgi-canvas-container">
                <canvas id="webgi-canvas" ref={canvasRef}></canvas>

                {
                    previewMode && (
                        <button className="button" onClick={handleExit}>EXIT</button>
                    )
                }
            </div>
        );
    }

})

export default WebgiViewer;