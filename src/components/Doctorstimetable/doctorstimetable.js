
import './doctorstimetable.css'
import Footer from '../Footer/footer'
import Header from '../header/header'


function DoctorsTimeTable() {
    return (
        <>
          <div className='doctorstimetable-container'>
          </div>
            <Header/>
                <div className='image-container'>
                    <h2>Doctor's Time Table</h2>
                </div>
                <div className='timings-container'>
                    <select className='option-clinic'>
                        <option>All Clinic</option>
                        <option>Cardiology Clinic</option>
                    </select>
                    <h2 className='doctors-time-heading'>Doctor's Time Table</h2>
                    <span>monday-friday
                        8:00 - 7:00 pm
                        </span>
                       <span> saturday
                        9:00 - 8:00 pm</span>
                       <span> sunday
                        10:00 - 9:00 pm</span>
                       <span> emergency
                        24HR / 7DAYS
                    </span>
                </div>
            <Footer />
        </>
    )
}


export default DoctorsTimeTable