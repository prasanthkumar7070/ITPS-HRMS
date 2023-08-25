import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Store } from './EmployeContetxt';
import EmployeesCreate from './EmployeesCreate';
import EmployeesList from './EmployeesList';
const Employes = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers()
    }, [])
    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            console.log(response.data)
            setUsers(response.data)
        })
    }
    const setAddusers = (actionName, data) => {
        if (actionName === "add") {
            setUsers([...users, { id: users.length + 1, ...data }])
        } else {
            setUsers(users.filter(user => user.id !== data))
        }
    }
    return (
        <div className='mt-3'>
            <Store.Provider value={{ users: users, setAddusers }}>
                <EmployeesCreate></EmployeesCreate>
                <EmployeesList></EmployeesList>
            </Store.Provider>
        </div>
    )
}
export default Employes