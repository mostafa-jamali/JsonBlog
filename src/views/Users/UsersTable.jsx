import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
function UsersTable() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => { setUsers(res.data); setIsLoading(false) })
    }
    useEffect(() => getUsers(), []);
    return (
        <div className='mt-4'>
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
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>username</th>
                            <th>name</th>
                            <th>email</th>
                            <th>website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user.id} style={{ cursor: "pointer" }}>
                                <td>{user.id}</td>
                                <td><Link to={`/users/${user.id}`}>{user.username}</Link></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            }

        </div>
    )
}

export default UsersTable
