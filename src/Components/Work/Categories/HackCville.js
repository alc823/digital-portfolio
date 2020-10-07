import React from 'react';
import './Projects.css';
import {hackCvilleProjects} from './Projects.js';

function HackCville() {
    return (
        <div className="project-info">
        <h4>What is Launch?</h4>
        <div>I participated in an internship preparation program by the company HackCville called Launch in the academic year 2019-2020. In
            this program, I learned soft skills through resume/interview workshops as well as many technical skills having to do 
            mainly with React and web development. Soft skill workshops were primarily in fall, and there were three technical workshops
            in the spring. These sessions were known as "Countdown" sessions. Finally, the latter part of the program arrived in June; this involved a three-week
            intensive training period where students in Launch would complete a series of hands-on projects, both individually and in groups. 
            These are some of the projects I did as a part of Launch.
        </div>
        <hr/>
        {hackCvilleProjects.map(project => {
            var divide = true;
            if (project.id === hackCvilleProjects.length - 1) {
                divide = false;
            }
            return (
                <div className="project">
                    <div className="project-title">{project.title}</div>
                    <div>{project.date}</div>
                    <div className="project-associations">{project.type}</div>
                    <br/>
                    <div className="project-description">{project.description}</div>
                    <br/>
                    <div className="project-technologies">Technologies: {project.technology}</div>
                    <div className="project-languages">Languages: {project.languages}</div>
                    {project.deploymentLink !== "" &&
                    <div style={{display:'inline'}}>
                        <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer">See project</a>
                    </div>
                    }
                    {project.codeLink !== "" &&
                    <div><a href={project.codeLink} target="_blank" rel="noopener noreferrer">See code</a></div>
                    }
                    {divide && <hr/>}
                </div>
            );
        })}
    </div>
    )
}

export default HackCville;