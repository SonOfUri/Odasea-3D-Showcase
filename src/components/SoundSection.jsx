import React from "react";

function SoundSecion() {

    const handleLearnMore = () => {
        const element = document.querySelector(".display-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom,
            left: 0,
            behaviour: "smooth"
        })
    }
    return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                    <h2 className="title">
                        Modern Anime Theme
                    </h2>
                    <p className="text">Feel the ODASEA.</p>
                    <span className="decription">Click <span className="text-2">LEARN MORE</span>  to view advanced 3D-Model
                    </span>
                    <ul className="links">
                        <li>
                            <button className="button">Home</button>
                        </li>
                        <li>
                            <a className="link" onClick={handleLearnMore}>Learn More</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SoundSecion;