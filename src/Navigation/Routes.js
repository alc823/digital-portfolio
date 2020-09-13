import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Work from '../Components/Work/Work';
import Contact from '../Components/Contact/Contact';
import Skills from '../Components/Skills/Skills';
import Documents from '../Components/Documents/Documents';

const Routes = () => {
    return <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/work' component={Work}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/skills' component={Skills}/>
            {/* <Route path='/documents' component={Documents}/> */}
    </Switch>
    
}

export default Routes
