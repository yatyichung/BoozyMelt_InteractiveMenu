import React from 'react'
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
        <div className='container-fluid' id="footer">
            <div className='row'>
                <div className='col-12 col-sm-4 col-md-2  text-white text-center p-3'>
                   <img src="./images/logo.png" alt="BoozyMelt footer logo" width="120" />
                </div>
                <div className='col-12 col-sm-4 col-md-2 text-white text-center p-3'>
                    <p className='footer-headline'>Contact Us</p>
                    <p className='m-0'><FaEnvelope /> boozymelt2021@gmail.com </p>
                    <p className='m-0'><FaPhone /> 437-917-3822</p>
                </div>
                <div className='col-12 col-sm-4 col-md-2 text-white text-center p-3'>
                    <p className='footer-headline'>Hours</p>
                    <p className='m-0'>
                        SUN 10:00am - 09:00pm
                        <br/>
                        FRI &#38; SAT 10:00am - 11:00pm
                    </p>
                </div>
                <div className='col-12 col-sm-4 col-md-2 text-white text-center p-3'>
                    <p className='footer-headline'>Location</p>
                    <p>
                        4680 Horner Ave,
                        <br/>
                        Toronto, ON, Canada.
                        <br/>
                        M8W 4Y4
                    </p>
                </div>
                <div className='col-12 col-sm-4 col-md-2 text-white text-center p-3'>
                    <a href='https://sunnychungyatyi.com/assignments/Boozy%20Melt/index.html' className='p-0 m-0'>CSR</a><br/>
                    <a href='https://sunnychungyatyi.com/assignments/Boozy%20Melt/index.html' className='p-0 m-0'>Accessibility</a><br/>
                    <a href='https://sunnychungyatyi.com/assignments/Boozy%20Melt/index.html' className='p-0 m-0'>Terms and Conditions</a><br/>
                    <a href='https://sunnychungyatyi.com/assignments/Boozy%20Melt/index.html' className='p-0 m-0'>Private Policy</a>
                </div>
                <div className='col-12 col-sm-4 col-md-2 text-white text-center p-3'>
                    <p className='footer-socialmedia'><FaFacebookF /><span className='p-3'><FaInstagram /></span><FaTwitter /></p>
                    <p id='footer-copyright'>Copyright@2021 Boozy Melt</p>
                </div>
            </div>
        </div>
    </>
  )
}
