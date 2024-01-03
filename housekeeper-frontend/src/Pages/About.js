// About.js
import React from 'react';
import { Link } from 'react-router-dom';
import Studentnav from './Studentnav';
const backgroundImageUrl = 'https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-simple-cartoon-cleaning-service-psd-material-image_188894.jpg';

const About = () => {
  const styles = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#00000',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    height: '120vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100vw'
  };

  const titleStyle = {
    fontSize: '2em',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: '20px',
  };

  const strongStyle = {
    fontWeight: 'bold',
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'underline',
    marginTop: '20px',
  };

  return (
    <div className="nav">
          <div className="about-container" style={styles}>
      <h1 className="about-title" style={titleStyle}>
        About Housekeeper Clean
      </h1>
      <p className="about-description" style={paragraphStyle}>
        Housekeeper Clean is a leading cleaning service provider committed to delivering
        exceptional cleaning solutions. Our team of dedicated housekeepers ensures
        a spotless and comfortable living environment for our clients.
      </p>
      <p className="about-mission" style={paragraphStyle}>
        <strong style={strongStyle}>Our Mission:</strong> To create clean and healthy spaces for our clients,
        promoting a sense of well-being and tranquility in their homes.
      </p>
      <p className="about-contact" style={paragraphStyle}>
        For inquiries and bookings, please contact us at{' '}
        <span className="contact-email">info@housekeeperclean.com</span>.
      </p>

      <button  type="button" class="btn btn-success">      <Link to="/" style={{linkStyle,color:'black'}}>Go to Home</Link>
</button>
      
    </div>

    </div>

  );
};

export default About;