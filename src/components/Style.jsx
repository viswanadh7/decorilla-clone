import React from 'react'
import '../static/style.css'
import Navbar from './Navbar'
import image from '../assets/photo.jpg'
import ReviewSlides from './ReviewSlides'
import Footer from './Footer'
function Style() {
    return (
        <>
            <header className='style_header'>
                <Navbar windowScroll={700} />
                <div className='style_header_container'>
                    <h1>What Is My Interior Design Style?</h1>
                    <p>Take our free interior design quiz to determine your unique decorating style</p>
                    <button className='main_button'>START MY STYLE QUIZ</button>
                </div>
            </header>
            <section className='style_icon_section'>
                <h1>How My Interior Design Style Quiz Works</h1>
                <div className="style_icon_container">
                    <div className="each_style_icon">
                        <i class="fa-solid fa-face-laugh"></i>
                        <h1>FUN</h1>
                        <p>Our series of interactive images makes discovering your unique decorating style enjoyable</p>
                    </div>
                    <div className="each_style_icon">
                        <i class="fa-regular fa-clock"></i>
                        <h1>FUN</h1>
                        <p>Our series of interactive images makes discovering your unique decorating style enjoyable</p>
                    </div>
                    <div className="each_style_icon">
                        <i class="fa-solid fa-unlock"></i>
                        <h1>FUN</h1>
                        <p>Our series of interactive images makes discovering your unique decorating style enjoyable</p>
                    </div>
                    <div className="each_style_icon">
                        <i class="fa-solid fa-crosshairs"></i>
                        <h1>FUN</h1>
                        <p>Our series of interactive images makes discovering your unique decorating style enjoyable</p>
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
            <section className='start_quiz'>
                <h1>Ready to find your interior design style?</h1>
                <button className='main_button'>START MY STYLE QUIZ</button>
            </section>
            <Footer />
        </>
    )
}

export default Style
