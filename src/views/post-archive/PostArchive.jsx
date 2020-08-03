import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PostCard from '../../component/PostCard/PostCard'
import { Row, Col } from 'reactstrap';
import { Card, CardHeader, CardBody, Spinner } from 'reactstrap';

function PostArchive() {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => { setPosts(res.data); setIsLoading(false) })
    }
    useEffect(() => { getPosts() }, [])
    return (
        <div className='mt-3'>
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
                    <Card className="mb-3">
                        <CardHeader>
                            <h3>Posts</h3>
                        </CardHeader>
                        <CardBody>
                            {
                                posts.map(post => <Col key={post.id} className='mt-3'>
                                    <PostCard post={post} />
                                </Col>)
                            }
                        </CardBody>
                    </Card>
            }

        </div>
    )
}

export default PostArchive
