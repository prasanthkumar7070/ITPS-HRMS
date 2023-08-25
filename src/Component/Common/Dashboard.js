import React, { useEffect } from 'react'
import "./SideNav.css"
const Dashboard = () => {

    useEffect(() => {
        var elem = document.querySelector('input[type="range"]');

        var rangeValue = function () {
            var newValue = elem.value;
            var target = document.querySelector('.value');
            target.innerHTML = newValue;
        }

        elem.addEventListener("input", rangeValue);

    })
    return (
        <div className='background'>
            <div className='container mt-5 dashboard'>
                <div className='row'>

                    {/* Dashboard Main-section */}
                    <div className='col-md-4'>
                        <div className='cards d-flex one'>
                            <div className=''>
                                <h3>Total Employee</h3>
                                <div className='range'>
                                    <div class="value mt-3">0</div>
                                    <input type="range" min="0" max="10" step="1" value="0" />
                                </div>
                            </div>

                            <div className='poster'>
                                <span class="fa fa-window-restore" aria-hidden="true"></span>
                            </div>

                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='cards d-flex two'>
                            <div className=''>
                                <h3>Total Present</h3>
                                <div className='range'>
                                    <div class="value mt-3">0</div>
                                    <input type="range" min="0" max="10" step="1" value="0" />
                                </div>
                            </div>

                            <div className='poster'>
                                <span class="fa fa-users" aria-hidden="true"></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='cards d-flex three'>
                            <div className=''>
                                <h3>Total Absents</h3>
                                <div className='range'>
                                    <div class="value mt-3">0</div>
                                    <input type="range" min="0" max="10" step="1" value="0" />
                                </div>
                            </div>

                            <div className='poster'>
                                <span class="fa fa-th-list" aria-hidden="true"></span>
                            </div>
                        </div>
                    </div>

                    {/* Department Summary */}
                    <h5 className='mt-3 px-2'>Department Summary</h5>
                    <div className='summary-detals row text-center'>
                        <div className='col-md-3'>
                            <div className='list-data'>
                                <h5>Accounts</h5>
                                <p1>1</p1>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='list-data'>
                                <h5>Administrator</h5>
                                <p1>1</p1>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='list-data'>
                                <h5>Development</h5>
                                <p1>1</p1>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='list-data'>
                                <h5>Sales</h5>
                                <p1>1</p1>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='list-data'>
                                <h5>Sales</h5>
                                <p1>0</p1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard