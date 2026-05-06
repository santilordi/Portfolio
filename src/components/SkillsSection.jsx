import React from "react";
import springBootSvg from "../assets/spring-boot-1.svg";
import springSecuritySvg from "../assets/Springsecurity--Streamline-Simple-Icons.svg";

function SkillsSection() {
    const skills = [
        { name: 'Java', color: '#f89820', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Spring', color: '#6db33f', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'MySQL', color: '#00758f', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'React', color: '#61dafb', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Redux', color: '#764abc', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'CSS', color: '#264de4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Vite', color: '#646cff', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
        { name: 'Spring Cloud', color: '#6db33f', icon: springBootSvg },
        { name: 'Docker', color: '#2496ed', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Spring Security', color: '#6db33f', icon: springSecuritySvg }
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
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection;