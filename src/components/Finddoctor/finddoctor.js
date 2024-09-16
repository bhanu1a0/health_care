import './finddoctor.css'
import { FaYoutube } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

const Finddoctor = () => {
    return (
        <>
             <div className='container-fluid'>
             <div className='finddoctor-container'>
                <div className='finddoctor-content-1'>
                    <h1 className='caring-content'>Caring For The Health And Well Being Of You And Your Family.
                    </h1>
                </div>
                <div className='finddoctor-content-2'>
                    <h2>We provide all aspects of medical practice for your whole family, including general check-ups or assisting you with specific injuries.</h2>
                    <p>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest

                    </p>
                    <div>
                        <button className='finddoctor-btn'>FIND A DOCTOR</button>
                        <button className='moreabout-btn'>More About Us</button>
                    </div>
                </div>
            </div>

            <div className='presentation-container'>
                <img src="https://as2.ftcdn.net/v2/jpg/02/18/39/49/1000_F_218394966_Nrv1qTeQxsZgJ5WaHnZHqd7vd2Xvxr8A.jpg" className='presentation-pic' alt="doctor" />
                <div className='watchpresentation-btn'>
                    <div>
                        <span><FaYoutube className='youtube-icon' /></span>
                    </div>
                    <div>
                        <span className='watch-heading'>Watch Your Presentation</span>
                    </div>
                </div>
                <div className='presentation-content'>
                    <p>We’re here to care for you and your entire family. Regular visits to the doctor will depend on your age and general health!</p>
                    <ul className='presentation-list'>
                        <li><SiTicktick className='tick-icon'/> Health assessments</li>
                        <li><SiTicktick className='tick-icon'/> Home Medicine Review</li>
                        <li><SiTicktick className='tick-icon'/>  Fractures and dislocations</li>
                        <li><SiTicktick className='tick-icon'/>  Desensitisation injections</li>
                    </ul>
                </div>
            </div>
             </div>
        </>
    )
}

export default Finddoctor