import React from "react";


function ProjectCard({ title, description, tags}) {

    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <ul className="tech-tags">
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectCard;