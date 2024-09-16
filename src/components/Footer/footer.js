import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            {/* <div className="container-fluid"> */}
                <div className='footer-container'>
                    <div className='list-con col-3'>
                        <h2 className='heading'>Quick-Contact</h2><br />
                        <ul>
                            <li className=''>If you have any questions or need help, feel free to contact with our team.</li><br />
                            <li className='highlight'><IoCallOutline />line 24/7:
                                (+965) 7492-4277</li><br />
                            <li>2307 Beverley Rd Brooklyn, New York 11226 United States.</li><br />
                            <li className='highlight'>Get directions</li><br />
                        </ul>
                    </div>
                    <div className='list-con col-2'>
                        <h2 className='heading'>Department</h2><br />
                        <ul className='option-list'>
                            <li className='list'>Neourology Clinic</li><br />
                            <li className='list'>Pathology Clinic</li><br />
                            <li className='list'>Laboratory Analysis</li><br />
                            <li className='list'>Padiatric Clinic</li><br />
                            <li className='list'>Cardiac Clinic</li>
                        </ul>
                    </div>
                    <div className='list-con col-2'>
                        <h2 className='heading'>Links</h2><br />
                        <ul className='option-list'>
                            <li className='list'>About us</li><br />
                            <li className='list'>Our Clinic</li><br />
                            <li className='list'>Our Media</li><br />
                            <li className='list'>News & Media</li>
                        </ul>
                    </div>
                    <div className='list-con col-2'>
                        <h2 className='heading'>Help</h2><br />
                        <ul className='option-list'>
                            <li className='list'>Contacts</li><br />
                            <li className='list'>Career's</li><br />
                            <li className='list'>Help & Faq's</li><br />
                            <li className='list'>Site map</li>
                        </ul>
                    </div>
                    <div className='list-con col-3'>
                        <h2 className='heading'>News letter</h2><br />
                        <ul className='option-list'>
                            <li className='sub-email'><input type="email" placeholder='Your email...' className='search-mail' /></li>
                            <FaRegArrowAltCircleRight className='email-right-icon' />
                            <li><input type="checkbox" /> I agree terms and Conditions</li>
                        </ul>
                    </div>

                </div>
                <div className='social-container'>
                    <p className='copyright'>© 2024 Medical All Rights Reserved.</p>
                    <span>Stay Connected:<FaFacebook className='facebook-icon' /><FaLinkedin className='linkedin-icon' /></span>
                </div>
            {/* </div> */}
        </>

    )
}

export default Footer