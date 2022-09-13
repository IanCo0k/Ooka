import React from 'react';
import { Helmet } from 'react-helmet';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import '../Top5QBweek1/styles.css';

const SarverFine = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
                Sun's Owner Robert Sarver Fined $10M and Suspended for 1 Year
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>September 13th, 2022</p>
            <h1>Sun's Owner Robert Sarver Fined $10M and Suspended for 1 Year</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NBA'/>
                </div>
                <div>
                <Chip label='Breaking News'/>
                </div>
            </div>
          </header>
          <img src={'https://s.yimg.com/ny/api/res/1.2/xaSQuMxgK3tKqGuATWfxWw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2021-10/25d24be0-3397-11ec-b1fd-2d0150a09b00'} alt='cover' />
          <p className='blog-desc'>
          Following recent investigations into alleged workplace misconduct, the NBA has found substantial evidence against Sarver to warrant a fine and suspension.
            <br /><br />
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }} ><TwitterTweetEmbed tweetId='1569733563360198657' /></div>
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

export default SarverFine;
