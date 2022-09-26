import React from 'react';
import { Helmet } from 'react-helmet';
import Us from './us.png';
import Logo from './logo.png';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import '../Top5QBweek1/styles.css';

const AboutUs = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
                About Us
            </title>
          </Helmet>
          <header>
            <p className='blog-date'></p>
            <h1>About Us</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='The Boys'/>
                </div>
            </div>
          </header>
          <img src={Us} alt='cover' />
          <p className='blog-desc'>
            Jared Haverdink, Nick Martin, Ian Cook, Jacob Majoor, and Chet Huls (pictured from left to right in the above image) are 5 college students at Central Michigan University who have a love for all things sports.
            <br /><br />
            <p>This site is an outlet for us to share our thoughts on all things going on in the world of sports, ranging from college athletics to the 4 major professional sports in the US</p><br /><br />
            <p>To contact us, message us on Instagram or Twitter by following the links below.</p>
            
            <p></p>

          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'>Tuesday Night Takes</h1>
            <p className='blog-date'>Sports Media</p>
            <img className='footer-img' src={Logo} alt="Author"/>
            <div style={{ display: 'flex',  flexDirection: 'row' }}>
                <span><a href="https://twitter.com/tntakes"><i class="fab fa-twitter"></i></a></span>
                <span><a href="https://www.instagram.com/tuesdaynighttakes/"><i class="fab fa-instagram"></i></a></span>
            </div>
        </div>
        </> 
    </>
  );
};

export default AboutUs;
