import React from 'react';
import './Skills.css';
import TechnicalSkills from './TechnicalSkills';
import SoftSkills from './SoftSkills';
import {Row, Col, Container} from 'react-bootstrap';

function Skills() {
    return (
        <Container className="skills">
            <Row>
                <Col className="skill-column">
                <TechnicalSkills/>
                </Col>
                {/* <div className="first-column"></div> */}
                <Col className="skill-column">
                <SoftSkills/>
                </Col>
            </Row>
           
        </Container>
    )
}

export default Skills;