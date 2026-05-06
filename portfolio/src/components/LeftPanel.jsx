import React from "react";

function LeftPanel() {

    return (
        <header className="left-panel">
            <div>
                <h1>Santiago Lordi</h1>
                <h2>Full-Stack Software Engineer</h2>
                <p className="bio"> 
                    Building robust and efficient applications, focused on performance and scalability
                </p>

                <nav className="nav-menu">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default LeftPanel;