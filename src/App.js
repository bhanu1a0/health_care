
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Homerouter'

import { BrowserRouter } from 'react-router-dom';

import {Routes, Route } from 'react-router-dom'
import Contact from './components/Contact/contact';
import Aboutus from './components/Aboutus/about';
import DoctorsTimeTable from './components/Doctorstimetable/doctorstimetable';
import MakeAppointment from './components/Makeappointment/makeappointment';
import Blog from './components/Blog/blog';

// import Finddoctor from './components/Finddoctor/finddoctor';

// import Providingclinic from './components/providingclinic/providingclinic';
// import ShowContent from './components/Showcontent/showcontent';
// import Footer from './components/Footer/footer';


function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home></Home>}/>
          <Route path="/" element={<Home></Home>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/doctorstimetable" element={<DoctorsTimeTable/>}/>
          <Route path="/makeappointment" element={<MakeAppointment/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
      {/*
       <ShowContent />
      <Finddoctor />
      <Providingclinic />
      <Footer />  */}
    </div>
  );
}

export default App;
