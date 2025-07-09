
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import "../styles/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__brand">
        <h3>PharmaCare</h3>
        <p>Your trusted pharmacy partner. Quality medicines, expert advice, and care you deserve.</p>
      </div>
      <div className="footer__links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Medicines</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer__contact">
        <h4>Contact Us</h4>
        <p><FaPhoneAlt /> +254 703746719</p>
        <p><FaEnvelope /> info@pharmacare.co.ke</p>
        <p><FaMapMarkerAlt /> Nairobi, Kenya</p>
        <div className="footer__socials">
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://tiktok.com" aria-label="TikTok"><SiTiktok /></a>
          <a href="https://whatsapp.com" aria-label="WhatsApp"><i className="fab fa-"></i></a>
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      &copy; {new Date().getFullYear()} PharmaCare. All rights reserved.
    </div>
  </footer>
);

export default Footer;