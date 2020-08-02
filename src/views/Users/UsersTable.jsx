import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';
function UsersTable() {
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUsers(res.data))
    }
    useEffect(() => getUsers(), []);
    return (
        <div className='mt-4'>
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
                        users.map(user => <tr key={user.id}>
                            <th>{user.id}</th>
                            <th>{user.username}</th>
                            <th>{user.name}</th>
                            <th>{user.email}</th>
                            <th>{user.website}</th>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default UsersTable
