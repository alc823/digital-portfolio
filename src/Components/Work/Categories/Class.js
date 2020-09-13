import React from 'react';
import './Projects.css';
import {classProjects} from './Projects.js';

function Class() {
    return (
        <div className="project-info">
        {classProjects.map(project => {
            var divide = true;
            if (project.id == classProjects.length - 1) {
                divide = false;
            }
            return (
                <div className="project">
                    <div className="project-title">{project.title}</div>
                    <div>{project.date}</div>
                    <div className="project-associations">{project.class}</div>
                    <div className="project-associations">{project.role}</div>
                    <br/>
                    <div className="project-description">{project.description}</div>
                    <br/>
                    <div className="project-technologies">Technologies: {project.technology}</div>
                    <div className="project-languages">Languages: {project.languages}</div>
                    {project.deploymentLink != "" &&
                    <a href={project.deploymentLink} className="project-deploymentLink">See project</a>
                    }
                    {divide && <hr/>}
                </div>
            );
        })}
    </div>
    )
}

export default Class;