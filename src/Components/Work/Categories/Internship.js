import React from 'react';
import './Projects.css';
import {internshipProjects} from './Projects';

function Internship(props) {
    return (
        <div className="project-info">
            {/* <div>
                Note: Links are not available to view these projects due to their association with
                private companies seeking profit from the sale of these products.
            </div>
            <hr/> */}
            {internshipProjects.map(project => {
                var divide = true;
                if (project.id == internshipProjects.length - 1) {
                    divide = false;
                }
                return (
                    <div className="project">
                        <div className="project-title">{project.title}</div>
                        <div>{project.date}</div>
                        <div className="project-associations">{project.company} | {project.role}</div>
                        <br/>
                        <div className="project-description">{project.description}</div>
                        <br/>
                        <div className="project-technologies">Technologies: {project.technology}</div>
                        <div className="project-languages">Languages: {project.languages}</div>
                        {divide && <hr/>}
                    </div>
                );
            })}
        </div>
    )
}

export default Internship;

