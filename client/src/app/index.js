import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { LinksList, LinksInsert, LinksUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/links/list" exact component={LinksList} />
                <Route path="/links/create" exact component={LinksInsert} />
                <Route
                    path="/links/update/:key"
                    exact
                    component={LinksUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
