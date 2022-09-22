import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import blog2 from './blog2.png';
import '../Top5QBweek1/styles.css';

const Top5QBweek1 = () => {

  let open = true;

  return (
    <div>
        <Navbar open={open} />
        <div className='blog-wrap'>
          <Helmet>
            <title>
            Ranking The Top 5 QB Performances Of Week 1
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>Published on September 5th</p>
            <h1>Ranking The Top 5 QB Performances Of Week 1</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NCAA'/>
                </div>
                <div>
                <Chip label='Rankings' />
                </div>
            </div>
          </header>
          <img src={blog2} alt='cover' />
          <p className='blog-desc'>

          With week one of the college football season in the books, here are the 5 quarterbacks that I felt performed the best. <br /><br />

          <h2>5. Daniel Richardson | Central Michigan</h2> <br /><br />

          Richardson looked poised against what was one of the best defenses in the country a year ago. OK St returned all of their D-line production that led the nation in sacks last year. Richardson put up great numbers in game one despite of that and led the Chips to a very respectable showing against a tough opponent. <br /><br />

          <h2>4. Spencer Sanders | Oklahoma State</h2> <br /><br />

          Sanders followed up a great last season with an excellent performance in week one. He was able to get anything he wanted against CMU. He was great through the air and the ground which put the Cowboys out front early and they were able to hold onto their lead. <br /><br />

          <h2>3. Stetson Bennett | Georgia</h2> <br /><br />

          Bennett looked about as in control of the offense as I have seen in his career. He was the main catalyst for the complete domination of the Ducks. He looked incredibly comfortable all game long, making every throw look easy. Bennett had the perfect start to Georgia’s repeat attempt, throwing for a career high in passing yards in a game. <br /><br />

          <h2>2. Drake Maye | North Carolina</h2> <br /><br />

          Maye has put up two great games to start the year and he was able to get it done both through the air and on the ground. The Tarheels needed all of Maye’s performance to get the win over App State which is why this game ranks so highly for me. It’s impressive to see him perform this well in his first two games regardless of the opponents. <br /><br />

          <h2>1. Anthony Richardson | Florida</h2> <br /><br />

          This one is pretty easy for me. The one thing Richardson doesn’t have over these other guys is the gaudy passing numbers. Richardson however, made up for it by running for 3 TD’s. He was by far the best player on the field against Utah and it was pretty obvious. He led his team to the most impressive win of the week which puts him over these other guys as well. Richardson could continue to vault himself into to the top 10 of next years NFL Draft with more performances like this. <br /><br />

          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'>Nick Martin</h1>
            <p className='blog-date'>College Sports Writer</p>
            <img className='footer-img' src='https://media-exp1.licdn.com/dms/image/C5603AQF69_iPKLuVGg/profile-displayphoto-shrink_800_800/0/1613173186664?e=1668038400&v=beta&t=rgOs-V8wGMY6_weE6O0zWVgRySLTK0uP4K8Be2YUWJM' alt="Author"/>
            <p style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0 auto', textAlign: 'center', padding: '1rem'}}>
                Rockford, Michigan <br /><br /> Central Michigan University <br /><br /> Broadcasting
            </p>

            <div style={{ display: 'flex',  flexDirection: 'row' }}>
                <span><a href="https://twitter.com/nicktalksball"><i class="fab fa-twitter"></i></a></span>
                <span><a href="https://www.linkedin.com/in/nick-martin-893aa2206/"><i class="fab fa-brands fa-linkedin"></i></a></span>
                <span><a href="https://www.instagram.com/__nickmartin__/"><i class="fab fa-instagram"></i></a></span>
            </div>
        </div>
    </div>
  );
};

export default Top5QBweek1;
