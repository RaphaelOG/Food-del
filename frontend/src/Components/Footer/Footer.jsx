import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets/assets'
const Footer = () => {
  return (
      <div className="footer" id='footer'>
          <div className="footer-content">
              <div className="footer-content-left">
                  <img src={assets.logo} alt="" />
                  <p>�� 2022 Foodie App. All rights reserved.</p>
                  <div className="footer-social-icons">
                      <img src={assets.facebook_icon} alt="" />
                      <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />
                  </div>
              </div>
              <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <ul>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Delivery</li>
                      <li>Privacy Policy</li>
                  </ul>
              </div>
              <div className="footer-content-right">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                      <li>+1-592-490-2194</li>
                      <li>contactus@tom.com</li>
                  </ul>
              </div>
          </div>
          <hr />
          <p className="footer-copyright">Copyright 2025 @ Tomato.com - You can be sued!!!.</p>
    </div>
  )
}

export default Footer