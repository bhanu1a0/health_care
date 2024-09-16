
import Footer from '../Footer/footer'
import Header from '../header/header'
import './contact.css'


function Contact() {
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='contact-container'>
                    <h1 className='contact-heading'>Contact</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.339072033801!2d78.39868137377275!3d17.491320199805493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91eec6be5af5%3A0xcd3be3ac01854336!2sLondon%20Gastro%20Care%20Hospitals!5e0!3m2!1sen!2sin!4v1725289857863!5m2!1sen!2sin" className='location-map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='contact-sub-container'>
                    <div className='contact-form-container'>
                        <div className='form-container'>
                            <div>
                                <h2>How can we help?</h2>
                                <p>Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our doctors will receive or return calls.</p>
                            </div>    
                        <div>
                            <input type="name" placeholder='Name' className='contact-input'/>
                            <input type="email" placeholder='email' className='contact-input' />
                        </div>
                        <div>
                            <input type="text" placeholder='Subject' className='contact-input' />
                            <input type="number" placeholder='Phone' className='contact-input'/>
                        </div>
                        <div>
                            <textarea rows="5" cols="82" placeholder='Message'></textarea>
                        </div>
                        <div>
                            <button className='submit-btn'>Submit Request</button>
                        </div>

                    </div>

                    {/* <div className='image-container'>
                        <h1>delivering the best care for family</h1>
                        <p>modern, busy lifestyles, it’s easy to neglect your health as you put everyone needs first. So, we’re here for your family.</p>
                        <button>FIND A DOCTOR</button>
                    </div> */}
                </div>
            </div>
        </div >
            <Footer />
        </>
    )
}

export default Contact