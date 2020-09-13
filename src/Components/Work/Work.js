import React from 'react';
import './Work.css';
import Categories from './Categories/Categories';
import { Fade } from '@material-ui/core';

function Work() {
    return(
        <div className="work">
            <Fade in={true}>
            <Categories/>
            </Fade>
        </div>
    )
}

export default Work;