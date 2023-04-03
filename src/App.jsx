import Nav from "./components/nav";
import Jumbotron from "./components/jumbotron";
import SoundSecion from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";

import WebgiViewer from "./components/WebgiViewer";
import { useRef } from "react";


function App() {

  const WebgiViewerRef = useRef();
  const contentRef = useRef();

  const handlerPreview = () => {
    WebgiViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <div ref={contentRef} id="content">
              {/* <Nav /> */}
      <Jumbotron/>
      <SoundSecion />
      <DisplaySection triggerPreview={handlerPreview} />
      </div>

       <WebgiViewer contentRef={contentRef}  ref={WebgiViewerRef}/>

    </div>
  );
}

export default App;
