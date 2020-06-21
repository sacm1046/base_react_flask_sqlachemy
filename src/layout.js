import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Home from './views/Home'
import NotFound from './views/Notfound'
import injectContext from './store/appContext'

const Layout = props => {
    return (
        <BrowserRouter>
            <Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Navbar>
        </BrowserRouter>
    )
}

export default injectContext(Layout);