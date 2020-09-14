import React from 'react';
import './Skills.css';
import TechnicalSkills from './TechnicalSkills';
import SoftSkills from './SoftSkills';
import {Row, Col, Container} from 'react-bootstrap';

function Skills() {
    return (
        <Container className="skills">
            <Row>
                <Col className="skill-column" lg={true}>
                <TechnicalSkills/>
                </Col>
                <Col className="skill-column" lg={true}>
                <SoftSkills/>
                </Col>
            </Row>
           
        </Container>
    )
}

export default Skills;