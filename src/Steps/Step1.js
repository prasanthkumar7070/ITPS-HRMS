import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Store } from '../Component/Employees/EmployeContetxt';
const Step1 = () => {
    const [data, setData] = useState({
        empNo: "",
        cardNo: "",
        fullname: "",
        fathername: "",
        email: "",

        address: {
            street: "",
        },
        city: "",
        zipcode: "",
        perminant: "",
        company: {
            name: ""
        }
    });

    const addUsers = () => {
        setAddusers("add", data)
        setData({
            empNo: "",
            cardNo: "",
            name: "",
            fathername: "",
            email: "",

            address: {
                street: "",
            },
            city: "",
            zipcode: "",
            perminant: "",
            company: {
                name: ""
            }
        });
        alert("Data successfully Saved");
    }

    const submitHandler = (formField, value) => {
        if (formField === "address") {
            setData({ ...data, address: { street: value } })
        }
        // else if (formField === "address") {
        //     setData({ ...data, address: { city: value } })
        // }
        // else if (formField === "address") {
        //     setData({ ...data, address: { zipcode: value } })
        // }
        else if (formField === "company") {
            setData({ ...data, company: { name: value } })
        } else {
            setData({ ...data, [formField]: value })
        }
        // setData("")
    }
    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     setData(data)
    // }
    const { setAddusers } = useContext(Store);
    return (
        <div>
            <div className='row'>
                <h3 className='mx-5'>Basic Details</h3>
                <div className='col-md-6 col-sm-12'>
                    <form className='form' >
                        <label htmlFor='empNo'>Emp No<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' id="empNo" value={data.empNo} onChange={(e) => submitHandler("empNo", e.target.value)} aria-describedby="empNo" />

                        <label htmlFor='cardNo'>Card No (8digitonly)<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' id="cardNo" value={data.cardNo} onChange={(e) => submitHandler("cardNo", e.target.value)} aria-describedby="cardNo" />

                        <label htmlFor='name'>Full Name<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' id="name" value={data.name} onChange={(e) => submitHandler("name", e.target.value)} aria-describedby="name" />

                        <label htmlFor='fathername'>Father Name<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' id="fathername" value={data.fathername} onChange={(e) => submitHandler("fathername", e.target.value)} aria-describedby="fathername" />

                        <label htmlFor='email'>Email<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' id="email" value={data.email} onChange={(e) => submitHandler("email", e.target.value)} aria-describedby="email" />
                    </form>
                </div>

                <div className='col-md-6 col-sm-12'>
                    <form className='form'>
                        <label htmlFor='address'>Present Address<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' id="address" value={data.address.street} onChange={(e) => submitHandler("address", e.target.value)} aria-describedby="address" />

                        <label htmlFor='perminant'>Perminant Address<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' id="perminant" value={data.perminant} onChange={(e) => submitHandler("perminant", e.target.value)} aria-describedby="perminant" />

                        <label htmlFor='city'>City<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' id="city" value={data.city} onChange={(e) => submitHandler("city", e.target.value)} aria-describedby="city" />

                        <label htmlFor='zipcode'>Pincode<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' id="zipcode" value={data.zipcode} onChange={(e) => submitHandler("zipcode", e.target.value)} aria-describedby="zipcode" />

                        <label htmlFor='company'>Perminant Address<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' id="company" value={data.company.name} onChange={(e) => submitHandler("company", e.target.value)} aria-describedby="company" />


                    </form>
                </div>
            </div>
            <button className='btn btn-warning save-btn' onClick={addUsers}>Save</button>

        </div>
    )
}

export default Step1