import React from 'react';
import './Home.css';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import {Row, Col, Container} from 'react-bootstrap';

function Home() {

    const [index, setIndex] = React.useState(0);
    const [show0, setShow0] = React.useState(true);
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
        toggleShow(selectedIndex);
    };

    const toggleShow = (index) => {
        if (index == 0) {
            setShow0(true);
            setShow1(false);
            setShow2(false);
        } else if (index == 1) {
            setShow0(false);
            setShow1(true);
            setShow2(false);
        } else {
            setShow0(false);
            setShow1(false);
            setShow2(true);
        }
    }

    return (
        <div className="homepage">
            <Container>
            <Row>
                <Col lg={true}>
                    <Header/>
                </Col>
                <Col lg={true}>
                    <AboutMe
                        index={index}
                        show0={show0}
                        show1={show1}
                        show2={show2}
                        handleSelect={handleSelect}
                    />
                </Col>
            </Row>
            </Container>
            {/* <div className="header">
            <Header/>
            </div>
            <div className="aboutme">
            <AboutMe className="aboutme"/>
            </div> */}
            
        </div>
    )
}

export default Home;