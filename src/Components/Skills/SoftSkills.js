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
        and general classwork, but I am also part of a casual dance club at UVA, where coordination and teamwork is key!`
    },
    {
        title: "Organization",
        description: `I served a secretarial role for 3 student organizations. For all three, I managed room
        reservations and club calendars; doing so required incorporation of individual schedules to find the best overall time.`
    },
    {
        title: "Communication",
        description: `Part of my secretarial duties mentioned previously also included sending out mass communications to
        club members about upcoming events, requirements, and any general information.`
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