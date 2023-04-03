import React from "react";
import iPhone from "../assets/images/logo-sm-oda.jpg"
import HoldingIphone from "../assets/images/Kaneki-right.png";

function Jumbotron() {
const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
        top: element?.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'
    });
}

    return ( 
        <div className="jumbotron-section wrapper">
            <h2 className="title">ODASEA.</h2>
            <img src={iPhone} alt="iPhone 14 Pro" />
            <p className="text">3D Showcase</p>
            <span className="description">
            Welcome to the 3D Model NFT Preview Section. Click <span className="text-2">LEARN MORE</span>
            </span>

            <ul className="links">
                <li>
                    <button className="button">Home</button>
                </li>
                <li>
                    <a  className="link" onClick={handleLearnMore}>Learn More</a>
                </li>
            </ul>
            <img src={HoldingIphone} alt="iPhone" className="iphone-img" />
        </div> 
    
    );
}

export default Jumbotron;