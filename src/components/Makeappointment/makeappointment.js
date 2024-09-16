
import './makeappointment.css'
import Footer from '../Footer/footer'
import Header from '../header/header'

const MakeAppointment = () => {
    return (
        <>
            <Header />
            {/* <div className='container-fluid'> */}
            <div className='makeappointment-container'>
                <div className='appointment-content'>
                    <div className='col-6'>
                        <h2 className='appointment-content-heading'>Delivering Tomorrow’s Care For Your Family.</h2>
                        <p className='appointment-prescription'>Our doctors include highly qualified practitioners who come from a range of backgrounds and bring a diversity of skills. Besides, our staff have exceptional people skills.</p>
                        <div>
                            <button className='appointment-more-btn'>More About Us</button>
                        </div>
                    </div>
                </div>
                <div className='appointment-container'>

                <div className='appointment-content-1'>
                    <div className=''>
                        <h2 className='appointment-content-heading'>Sets The Standard For High Quality Care And Patient Safety!!</h2>
                        <p className='appointment-prescription'>Our doctors include highly qualified practitioners who come from a range of backgrounds and bring a diversity of skills. Besides, our staff have exceptional people skills.</p>
                        <div>
                            <button className='appointment-make-btn'>Make A Gift</button>
                            <button className='appointment-help-btn'>Help & FAQ's</button>
                        </div>
                    </div>
                </div>
                <div className='appointment-form'>
                    <h2>Book An Appointment</h2>
                    <p>Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our doctors will receive or return calls.
                    </p>
                    <div>
                        <input type="name" placeholder='Name' className='appointment-input'/>
                        <input type="email" placeholder='email' className='appointment-input'/>
                    </div>
                    <div>
                        <select className='clinic-select-option'>
                            <option>Neurology Clinic</option>
                            <option>Pathology Clinic</option>
                            <option>Cardiolgy Clinic</option>
                        </select>
                        <select className='doctor-select-option'>
                            <option>Dr.Amulya</option>
                            <option>Dr.Sreenivas Reddy</option>
                            <option>Dr.Chakravarthy</option>
                        </select>

                    </div>
                    <div>
                        <input type="number" placeholder='phone' className='appointment-input' />
                        <input type="date" className="select-date" placeholder='Set Date'  className='appointment-input'/>
                        <input type="time" placeholder='Set Time' className='appointment-input'/>
                    </div>
                    <div>
                        <button className='appointment-submit-btn'>Submit Request</button>
                    </div>
                    </div>
                </div>

            </div>
            {/* </div> */}
            <Footer />
        </>
    )
}

export default MakeAppointment