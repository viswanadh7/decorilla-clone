import React from 'react'
import Navbar from './Navbar'
//import trailer from '../assets/SaahoTeaser.mp4'
import '../static/home.css'
//import home_image from '../assets/home_page_image.jpg'
import image from '../assets/photo.jpg'
//import pricing_page_image from '../assets/pricing_page_image.jpg'
import Capture1 from '../assets/Capture1.JPG'
import Capture2 from '../assets/Capture2.JPG'
import Capture3 from '../assets/Capture3.JPG'
// import slide_image1 from '../assets/slide_image1.jpg'
// import slide_image2 from '../assets/slide_image2.jpg'
// import slide_image3 from '../assets/slide_image3.jpg'
import Footer from './Footer'
import ReviewSlides from './ReviewSlides'
function Home() {
    return (
        <>

            <header className='header_section'>
                <Navbar windowScroll={700} />
                {/* <img src={home_image} alt="" /> */}
                <div className="header_container">
                    <h1>Get a Designer<br />Space You'll Love</h1>
                    <button className='main_button'>START MY TRANSFORMATION</button>
                </div>
            </header>
            <section className='video_section'>
                <h1>How it Works: Our Easy Process</h1>
                <p>Choose from unique design concepts from multiple accomplished online interior designers</p>
                <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/c0zpAIaBOVw?rel=0" title="YouTube video" allowFullScreen></iframe>
                </div>
            </section>
            <section className='icon_section'>
                <h1>Work Online With The Finest Interior Designers</h1>
                <p>Get award-winning personalized online interior design help</p>
                <div className="icon_cards">
                    <div className="each_card_icon">
                        <i className="fa-solid fa-couch"></i>
                        <p>Up to 45% off at +350 furniture stores</p>
                    </div>
                    <div className="each_card_icon">
                        <i className="fa-regular fa-lightbulb"></i>
                        <p>Concepts from multiple top designers</p>
                    </div>
                    <div className="each_card_icon">
                        <i className="fa-solid fa-phone-volume"></i>
                        <p>One-on-one interior design consultation</p>
                    </div>
                    <div className="each_card_icon">
                        <i className="fa-solid fa-cube"></i>
                        <p>3D model of your space</p>
                    </div>
                    <div className="each_card_icon">
                        <i className="fa-solid fa-diagram-project"></i>
                        <p>Color palette & floor plan</p>
                    </div>
                </div>
            </section>
            <section className='main_review'>
                <img src={image} alt="" />
                <div>
                    <p>“We recommend Decorilla as the best online interior design service due to its comprehensive full-service offerings.”</p>
                    <h1>-Viswanadh Mudunuru</h1>
                </div>
            </section>
            <ReviewSlides />
            <section className='section_companies'>
                <p className='heading'>Decorilla Can Pay for Itself</p>
                <p>We pass on our furniture discount at +350 vendors so you save money</p>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="1000">
                            <img src={Capture1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="1000">
                            <img src={Capture2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="1000">
                            <img src={Capture3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
            </section>
            <section className='happy_client'>
                <div className="client_card">
                    <p>“From the moment we signed up, until we completed the entire house, we felt pampered, loved, and appreciated. The quality of the online decorators and people who work there is top-notch, highly skilled, caring and very professional.”</p>
                    <div className="d-flex">
                        <img src={image} alt="" />
                        <p className='p-3 mt-auto'>Viswanadh</p>
                    </div>
                </div>
                <div className="client_card">
                    <p>“From the moment we signed up, until we completed the entire house, we felt pampered, loved, and appreciated. The quality of the online decorators and people who work there is top-notch, highly skilled, caring and very professional.”</p>
                    <div className="d-flex">
                        <img src={image} alt="" />
                        <p className='p-3 mt-auto'>Viswanadh</p>
                    </div>
                </div>
                <div className="client_card">
                    <p>“From the moment we signed up, until we completed the entire house, we felt pampered, loved, and appreciated. The quality of the online decorators and people who work there is top-notch, highly skilled, caring and very professional.”</p>
                    <div className="d-flex">
                        <img src={image} alt="" />
                        <p className='p-3 mt-auto'>Viswanadh</p>
                    </div>
                </div>
                <div className="client_card">
                    <p>“From the moment we signed up, until we completed the entire house, we felt pampered, loved, and appreciated. The quality of the online decorators and people who work there is top-notch, highly skilled, caring and very professional.”</p>
                    <div className="d-flex">
                        <img src={image} alt="" />
                        <p className='p-3 mt-auto'>Viswanadh</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home
