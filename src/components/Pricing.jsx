import React from 'react'
import Navbar from './Navbar'
//import bgImage from '../assets/pricing_page_image.jpg'
import '../static/pricing.css'
import Footer from './Footer'

function Pricing() {
    return (
        <>

            <header>
                <Navbar windowScroll={500} />
                {/* <img className='background' src={bgImage} alt="" /> */}
                <div className="heading">
                    <h1>Amazing work. Stress Free.</h1>
                    <p>We don't release the payment until you approve the work</p>
                </div>
            </header>
            <section className='pricing'>
                <div className="container">
                    <div className="row cards">
                        <h1>Show me the flat rate price for a: <span>Hallway/Entry</span> </h1>
                        <div className="price_card col-md-4">
                            <div className='text-center'>
                                <h4>Bronze</h4>
                                <h1>$549</h1>
                            </div>
                            <div>
                                <p>2 Experienced Designers submit concepts for you</p>
                            </div>
                        </div>
                        <div className="price_card vertical-line col-md-4">
                            <div className='text-center'>
                                <h4>Silver</h4>
                                <h1>$649</h1>
                            </div>
                            <div>
                                <p>2 Greatly Experienced Designers submit concepts for you</p>
                            </div>
                        </div>
                        <div className="price_card vertical-line col-md-4">
                            <div className='text-center'>
                                <h4>Gold</h4>
                                <h1>$849</h1>
                            </div>
                            <div>
                                <p>2 Industry Leading Designers submit concepts for you</p>
                            </div>
                        </div>
                        <hr className='mt-4 mb-4' />
                        <div className="price_card main_price_card">
                            <div className='main_price_card_order_1'>
                                <h4>Need a little extra help?</h4>
                                <p>PLATINUM INTERIOR DESIGN SERVICES</p>
                                <p>& hourly rates also available</p>
                            </div>
                            <div className='main_price_card_order_2'>
                                <h1>$75/h - $500/h</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='include_section'>
                <div className="container-fluid include">
                    <h1>All Interior Design Packages Include</h1>
                    <div className="row">
                        <div className="icons col-md-4">
                            <i className="fa-regular fa-message"></i>
                            <p>FOLLOW-UP ASSISTANCE</p>
                        </div>
                        <div className="icons col-md-4">
                            <i className="fa-solid fa-headphones"></i>
                            <p>SKILLED PHONE AND EMAIL SUPPORT</p>
                        </div>
                        <div className="icons col-md-4">
                            <i className="fa-solid fa-percent"></i>
                            <p>100% SATISFACTION GUARANTEE</p>
                        </div>
                        <div className='text-center'>
                            <button className='main_button'>Get Started Now</button>
                            <p>Get a designer room you'll love, but never thought you could afford.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='table_section'>
                <h1>Decorilla vs Traditional Interior Design</h1>
                <table className='table'>
                    <tr>
                        <th>Features</th>
                        <th>Decorilla</th>
                        <th>Traditional Design</th>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>500</td>
                        <td>700</td>
                    </tr>
                    <tr>
                        <td>Realistic 3D Model</td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                    </tr>
                    <tr>
                        <td>Concepts From Multiple Designers</td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                        <td><i className="fa-solid fa-circle-xmark"></i></td>
                    </tr>
                    <tr>
                        <td>Interactive Online Platform</td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                        <td><i className="fa-solid fa-circle-xmark"></i></td>
                    </tr>
                    <tr>
                        <td>Trade Discounts on Furniture</td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                        <td><i className="fa-solid fa-circle-xmark"></i></td>
                    </tr>
                    <tr>
                        <td>No Markups or Sale Pressure</td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                        <td><i className="fa-solid fa-circle-xmark"></i></td>
                    </tr>
                </table>
            </section>
            <section className='contact'>
                <p1>Not sure what's right for you? Need a custom or business quote?</p1>
                <p>We can help! Contact us or call 1-877-DECOR-60</p>
                <button className='main_button'>Schedule a consultantaion</button>
            </section>
            <Footer />
        </>
    )
}

export default Pricing
