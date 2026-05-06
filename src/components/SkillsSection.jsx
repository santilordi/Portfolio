import React from "react";

function SkillsSection() {
    const skills = [
        { name: 'Java', color: '#f89820' },
        { name: 'Spring', color: '#6db33f' },
        { name: 'MySQL', color: '#00758f' },
        { name: 'React', color: '#61dafb' },
        { name: 'Redux', color: '#764abc' },
        { name: 'CSS', color: '#264de4' },
        { name: 'Vite', color: '#646cff' },
        { name: 'Spring Cloud', color: '#6db33f' },
        { name: 'Docker', color: '#2496ed' },
        { name: 'Microservices', color: '#ffffff' },
        { name: 'Spring Security', color: '#6db33f' }
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="skills-header">
                <p className="section-subtitle">Technologies I recently work with</p>
            </div>

            <div className="skills-container">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="skill-circle"
                        style={{ '--hover-color': skill.color }}
                    >
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection;