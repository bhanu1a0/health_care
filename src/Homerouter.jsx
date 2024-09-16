

import './Homerouter.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import Finddoctor from './components/Finddoctor/finddoctor';
import Header from './components/header/header';
import Providingclinic from './components/providingclinic/providingclinic';
import ShowContent from './components/Showcontent/showcontent';
import Footer from './components/Footer/footer';

function Home() {
    return (
        <div className='app-container'>
            <Header />
            <ShowContent />
            <Finddoctor />
            <Providingclinic />
            <Footer />
        </div>
    )
}

export default Home