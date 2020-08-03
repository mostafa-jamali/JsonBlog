import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardFooter, CardBody, Row, Col, Spinner } from 'reactstrap';
function PostSingle() {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => { setPost(res.data); setIsLoading(false) }).catch(err => console.warn(err))
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => { setComments(res.data); setIsLoading(false) }).catch(err => console.warn(err))
    };
    useEffect(() => { getData() }, []);
    return (
        <div>
            {
                isLoading ?
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
                    <div>
                        <Card className="my-3">
                            <CardHeader><h2>{post.title}</h2></CardHeader>
                            <CardBody>
                                <p>
                                    {post.body}
                                </p>
                            </CardBody>
                            <CardFooter>{post.userId}</CardFooter>
                        </Card>
                        <Card className="mb-3">
                            <CardHeader><h2>comments</h2></CardHeader>
                            <CardBody>
                                <Row>
                                    {
                                        comments.map(comment => <Col xs={12} className='border p-3'>
                                            <div>comment by:{comment.name}</div>
                                            <div>email:{comment.email}</div>
                                            <div>{comment.body}</div>
                                        </Col>)
                                    }
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
            }
        </div>
    )
}

export default PostSingle
