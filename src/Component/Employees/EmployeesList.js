import React, { useContext } from 'react'
import { Store } from './EmployeContetxt'
const EmployeesList = () => {
    const { users, setAddusers } = useContext(Store)
    console.log(users)


    const delUsers = () => {
        setAddusers()
    }
    return (
        <div className='container'>
            <h2>Lists</h2>
            {users.map((user) => (
                <div>
                    <h5>Id: {user.id}<br /></h5>
                    <h5>empNo:{user.empNo}<br /></h5>
                    <h5>CardNo:{user.cardNo}<br /></h5>
                    <h5>Full Name:{user.name}<br /></h5>
                    <h5>Father Name:{user.fathername}<br /></h5>
                    <h5>Email:{user.email}<br /></h5>
                    <h5>Present Address:{user.address.street}<br /></h5>
                    <h5>Perminant Address:{user.perminant}<br /></h5>
                    <h5>City:{user.city}<br /></h5>
                    <h5>Pincode:{user.zipcode}<br /></h5>
                    <h5>Company:{user.company.name}<br /></h5>
                </div>
            ))}
        </div>
    )
}

export default EmployeesList