import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import { Home, CreateCertificate } from './index'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/create-certificate">
                    <CreateCertificate />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;