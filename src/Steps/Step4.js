import React from 'react'

const Step4 = () => {
    return (
        <div>

            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <form className='form' >
                        <label htmlFor='empNo'>Emp No<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' />

                        <label htmlFor='cardNo'>Card No (8digitonly)<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' />

                        <label htmlFor='fname'>Full Name<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' />

                        <label htmlFor='fathername'>Father Name<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' />

                        <label htmlFor='email'>Email<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' />
                    </form>
                </div>

                <div className='col-md-6 col-sm-12'>
                    <form className='form'>
                        <label htmlFor='present'>Present Address<sup className='text-danger'>*</sup></label>
                        <input type='address' className='mb-2' />

                        <label htmlFor='perminant'>Perminant Address<sup className='text-danger'>*</sup></label>
                        <input type='address' className='mb-2' />

                        <label htmlFor='city'>City<sup className='text-danger'>*</sup></label><br />
                        <select name="city" id="city" className='selction mb-2'>
                            <option value="choose">Choose city</option>
                            <option value="kakinada">Kakinada</option>
                            <option value="Vizag">Vizag</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Guntur">Guntur</option>
                            <option value="tirupati">Tirupati</option>
                            <option value="amalapuram">Amalapuram</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="pune">Pune</option>
                        </select><br />

                        <label htmlFor='pinCode'>Pin code<sup className='text-danger'>*</sup></label>
                        <input type='text' className='mb-2' />

                        <label htmlFor='company'>Company Name<sup className='text-danger'>*</sup></label><br />
                        <select name="company" id="company" className='selction mb-2'>
                            <option value="choose">Choose Company</option>
                            <option value="kakinada">infosys</option>
                            <option value="Vizag">Tech Mahendhra</option>
                            <option value="Hyderabad">KMPG</option>
                            <option value="Guntur">infinte</option>
                            <option value="tirupati">TCS</option>
                            <option value="amalapuram">Wipro</option>
                            <option value="bangalore">Oracle</option>
                            <option value="pune">Digital Lynk</option>
                        </select><br />
                    </form>
                </div>
            </div>
            <button className='btn btn-warning save-btn'>Save</button>
        </div>
    )
}

export default Step4