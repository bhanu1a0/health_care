import './header.css'
import { FaCircleExclamation } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-first'>
                <ul className='hospital-main-details-list'>
                    <li><FaCircleExclamation className='description-icon'/>Our Clinic sees over 10,000 patients every year?</li>
                    <li>Why Raising corona cases?</li>
                    <li><IoCallOutline className='description-icon'/>
                        emergency line:+8-106-124-574</li>
                    <li><FaLocationDot className='description-icon'/>Location: Hyderbad,Madhapur</li>
                    <li><MdOutlineAccessTime className='description-icon'/>Mon-Fri:-8:00am-7:00pm</li>
                    <li><select className='lang-option'>
                        <option>English</option>
                        <option>Telugu</option>
                    </select></li>
                </ul>
            </div>
            <div className='header-second'>
                <ul className='navbar'>
                    <li><h1 className='hospital-name-heading'>HealthCare</h1></li>
                    <li><span className='departments-menu'>Departments</span>
                        <ul className='departments-submenu'>
                            <li ><span className='department-list'>Neurology Clinic</span></li>
                            <li><span className='department-list'>Pathology Clinic</span></li>
                            <li><span className='department-list'>Cardiatic Clinic</span></li>
                            <li><span className='department-list'>Laboratory Analysis</span></li>
                            <li><span className='department-list'>Orthopolgoy Clinic</span></li>
                        </ul>
                    </li>
                    <li>|</li>
                    <li><Link to="/home" className='home-page-link'>Home</Link></li>
                    <li><Link to="/aboutus" className='aboutus-page-link'>About</Link></li>
                    <li ><span className='doctors-menu'>Doctors</span>
                        <ul className='doctors-submenu'>
                            <li><span className='doctor-list'>Doctor Timetable</span></li>
                            <li><span className='doctor-list'>Doctor Standarad</span></li>
                            <li><span className='doctor-list'>Doctor Modern</span></li>
                            <li><span className='doctor-list'>Doctor Grid</span></li>

                        </ul>
                    </li>
                    <li><span className='blog-menu'>Blog</span>
                        <ul className='blog-submenu'>
                            <li><Link to="/blog" className='our-blog-link'>Our Blog</Link></li>
                            <li><span className='blog-list'>Blog Standarad</span></li>
                            <li><span className='blog-list'>Our Single Post</span></li>
                        </ul>    
                    </li>
                    <li><Link to="/contact" className="contact-page-link">Contact</Link></li>
                    <li><a href="/home" className='search-link'><FaSearch className='search-icon'/></a></li>
                    {/* <li><input type="search" className='search-content'/></li> */}
                    
                    <li><Link to="/doctorstimetable" className='timetable-page-link'>Doctors' Timetable</Link></li>
                    <li><Link to="/makeappointment" ><button className='appointment-btn'>Make Appointment</button> </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header