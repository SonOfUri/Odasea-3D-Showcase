import React from "react";

function DisplaySection({triggerPreview}) {

    const handleScrollToTop = () => {
        window.scrollTo(
            {
                top: 0, left: 0, behaviour: "smooth"
            }
        )
    }
    return (
        <div className="display-section wrapper">
            <h2 className="title"> ODASEA. </h2>
                <p className="text">Showcase</p>
                <span className="description">
                   Click button to interact with this 3D-Model From Our Collection
                </span>
                <button className="button" onClick={triggerPreview}>Click Me!</button>
                <button className="back-button" onClick={handleScrollToTop}>TOP</button>            
        </div>
      );
}

export default DisplaySection;