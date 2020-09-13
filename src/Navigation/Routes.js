import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Work from '../Components/Work/Work';
import Contact from '../Components/Contact/Contact';
import Skills from '../Components/Skills/Skills';

const Routes = () => {
    return <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/work' component={Work}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/skills' component={Skills}/>
    </Switch>
    
}

export default Routes
