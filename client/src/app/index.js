import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { LinksList, LinksInsert, LinksUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

import styled from "styled-components";

const Container = styled.div.attrs({
    className: 'container',
})``

function App() {
    return (
        <Router>
            <Container>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={LinksList}/>
                    <Route path="/create" exact component={LinksInsert}/>
                    <Route
                        path="/update/:key"
                        exact
                        component={LinksUpdate}
                    />
                </Switch>
            </Container>
        </Router>
    )
}

export default App
