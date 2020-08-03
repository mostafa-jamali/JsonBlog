import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardFooter, CardBody, Row, Col } from 'reactstrap';
import axios from 'axios';


function UserTodos({ todos }) {

    return (
        <div>
            <Card className="mb-3">
                <CardHeader>
                    <h3>Todos</h3>
                </CardHeader>
                <CardBody>
                    {todos.map(todo =>
                        <Card key={todo.id} className="my-3">
                            <CardHeader><h6><span>Todo id : </span>{todo.id}</h6></CardHeader>
                            <CardBody>
                                <h5>{todo.title}</h5>
                            </CardBody>
                        </Card>)
                    }
                </CardBody>
            </Card>
        </div>
    )
}

export default UserTodos
