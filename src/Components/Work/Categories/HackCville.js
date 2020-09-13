import React from 'react';
import './Projects.css';
import {hackCvilleProjects} from './Projects.js';

function HackCville() {
    return (
        <div className="project-info">
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
                    <div><a href={project.deploymentLink} className="project-deploymentLink">See project</a></div>
                    }
                    {project.presentationLink !== "" &&
                    <div><a href={project.presentationLink} className="project-presentationLink">See presentation</a></div>}
                    {project.codeLink !== "" &&
                    <a href={project.codeLink} className="project-deploymentLink">See code</a>
                    }
                    {divide && <hr/>}
                </div>
            );
        })}
    </div>
    )
}

export default HackCville;