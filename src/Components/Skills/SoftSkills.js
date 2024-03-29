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

const softSkills = [
    {
        title: "Teamwork",
        description: `Not only have I had plenty of experience working in groups in lab, projects, 
        and general classwork, but I was also part of a casual dance club at UVA, where coordination and teamwork was key!`
    },
    {
        title: "Organization",
        description: `I served a secretarial role for 3 student organizations. For all three, I managed room
        reservations and club calendars; doing so required incorporation of individual schedules to find the best overall time.`
    },
    {
        title: "Communication",
        description: `Having been a tutor and a TA for Software Development Methods (CS 2110), Machine Learning (CS 4774), and the course 
        Data Structures and Algorithms I (CS 2100), I had many one-on-one
        interactions with others and had to regularly consider how to communicate most effectively.`
    },
    
    {
        title: "Leadership",
        description: `Not only did I work as a general executive member to plan and coordinate club events, but I took up a lead 
        executive role in Digital Art Club, where I organized and led weekly art sessions.`
    }
]

function SoftSkills() {
    const classes = useStyles();
    return (
        <div>
           <div>Soft Skills</div>
           
           {softSkills.map(skill => {
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

export default SoftSkills;