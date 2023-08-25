import React, { useEffect, useState } from 'react'
import "./SideNav.css"
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard';
const SideNavbar = () => {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isFeatShowVisible, setIsFeatShowVisible] = useState(false);
    const [isServ1ShowVisible, setIsServ1ShowVisible] = useState(false);
    const [isServ2ShowVisible, setIsServ2ShowVisible] = useState(false);
    const [isServ3ShowVisible, setIsServ3ShowVisible] = useState(false);
    const [isServ4ShowVisible, setIsServ4ShowVisible] = useState(false);
    const [isServ5ShowVisible, setIsServ5ShowVisible] = useState(false);
    const [isServ6ShowVisible, setIsServ6ShowVisible] = useState(false);

    const [activeItem, setActiveItem] = useState(0);

    const handleSidebarToggle = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleFeatToggle = () => {
        setIsFeatShowVisible(!isFeatShowVisible);
    };

    const handleServ1Toggle = () => {
        setIsServ1ShowVisible(!isServ1ShowVisible);
    };

    const handleServ2Toggle = () => {
        setIsServ2ShowVisible(!isServ2ShowVisible);
    };

    const handleServ3Toggle = () => {
        setIsServ3ShowVisible(!isServ3ShowVisible);
    };

    const handleServ4Toggle = () => {
        setIsServ4ShowVisible(!isServ4ShowVisible);
    };

    const handleServ5Toggle = () => {
        setIsServ5ShowVisible(!isServ5ShowVisible);
    };

    const handleServ6Toggle = () => {
        setIsServ6ShowVisible(!isServ6ShowVisible);
    };

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (

        <div className="side-nav">
            <div onClick={handleSidebarToggle} className={`btn ${ isSidebarVisible ? 'click' : '' }`} >
                <span className="fa fa-bars"></span>
            </div>
            <nav className={`sidebar ${ isSidebarVisible ? 'show' : '' }`} >
                <div className="text">
                    HRMS
                </div>
                <ul id='sideNavbar'>
                    <li className={activeItem === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>
                        <Link to='/'><i className='fa fa-television text-white'></i> Dashboard</Link>
                    </li>
                    <li>
                        <Link className={`feat-btn ${ isFeatShowVisible ? 'active' : '' }`} onClick={handleFeatToggle}>
                            <i className='fa fa-users'></i> Employees
                            <span className={`fas fa-caret-down first ${ isFeatShowVisible ? 'rotate' : '' }`}></span>
                        </Link>
                        <ul className={`feat-show ${ isFeatShowVisible ? 'show' : '' }`}>
                            <li onClick={handleSidebarToggle}><Link to={'employee/Create'}>Employee Create</Link></li>
                            <li onClick={handleSidebarToggle}><Link to={'employee/List'}>Employee List</Link></li>
                            <li onClick={handleSidebarToggle}><Link to={'employee/Import'}>Employee Imports</Link></li>
                            <li onClick={handleSidebarToggle}><Link to={'employee/award'}>Awards List</Link></li>
                            <li onClick={handleSidebarToggle}><Link to={'employee/notice'}>Notice List</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link className={`serv-btn ${ isServ1ShowVisible ? 'active' : '' }`} onClick={handleServ1Toggle}>
                            <i className='fa fa-book'></i> Attendance
                            <span className={`fas fa-caret-down second ${ isServ1ShowVisible ? 'rotate' : '' }`}></span>
                        </Link>
                        <ul className={`serv-show ${ isServ1ShowVisible ? 'show1' : '' }`}>
                            <li><Link onClick={handleSidebarToggle}>Attendance Import</Link></li>
                            <li><Link>Manual Punching</Link></li>
                            <li><Link>Leave Application</Link></li>
                            <li><Link>Absents Details</Link></li>
                            <li><Link>Attendance Verification</Link></li>
                        </ul>
                    </li>


                    <li>
                        <Link className={`serv-show ${ isServ2ShowVisible ? 'active' : '' }`} onClick={handleServ2Toggle}><i className='fa fa-rupee'></i> Payroll
                            <span className={`fas fa-caret-down third ${ isServ2ShowVisible ? 'rotate' : '' }`}></span>
                        </Link>
                        <ul className={`serv-show ${ isServ2ShowVisible ? 'show2' : '' }`}>
                            <li><Link onClick={handleSidebarToggle}>Attendance Import</Link></li>
                            <li><Link>Manual Punching</Link></li>
                            <li><Link>Leave Application</Link></li>
                            <li><Link>Absents Details</Link></li>
                            <li><Link>Attendance Verification</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link className={`serv-show ${ isServ3ShowVisible ? 'active' : '' }`} onClick={handleServ3Toggle}><i className='fa fa-id-card'></i> Reportes
                            <span className={`fas fa-caret-down fourth ${ isServ3ShowVisible ? 'rotate' : '' }`}></span>
                        </Link>
                        <ul className={`serv-show ${ isServ3ShowVisible ? 'show3' : '' }`}>
                            <li><Link onClick={handleSidebarToggle}>Attendance Import</Link></li>
                            <li><Link>Manual Punching</Link></li>
                            <li><Link>Leave Application</Link></li>
                            <li><Link>Absents Details</Link></li>
                            <li><Link>Attendance Verification</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link className={`serv-show ${ isServ4ShowVisible ? 'active' : '' }`} onClick={handleServ4Toggle}><i className='fa fa-cubes'></i> Job
                            <span className={`fas fa-caret-down fifth ${ isServ4ShowVisible ? 'rotate' : '' }`}></span>
                        </Link>
                        <ul className={`serv-show ${ isServ4ShowVisible ? 'show4' : '' }`}>
                            <li><Link onClick={handleSidebarToggle}>Attendance Import</Link></li>
                            <li><Link>Manual Punching</Link></li>
                            <li><Link>Leave Application</Link></li>
                            <li><Link>Absents Details</Link></li>
                            <li><Link>Attendance Verification</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link className={`serv-show ${ isServ5ShowVisible ? 'active' : '' }`} onClick={handleServ5Toggle}><i className='fa fa-th-large'></i> Masters
                            <span className={`fas fa-caret-down sixth ${ isServ5ShowVisible ? 'rotate' : '' }`}></span>
                        </Link>
                        <ul className={`serv-show ${ isServ5ShowVisible ? 'show5' : '' }`}>
                            <li><Link onClick={handleSidebarToggle}>Attendance Import</Link></li>
                            <li><Link>Manual Punching</Link></li>
                            <li><Link>Leave Application</Link></li>
                            <li><Link>Absents Details</Link></li>
                            <li><Link>Attendance Verification</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link className={`serv-show ${ isServ6ShowVisible ? 'active' : '' }`} onClick={handleServ6Toggle}><i className='fa fa-cube'></i> App Master
                            <span className={`fas fa-caret-down sixth ${ isServ6ShowVisible ? 'rotate' : '' }`}></span>
                        </Link>
                        <ul className={`serv-show ${ isServ6ShowVisible ? 'show6' : '' }`}>
                            <li><Link onClick={handleSidebarToggle}>Attendance Import</Link></li>
                            <li><Link>Manual Punching</Link></li>
                            <li><Link>Leave Application</Link></li>
                            <li><Link>Absents Details</Link></li>
                            <li><Link>Attendance Verification</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>


    )
}

export default SideNavbar