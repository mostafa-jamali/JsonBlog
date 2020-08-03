import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, Row, Col } from 'reactstrap';


function UserPosts({ userPost }) {
    
    return (
        <div>
            <Card className="mb-3">
                <CardHeader>
                    <h3>Posts</h3>
                </CardHeader>
                <CardBody>
                    {userPost.map(post =>
                        <Card key={post.id} className="my-3">
                            <CardHeader><h5>{post.title}</h5><h6><span>Post id : </span>{post.id}</h6></CardHeader>
                            <CardBody>
                                {post.body}
                            </CardBody>
                        </Card>)
                    }
                </CardBody>
            </Card>
        </div >
    )
}

export default UserPosts
