import React from 'react'
import './Footer.css'
import { FaLinkedinIn, FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Footer() {
    return (
        <div className="footer-box">
            <h5> Follow me on</h5>
            <ul className="icon-list">
                <li> <a target="_blank" rel="noreferrer" id="linkedin" href="https://www.linkedin.com/in/sachin-prajapati-8b1993188/" ><FaLinkedinIn /></a> </li>
                <li> <a target="_blank" rel="noreferrer" id="github" href="https://github.com/sachinprajapati8604"><FaGithub /> </a> </li>
                <li> <a target="_blank" rel="noreferrer" id="facebook" href="https://www.facebook.com/bullet.raja.1998"><FaFacebookF />  </a> </li>
                <li> <a target="_blank" rel="noreferrer" id="insta" href="https://www.instagram.com/prajapati_rangbaz/?r=nametag">  <FaInstagram /></a> </li>
                <li> <a target="_blank" rel="noreferrer" id="twitter" href="https://twitter.com/SachinP40"> <FaTwitter /></a> </li>

            </ul>
        </div>
    )
}
