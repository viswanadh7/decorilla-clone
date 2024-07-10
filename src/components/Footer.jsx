import React from 'react'
import '../static/footer.css'
function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_container div1'>
                <h1>ABOUT US</h1>
                <ul className='dropdown'>
                    <li>The Team</li>
                    <li>Company</li>
                    <li>Press</li>
                    <li>Review</li>
                    <li>Location</li>
                </ul>
            </div>
            <div className='footer_container div2'>
                <h1>CUSTOMER SUPPORT</h1>
                <ul className='dropdown'>
                    <li>Interior Desing Blog</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                    <li>Interior Design Gift Card</li>
                </ul>
            </div>
            <div className='footer_container div3'>
                <h1>FOR DESIGNERS</h1>
                <ul className='dropdown'>
                    <li>Sample Projects</li>
                    <li>Designer Portfolios</li>
                    <li>Designer Sign Up</li>
                    <li>Virtual Interior Design</li>
                </ul>
            </div>
            <div className='footer_container div4'>
                <h1>AGREEMENTS</h1>
                <ul className='dropdown'>
                    <li>Our Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer_container div5'>
                <h1>GET EXCLUSIVE TIPS & OFFERS</h1>
                <input type="text" name="" id="" placeholder='Enter email address' />
                <h1>JOIN OUR COMMUNITY</h1>
                <div>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer
