import React from "react";

function ProjectCard({ title, description, tags, githubLink }) {

    return (
        <div className="project-card">
            <a className="project-card-link" href={githubLink} target="_blank" rel="noreferrer">
                <h3>{title} <span className="external-icon"></span></h3>
                <p>{description}</p>
                <ul className="tech-tags">
                    {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </a>
        </div>
    );
}

export default ProjectCard;