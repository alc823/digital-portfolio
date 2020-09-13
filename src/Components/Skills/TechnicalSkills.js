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
        description: `I've taken introductory and advanced computer science courses, including Algorithms and Data
        Structures and Representation. I am currently taking Cybersecurity and Computer Architecture.`
    },
    {
        title: "Interdisciplinary",
        description: `Through my coursework, I am also familiar with statistical and mathematical knowledge. I can
        analyze data with R and SAS, and I have learned skills in probability and linear algebra.`
    }
]

function TechnicalSkills() {

    const classes = useStyles();
    return (
        <div>
           <div>Technical Skills</div>
           {/* <Container>
               <Row>
                   <Col>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <div className="skill-header">Full-stack Development</div>
                            <div className="skill-description">Much of my project work has been concentrated on full-stack or front-end development. I've used
                                Django and CakePHP, but primarily I use React. Databases I've used include MySQL, PostgreSQL, and Firebase.
                            </div>
                        </CardContent>
                        </Card>
                   </Col>
                   <Col>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <div className="skill-header">Languages</div>
                            <div className="skill-description">
                                I have moderate to high technical proficiency in Java, Python, C++, and JavaScript. I have 
                                also dabbled in C#, C, PHP, and command-line languages such as Bash and PowerShell.
                            </div>
                        </CardContent>
                        </Card>
                   </Col>
               </Row>
               <Row>
                   <Col>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <div className="skill-header">Courses</div>
                                <div className="skill-description">I've taken introductory and advanced computer science courses, including Algorithms and Data
                                    Structures and Representation. I am currently taking Cybersecurity and Computer Architecture.
                                </div>
                            </CardContent>
                        </Card>
                   </Col>
                   <Col>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <div className="skill-header">Interdisciplinary</div>
                                <div className="skill-description">Through my coursework, I am also familiar with statistical and mathematical knowledge. I can
                                    analyze data with R and SAS, and I have learned skills in probability and linear algebra.
                                </div>
                            </CardContent>
                        </Card>
                   </Col>
               </Row>
           </Container> */}

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