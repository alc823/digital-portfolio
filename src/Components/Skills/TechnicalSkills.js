import React from 'react';
import "./Skills.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin:'2vh'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const technicalSkills = [
    {
        title: "Full-stack Development",
        description: `Much of my project work has been concentrated on full-stack or front-end development. I've used
        technologies such as Django and CakePHP, but primarily I use React.`
    },
    {
        title: "Languages",
        description: `I have moderate to high technical proficiency in Java, Python, C++, and JavaScript. I have 
        also dabbled in C#, C, PHP, and command-line languages such as Bash and PowerShell.`
    },
    {
        title: "Courses",
        description: `I've taken introductory and advanced computer science courses, including Algorithms and Program and Data Representation. 
        I am currently taking Cybersecurity and Computer Architecture.`
    },
    {
        title: "Interdisciplinary",
        description: `Through my coursework, I am also familiar with statistical and mathematical knowledge. I can
        analyze data with R and SAS, and I am learning/have learned skills in probability and linear algebra.`
    }
]

function TechnicalSkills() {

    const classes = useStyles();
    return (
        <div>
           <div>Technical Skills</div>
           {technicalSkills.map(skill => {
               return (
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <div className="skill-header">{skill.title}</div>
                            <div className="skill-description">{skill.description}</div>
                    </CardContent>
                </Card>
               )
           })}
           
        </div>
    )
}

export default TechnicalSkills;