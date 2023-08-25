import React from 'react'
import { Link, Outlet } from 'react-router-dom';

import './User.css'
import Step1 from '../../Steps/Step1';
import Step2 from '../../Steps/Step2';
import Step3 from '../../Steps/Step3';
import Step4 from '../../Steps/Step4';
import Step5 from '../../Steps/Step5';

const EmployeesCreate = () => {
    return (
        <div className='container'>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-basic-tab" data-bs-toggle="pill" data-bs-target="#pills-basic" type="button" role="tab" aria-controls="pills-basic" aria-selected="true">Step1<br />Basic Details </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education" type="button" role="tab" aria-controls="pills-education" aria-selected="false">Step2<br />Education Details</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-work-tab" data-bs-toggle="pill" data-bs-target="#pills-work" type="button" role="tab" aria-controls="pills-work" aria-selected="false">step3<br />Work Experience</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-bank-tab" data-bs-toggle="pill" data-bs-target="#pills-bank" type="button" role="tab" aria-controls="pills-bank" aria-selected="false" >step4<br />Bank Details</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-proof-tab" data-bs-toggle="pill" data-bs-target="#pills-proof" type="button" role="tab" aria-controls="pills-proof" aria-selected="false" >step5<br />Proof Details</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">

                <div class="tab-pane fade show active" id="pills-basic" role="tabpanel" aria-labelledby="pills-basic-tab" tabindex="0"><Step1 /></div>

                <div class="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab" tabindex="0"><Step2 /></div>

                <div class="tab-pane fade" id="pills-work" role="tabpanel" aria-labelledby="pills-work-tab" tabindex="0"><Step3 /></div>

                <div class="tab-pane fade" id="pills-bank" role="tabpanel" aria-labelledby="pills-bank-tab" tabindex="0"><Step4 /></div>

                <div class="tab-pane fade" id="pills-proof" role="tabpanel" aria-labelledby="pills-proof-tab" tabindex="0"><Step5 /></div>
            </div>
        </div>
    )
}

export default EmployeesCreate;