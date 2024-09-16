import Footer from '../Footer/footer'
import Header from '../header/header'

import './about.css'

function Aboutus() {
    return (
        <>
            <Header />

            <h1 className='aboutus-heading'>About us</h1>
            <div className='aboutus-container'>
                <div className='aboutus-content'>
                    <h2 className='aboutus-content-heading'>Sets The Standard For High Quality Care And Patient Safety!!</h2>
                    <p className='aboutus-prescription'>Our doctors include highly qualified practitioners who come from a range of backgrounds and bring a diversity of skills. Besides, our staff have exceptional people skills.</p>
                    <div>
                        <button className='aboutus-doctor-btn'>FIND A DOCTOR</button>
                        <button className='aboutus-corevalues-btn'>Our Core Values</button>
                    </div>
                </div>
                </div>
                <div className='aboutus-card-content'>
                    <div class="aboutus-card">
                        <div class="card-body">
                            <h5 class="card-title">fill our medical application
                            </h5>
                            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            <p class="card-text">Medisch offers free or low-cost health coverage for adults.</p>
                            <span class="card-link">Doctor's Timetable</span>
                        </div>
                    </div>

                    <div class="aboutus-card">
                        <div class="card-body">
                            <h5 class="card-title">Review Your Family History

                            </h5>
                            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            <p class="card-text">Health exams help find problems with early chances which helps.</p>
                            <span class="card-link">Start a CheckUp</span>
                        </div>
                    </div>

                    <div class="aboutus-card">
                        <div class="card-body">
                            <h5 class="card-title">Choose Between Our Programs

                            </h5>
                            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            <p class="card-text">We have protocols to protect our patients to provide necessary care.</p>
                            <span class="card-link">Explore a Programs</span>
                        </div>
                    </div>

                    <div class="aboutus-card">
                        <div class="card-body">
                            <h5 class="card-title">Introduce To Qualified Doctors
                            </h5>
                            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            <p class="card-text">Our administration and support staff all have exceptional people skills
.</p>
                            <span class="card-link">Meet Your Doctors</span>
                        </div>
                    </div>

                </div>
          
            <Footer />
        </>
    )
}

export default Aboutus