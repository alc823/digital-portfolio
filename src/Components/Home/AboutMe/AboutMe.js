import React from 'react';
import './AboutMe.css';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { Fade } from '@material-ui/core';
import {Row, Col, Container} from 'react-bootstrap';
import resume from './Annie_Cao_CV_May_31_2022.pdf';

function AboutMe(props) {

    

    return (
        <div className="about-me">
            {props.index === 0 &&
            <Fade in={props.show0}>
            <Container className="main">
                
                <Row>
                    <Col>
                        <div className="main-header">Annie Cao</div>
                        <a href={resume} download>Download Resume</a><br/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign:'center'}}>
                    </Col>
                    <Col style={{textAlign:'center'}}>
                    <ArrowForwardIosRoundedIcon className="right-arrow" onClick={() => props.handleSelect(1)}/>
                    </Col>
                </Row>
                
            </Container>
            </Fade>
            }
            {props.index === 1 &&
            <Fade in={props.show1}>
            <Container className="about-me-section">
                
                <Row>
                    <Col>
                    <div className="about-me-header">About Me</div><br/>
                    <div className="about-me-description">
                        I recently graduated with a Bachelor's Degree from the University of Virginia (Class of 2022). I was
                    an Echols Scholar and studied computer science and biostatistics in the College of Arts & Sciences. I am currently
                    pursuing a career as a full-time software engineer.
                    </div><br/>
                    <div className="about-me-description">
                        When I'm not coding, I like to draw (trying to get better at digital art right now!), game, 
                        and watch video essays about movies.
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign:'center'}}>
                    <ArrowBackIosRoundedIcon className="left-arrow" onClick={() => props.handleSelect(0)} />
                    </Col>
                    <Col style={{textAlign:'center'}}>
                    <ArrowForwardIosRoundedIcon className="right-arrow" onClick={() => props.handleSelect(2)}/>
                    </Col>
                </Row>
                
                
            </Container>
            </Fade>
            }
            {props.index === 2 && 
            <Fade in={props.show2}>
            <Container className="about-me-section">
                
                <Row>
                    <Col>
                    <div className="about-me-header">Interdiscriplinary Background</div><br/>
                    <div className="about-me-description">Although I am a software engineer by trade,
                    my core background actually originated in the biological sciences, as I had been pursuing premedical courses
                    and extracurriculars, such as cancer research, since high school. I discovered my passion for CS in university,
                    but continued to take biology and chemistry classes up through my second year. 
                    <br/><br/>
                    At the same time, I also wanted to hone
                    my interest in statistical analysis, which I had already been learning as a part of my premed journey. Now, I have graduated with
                    a double major in CS and biostatistics!
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign:'center'}}>
                    <ArrowBackIosRoundedIcon className="left-arrow" onClick={() =>props.handleSelect(1)}/>
                    </Col>
                    <Col style={{textAlign:'center'}}></Col>
                </Row>
            </Container>
            </Fade>
            }
        </div>
    )
}

export default AboutMe;