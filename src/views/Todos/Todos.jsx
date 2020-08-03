import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Spinner } from 'reactstrap';
import axios from 'axios';


function Todos() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    const getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {setTodos(res.data); setIsLoading(false)})
    }
    useEffect(() => { getPosts() }, [])
    return (
        <div className='mt-3'>
            {isLoading ?
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
            }
        </div>
    )
}

export default Todos
