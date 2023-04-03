import React from "react";
import Logo from "../assets/images/logo.svg";

function Nav() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img src={Logo} alt={Logo} />
                    </li>
                    <li>
                        <a className="link-styled"> Link1</a>
                    </li>
                    <li>
                        <a className="link-styled"> Link2</a>
                    </li>
                    <li>
                        <a className="link-styled"> Link3</a>
                    </li>
                    <li>
                        <a className="link-styled"> Link4</a>
                    </li>
                </ul>
            </div>
        </nav>
      );
}

export default Nav;