import React from "react";

function LeftPanel() {

    return (
        <header className="left-panel">
            <div>
                <h1>Santiago Lordi</h1>
                <h2>Full-Stack Software Engineer</h2>
                <p className="bio">
                    I'm a Software Engineering student at UADE, dedicated to building robust, efficient, and scalable applications. 
                    With a strong foundation in backend architecture and a growing passion for modern frontend development, 
                    I thrive on solving complex technical challenges. 
                    I'm driven by a continuous desire to learn—whether it's optimizing an API's performance or exploring network protocols—always 
                    aiming to deliver seamless and impactful digital experiences.
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