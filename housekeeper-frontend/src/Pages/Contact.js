// Contact.js
import React from 'react';
import { Link } from 'react-router-dom';


const backgroundImageUrl = 'https://static.vecteezy.com/system/resources/previews/014/197/143/original/website-banner-template-for-cleaning-service-ad-flat-illustration-landing-page-background-for-cleaning-company-with-working-staff-characters-housekeeping-services-and-domestic-help-free-vector.jpg';

const Contact = () => {
  const containerStyle = {
    background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4)), url(${backgroundImageUrl}) center/cover fixed`,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#343a40',
  };

  const titleStyle = {
    fontSize: '2.5em',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: '20px',
  };

  const infoStyle = {
    fontSize: '1.2em',
    marginBottom: '15px',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'underline',
    marginTop: '20px',
    display: 'inline-block',
  };

  return (
    <div className="contact-container" style={containerStyle}>
      <h1 className="contact-title" style={titleStyle}>
        Contact Us
      </h1>
      <p className="contact-description" style={paragraphStyle}>
        Have questions or want to schedule a cleaning service? Feel free to reach out to us!
      </p>
      <p className="contact-info" style={infoStyle}>
        <strong>Email:</strong> <span className="contact-email">info@housekeeperclean.com</span>
      </p>
      <p className="contact-info" style={infoStyle}>
        <strong>Phone:</strong> +1 (123) 456-7890
      </p>

      {/* Add Link to navigate to the home page */}
      <Link to="/" style={linkStyle}>Go to Home</Link>
    </div>
  );
};

export default Contact;
