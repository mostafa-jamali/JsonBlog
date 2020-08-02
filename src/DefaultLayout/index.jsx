import React from 'react'
import Footer from './Footer';
import Header from './Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PostArchive from '../views/post-archive/PostArchive';
import PostSingle from '../views/PostSingle/PostSingle';
import Users from '../views/Users/UsersTable'

import { Container } from 'reactstrap';
function index() {
    return (
        <Router>
            <Header />
            <Container>
                <Switch>
                    <Route path="/users/:id">
                    </Route>
                    <Route path="/posts/:id">
                        <PostSingle/>
                    </Route>
                    <Route exact path="/posts">
                        <PostArchive />
                    </Route>
                    <Route exact path="/users">
                        <Users/>
                    </Route>
                    <Route exact path="/todos">
                    </Route>
                    <Route exact path="/">
                    </Route>
                </Switch>
            </Container>
            <Footer />
        </Router>
    )
}

export default index
