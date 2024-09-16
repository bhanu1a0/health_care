import './showcontent.css'
// import {slider1} from {..assets/}
// import { FaBriefcaseMedical } from "react-icons/fa";


const ShowContent = () => {
    return (
        <div className='container-fluid'>
            <div className='health-container-2'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://media.istockphoto.com/id/1471781502/photo/veterinarian-ready-for-an-appointment.jpg?s=1024x1024&w=is&k=20&c=b6EVjTIACqjxSVfGlI08bUcvit8r9jbEu4xxRSYPmGI=" class="d-block  w-100" alt="health-image" />
                        </div>
                        <div class="carousel-item active">
                            <img src="https://as2.ftcdn.net/v2/jpg/03/20/52/31/1000_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg" class="d-block  w-100" alt="health-image" />
                        </div>
                        <div class="carousel-item active">
                            <img src="https://as1.ftcdn.net/v2/jpg/03/13/77/82/1000_F_313778250_Y0o5can6MA490Nt7G6p03Zfu5fKmWCIv.jpg" class="d-block  w-100" alt="health-image" />
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className='middle-content'>
                    <div className='details-card-1' >
                        {/* <FaBriefcaseMedical /> */}
                        <h1 className='card-hed'>Emergency Cases</h1>
                        <p>Please feel to welcome to any cases to treating clinic in the hospital.</p>
                        <p>086374762</p>
                    </div>
                    <div className='details-card-2'>
                        <h1 className='card-hed'>Doctor's Time table</h1>
                        <p>Please feel to welcome to any cases to treating clinic in the hospital.</p>
                        <button className='viewtimetable-btn'>view Timetable</button>
                    </div>
                    <div className='details-card-3'>
                        <h1 className='card-hed'>Opening hours</h1>
                        <p>monday-friday
                        8:00 - 7:00 pm</p>
                        <p>saturday
                        9:00 - 8:00 pm</p>
                        <p>sunday
                        10:00 - 9:00 pm</p>
                        <p>emergency
                        24HR / 7DAYS</p>
                    </div>
                    <div className='details-card-4'>
                        <h1 className='card-hed'>Location & Directions</h1>
                        <p>MIG: 174, KPHB Rd, 1, Rd Number 1, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.339072033801!2d78.39868137377275!3d17.491320199805493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91eec6be5af5%3A0xcd3be3ac01854336!2sLondon%20Gastro%20Care%20Hospitals!5e0!3m2!1sen!2sin!4v1725352747051!5m2!1sen!2sin" className='care-location' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowContent