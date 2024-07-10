import React, { useState } from 'react'

import slide_image1 from '../assets/slide_image1.jpg'
import slide_image2 from '../assets/slide_image2.jpg'
import slide_image3 from '../assets/slide_image3.jpg'

function ReviewSlides() {
    const [isActive1, setActive1] = useState(true)
    const [isActive2, setActive2] = useState(false)
    const [isActive3, setActive3] = useState(false)
    return (
        <section className='review_slides'>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators slide_buttons_container">
                    <button id='slide_button' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button id='slide_button' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button id='slide_button' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="slide_container carousel-inner">
                    <div className={isActive1 ? "each_slide carousel-item active" : "each_slide carousel-item"}>
                        <div className="row">
                            <div className='col-sm-12 col-md-12 col-lg-8'>
                                <img src={slide_image1} className="w-100 each_slide_image" alt="..." />
                            </div>
                            <div className='col-md-12 col-lg-4 slide_data'>
                                <h1>Client's Challange</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam asperiores, itaque cum recusandae cupiditate quod voluptatem assumenda aut consequuntur laborum sint voluptatum ipsam fugiat at porro fugit? Molestias, porro officia?</p>
                                <h1>Result</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quia aliquid, qui odit asperiores eius molestias aperiam, non obcaecati voluptatibus. Reiciendis consectetur nam quis optio, ratione voluptates sapiente laborum?</p>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={isActive2 ? "each_slide carousel-item active" : "each_slide carousel-item"}>
                        <div className="row">
                            <div className='col-sm-12 col-md-12 col-lg-8'>
                                <img src={slide_image2} className="w-100" alt="..." />
                            </div>
                            <div className='col-md-12 col-lg-4 slide_data'>
                                <h1>Client's Challange</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam asperiores, itaque cum recusandae cupiditate quod voluptatem assumenda aut consequuntur laborum sint voluptatum ipsam fugiat at porro fugit? Molestias, porro officia?</p>
                                <h1>Result</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quia aliquid, qui odit asperiores eius molestias aperiam, non obcaecati voluptatibus. Reiciendis consectetur nam quis optio, ratione voluptates sapiente laborum?</p>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={isActive3 ? "each_slide carousel-item active" : "each_slide carousel-item"}>
                        <div className="row">
                            <div className='col-sm-12 col-md-12 col-lg-8'>
                                <img src={slide_image3} className="w-100" alt="..." />
                            </div>
                            <div className='col-md-12 col-lg-4 slide_data'>
                                <h1>Client's Challange</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam asperiores, itaque cum recusandae cupiditate quod voluptatem assumenda aut consequuntur laborum sint voluptatum ipsam fugiat at porro fugit? Molestias, porro officia?</p>
                                <h1>Result</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quia aliquid, qui odit asperiores eius molestias aperiam, non obcaecati voluptatibus. Reiciendis consectetur nam quis optio, ratione voluptates sapiente laborum?</p>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="move_button carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="" aria-hidden="true"><i className="fa-solid fa-chevron-left"></i></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="move_button carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="" aria-hidden="true"><i className="fa-solid fa-chevron-right"></i></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="d-md-none d-flex flex-row justify-content-center">
                <button onClick={() => {
                    setActive1(true)
                    setActive2(false)
                    setActive3(false)
                }} id='slide_button1' className='slide_button_bg_image'></button>
                <button onClick={() => {
                    setActive1(false)
                    setActive2(true)
                    setActive3(false)
                }} id='slide_button2' className='slide_button_bg_image'></button>
                <button onClick={() => {
                    setActive1(false)
                    setActive2(false)
                    setActive3(true)
                }} id='slide_button3' className='slide_button_bg_image'></button>
            </div>
        </section>
    )
}

export default ReviewSlides
