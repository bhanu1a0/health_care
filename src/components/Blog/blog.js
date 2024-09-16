import './blog.css'
import Footer from '../Footer/footer'
import Header from '../header/header'

const Blog = () => {
    return(
        <>
           <Header/>
            <div className='blog-container'>    </div>
                <div className='blog-image-container'>
                    <h3>Our Blog</h3>
                </div>
                  
                <div className='blogclinic-container'>
            <div className='blog-clinic-card-1'>
                <img src='https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=826&t=st=1725253500~exp=1725254100~hmac=fe110e4b8443ac1a4c04c6a16a8e08993f9acb9dfd9d457f68d4d4e3c84ed975' className='card-image' alt=""/>
                <p className='blog-topic'><span className='blog-topic-description'>Mental Health Wellness</span>  Dr.venkat</p>
                <h2 className='blog-card-heading'>6 tips to protect your mental health when sick</h2>
                <p className='blog-topic-explanation'>It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true if you test positive for COVID-19, or...</p>
            
                <button className='blog-readmore-btn-1'>Read More</button>
            </div>
            <div className='blog-clinic-card-2'>
            <img src='https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=826&t=st=1725253500~exp=1725254100~hmac=fe110e4b8443ac1a4c04c6a16a8e08993f9acb9dfd9d457f68d4d4e3c84ed975' className='card-image' alt=""/>
            <p className='blog-topic'><span className='blog-topic-description'>infectious Tips</span>John Berg</p>
                <h2 className='blog-card-heading'>Unsure About Wearing a Face Mask? How and Why</h2>
                <p className='blog-topic-explanation'> That means that you should still be following any shelter-in-place orders in your community. But when you’re venturing out to the grocery store, pharmacy or...</p>           
                <button className='blog-readmore-btn'>Read More</button>
            </div>
            <div className='blog-clinic-card-3'>
            <img src='https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=826&t=st=1725253500~exp=1725254100~hmac=fe110e4b8443ac1a4c04c6a16a8e08993f9acb9dfd9d457f68d4d4e3c84ed975' className='card-image' alt=""/>
            <p className='blog-topic'><span className='blog-topic-description'>Life Style Nutrition</span>Saul Wade</p>
                <h2 className='blog-card-heading'>  Tips for Eating Healthy When Working From Home</h2>
                <p className='blog-topic-explanation'>You’re on a conference call and somehow wandered into the kitchen. Next thing know you’re eating crackers and dry cereal out of the box. Or...</p>
           
                <button className='blog-readmore-btn'>Read More</button>
            </div>
        </div>
        
            <Footer/>
        </>
    )
}

export default Blog