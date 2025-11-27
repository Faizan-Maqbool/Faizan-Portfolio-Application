import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(false);
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/images/profile.jpg" alt="Faizan Maqbool" />
        </figure>

        <div className="info-content">
          <h1 className="name">Faizan Maqbool</h1>
          <p className="title">Computer Science Student & Full Stack Developer</p>
        </div>

        <button 
          className="info-more-btn" 
          onClick={() => setShowContacts(!showContacts)}
        >
          <span>{showContacts ? 'Hide Contacts' : 'Show Contacts'}</span>
          <ion-icon name={showContacts ? 'chevron-up' : 'chevron-down'}></ion-icon>
        </button>
      </div>

      {showContacts && (
        <div className="sidebar-info-more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:faizanmaqbool046@gmail.com" className="contact-link">
                  faizanmaqbool046@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+923425957917" className="contact-link">
                  +92 342 5957917
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="school-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">University</p>
                <address>COMSATS University Islamabad</address>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Islamabad, Pakistan</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a 
                href="https://www.linkedin.com/in/faizan-maqbool-39b801313" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a 
                href="https://github.com/Faizan-Maqbool" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a 
                href="https://www.instagram.com/faiz_an1212/" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

