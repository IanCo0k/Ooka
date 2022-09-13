import React from 'react';
import { Helmet } from 'react-helmet';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import '../Top5QBweek1/styles.css';

const BoilerPlate = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
            </title>
          </Helmet>
          <header>
            <p className='blog-date'></p>
            <h1></h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label=''/>
                </div>
                <div>
                <Chip label=''/>
                </div>
            </div>
          </header>
          <img src={''} alt='cover' />
          <p className='blog-desc'>
         
          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'></h1>
            <p className='blog-date'></p>
            <img className='footer-img' src={'https://campgeneva.org/wp-content/uploads/2022/06/Cook_Ian.jpg'} alt="Author"/>
            <p style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0 auto', textAlign: 'center', padding: '1rem'}}>
                Rockford, Michigan <br /><br /> Central Michigan University <br /><br /> Computer Science
            </p>

            <div style={{ display: 'flex',  flexDirection: 'row' }}>
                <span><a href=""><i class="fab fa-twitter"></i></a></span>
                <span><a href=""><i class="fab fa-brands fa-linkedin"></i></a></span>
                <span><a href=""><i class="fab fa-instagram"></i></a></span>
            </div>
        </div>
        </> 
    </>
  );
};

export default BoilerPlate;
