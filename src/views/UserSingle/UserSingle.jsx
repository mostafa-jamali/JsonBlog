import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Card, CardHeader, CardFooter, CardBody, Row, Col, Spinner } from 'reactstrap';
import UserHeader from '../../component/UserHeader/UserHeader'
import UserPosts from './UserPosts/UserPosts';
import UserTodos from './UserTodos/UserTodos'


function User() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [pending, setPending] = useState(true)
    const [userPost, setUserPost] = useState([]);
    const [todos, setTodos] = useState([]);

    const getUser = () => {
        return new Promise((resolve, reject) => {
            axios.get('https://jsonplaceholder.typicode.com/users/' + id).then(res => { setUser(res.data); setPending(false); resolve(res.data) }).catch(err => {
                console.log(err);
                reject(err)
            })
        })
    }
    const getUserPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(res => { setUserPost(res.data); });
    }

    const getUserTodo = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`).then(res => { setTodos(res.data); })
    }
    useEffect(() => { getUser().then(getUserPost()).then(getUserTodo()); }, [])

    return (
        <div>
            {pending ?
                <div>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                    <Spinner type="grow" color="light" />
                    <Spinner type="grow" color="dark" />
                </div>
                :
                <Card className="my-3">

                    <CardHeader>
                        <Row >
                            <Col xs="8" className="mr-5">
                                <h2>{user.username}</h2>
                            </Col>
                            <UserHeader />
                        </Row>
                    </CardHeader>
                    <CardBody >
                        <Row>
                            <Col sm='7' className="align-self-center">
                                name: {user.name}<br />
                                email: {user.email}<br />
                                phone: {user.phone}<br />
                                address: {user.address.city} - {user.address.street}<br />
                                company: {user.company.name}
                            </Col>
                            <Col><img className="border rounded" src={`https://picsum.photos/400/150?random=${id}`}></img></Col>
                        </Row>
                    </CardBody>
                    <CardFooter>website: {user.website}</CardFooter>
                </Card>
            }

            <Switch>
                <Route exact path={`/users/${id}/userposts`}>
                    <UserPosts userPost={userPost} />
                </Route>
                <Route path={`/users/${id}/usertodos`}>
                    <UserTodos todos={todos} />
                </Route>
            </Switch>

        </div>
    )
}

export default User
