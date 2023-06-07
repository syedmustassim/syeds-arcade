import './Footer.css';
import React from "react"
import {Link} from "react-router-dom";

export const Footer = () => {
    return(
        <div className="footer">
            <div className='sm_footer section_padding'>
                <div className='sm_footer-links'>
                    <div className='sm_footer-links-div'>
                        <h4>Other services</h4>
                        <Link to="/" className="footer-links"><p>What's New</p></Link>
                        <Link to="/" className="footer-links"><p>Gaming Newsletter</p></Link>
                        <Link to="/" className="footer-links"><p>Game events</p></Link>
                    </div>
                    <div className='sm_footer-links-div'>
                        <h4>Queries</h4>
                        <Link to="/" className="footer-links"><p>FAQ</p></Link>
                        <Link to="/" className="footer-links"><p>Deliveries</p></Link>
                    </div>
                    <div className='sm_footer-links-div'>
                        <h4>Partners</h4>
                        <Link to="" className="footer-links"><p>Prince project</p></Link>
                        <Link to="https://citystore.netlify.app/" className="footer-links"><p>City Store</p></Link>
                        <Link to="/" className="footer-links"><p>Yash project</p></Link>
                        <Link to="/" className="footer-links"><p>Gautam project</p></Link>
                    </div>
                    <div className='sm_footer-links-div'>
                        <h4>Social Media</h4>
                        <div className='social-media'>
                        <Link to="/" className="footer-links"><p>Instagram</p></Link>
                        <Link to="/" className="footer-links"><p>Github</p></Link>
                        <Link to="/" className="footer-links"><p>LinkedIn</p></Link>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className='sm_footer-below'>
                    <div className='sm_footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} Syed's Arcade. All rights reserved.
                        </p>
                    </div>
                    <div className='sm_footer-below-links'>
                        <Link to="/" className="footer-links"><div><p>Terms and Conditions</p></div></Link>
                        <Link to="/" className="footer-links"><div><p>Privacy</p></div></Link>
                        <Link to="/" className="footer-links"><div><p>Security</p></div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}