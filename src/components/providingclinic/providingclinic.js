import './providingclinic.css'
import { TiTick } from "react-icons/ti";

const Providingclinic = () => {
    return (
          <div className="container-fluid">
                  <div className='providingclinic-container'>
            <div className='clinic-card-1'>
                <img src='https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=826&t=st=1725253500~exp=1725254100~hmac=fe110e4b8443ac1a4c04c6a16a8e08993f9acb9dfd9d457f68d4d4e3c84ed975' className='card-image' alt=""/>
                <h2>Neourology Clinic</h2>
                <p>Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs called fellowships, and one to two years.</p>
                <li><TiTick />NeuroCritical Care</li><br/>
                <li><TiTick />Neuro Oncology</li><br/>
                <li><TiTick />geriatric neurology</li>
                <button className='readmore-btn'>Read More</button>
            </div>
            <div className='clinic-card-2'>
            <img src='https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=826&t=st=1725253500~exp=1725254100~hmac=fe110e4b8443ac1a4c04c6a16a8e08993f9acb9dfd9d457f68d4d4e3c84ed975' className='card-image' alt=""/>
                <h2>Cardiology Clinic</h2>
                <p>Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs called fellowships, and one to two years.</p>
                <li><TiTick />NeuroCritical Care</li><br/>
                <li><TiTick />Neuro Oncology</li><br/>
                <li><TiTick />geriatric neurology</li>
                <button className='readmore-btn'>Read More</button>
            </div>
            <div className='clinic-card-3'>
            <img src='https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=826&t=st=1725253500~exp=1725254100~hmac=fe110e4b8443ac1a4c04c6a16a8e08993f9acb9dfd9d457f68d4d4e3c84ed975' className='card-image' alt=""/>
                <h2>Pathology Clinic</h2>
                <p>Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs called fellowships, and one to two years.</p>
                <li><TiTick />NeuroCritical Care</li><br/>
                <li><TiTick />Neuro Oncology</li><br/>
                <li><TiTick />geriatric neurology</li>
                <button className='readmore-btn'>Read More</button>
            </div>
        </div>
          </div>
    )
}

export default Providingclinic