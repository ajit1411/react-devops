import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Settings from './Components/Settings'
const Routers = () => {
    return (
        <Switch>
            <Route path='/home' component={Home} exact={true} />
            <Route path='/settings' component={Settings} exact={true} />
            <Redirect from='/' to='/home' exact={true} />
        </Switch>
    )
}

export default Routers