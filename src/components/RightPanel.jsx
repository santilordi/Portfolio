import React from "react";
import SkillsSection from "./SkillsSection";
import ProjectCard from "./ProjectCard";

function RightPanel() {

    const projectData = [
        {
            title: 'TechnoLife - E-commerce',
            description: 'Robust backend developed with Spring Boot, JPA and MySQL for product and shopping cart management',
            tags: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
            githubLink: 'https://github.com/santilordi/TechnoLife.git'
        },
        {
            title: "Credit & Collections Management System",
            description: "A comprehensive full-stack platform developed to manage clients, credit lines, and payment collections. The robust backend is engineered with Java and Spring Boot, implementing secure RESTful APIs with JWT-based authentication via Spring Security. The frontend is a responsive single-page application built with React and Vite, utilizing Redux Toolkit for efficient global state management and a seamless user experience.",
            tags: ["Java", "Spring Boot", "React", "Redux", "JWT", "Vite"],
            githubLink: 'https://github.com/santilordi/Grupo14-TPO-API.git'
        }
    ];

    return (
        <main className="right-panel">

            <section id="about" className="section-padding">
                <p className="about-text">
                    I'm a Software Engineering student at UADE, dedicated to building robust, efficient, and scalable applications. With a strong foundation in backend architecture and a growing passion for modern frontend development, I thrive on solving complex technical challenges.
                </p>
                <p className="about-text">
                    I'm driven by a continuous desire to learn—whether it's optimizing an API's performance or exploring network protocols—always aiming to deliver seamless and impactful digital experiences.
                </p>
            </section>

            <SkillsSection />

            <section id="projects" className="section-padding">
                <div className="projects-list"> {/* <-- Este div nuevo es la clave */}
                    {projectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            githubLink={project.githubLink}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default RightPanel;