import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import '../Top5QBweek1/styles.css';

const CFBW3 = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
            Biggest Takeaways From Week 3 of College Football
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>September 19th, 2022</p>
            <h1>Biggest Takeaways From Week 3 of College Football</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NCAA'/>
                </div>
                <div>
                <Chip label='Takeaways'/>
                </div>
            </div>
          </header>
          <img src={'https://www.gannett-cdn.com/presto/2022/09/18/PDTF/d0d80661-1829-49a0-b8ca-a485217eb2fd-USATSI_19068386.jpg'} alt='cover' />
          <p className='blog-desc'>

            <br /><br /><h1>Washington Can Contend for the PAC-12</h1><br /><br />
            <img src="https://images.seattletimes.com/wp-content/uploads/2022/09/124327.jpg?d=780x520" alt="Washington" /><br /><br />
            <p>The Washington Huskies flexed their offensive muscle on Saturday against the 11th ranked Michigan State Spartans. They were truly dominant on that side of the ball and it led to a win at home. This was nothing new, as Washington has been outstanding offensively through two games. Michigan State was it’s first true test of the young season however. This win proved to me that they have the ability to contend and win their division. The PAC-12 is pretty weak overall, so I think the Huskies showed that they should be respected as a team that’s going to contend for the title. Playing in the PAC-12 North, their schedule is pretty favorable. They travel to Eugene in middle November which will undoubtedly be their toughest game of the season. Outside of that game, I don’t see too many that could give them trouble if they play like they have so far. If the Huskies can get past Oregon they would be in a great spot to find themselves in the PAC-12 title game. Michael Penix can throw it as good as anyone and he has a good group of receivers to throw too. Washington struggled to stop the pass at times against MSU, but it looked like their offense is going to keep them in every game. They still have to play a few more games against power five teams to be considered on that level, but I think they’re trending in the right direction to make a push for the PAC-12. At this point Washington is 4th in my eyes behind USC, Oregon, and Utah.</p><br /><br /><hr />
         
            <h1>Penn State Should Keep the Big Ten East Interesting</h1><br /><br />
            <img src="https://cdn.vox-cdn.com/thumbor/m9W79b6bz22KV5xGEKPke-FX4pY=/0x0:3300x2591/1200x800/filters:focal(1999x256:2527x784)/cdn.vox-cdn.com/uploads/chorus_image/image/71381676/usa_today_19065368.0.jpg" alt="Penn State" /><br /><br />
            <p>Penn State now has two wins on the road on the young season after going to Auburn and coming out with the win. This years version of Auburn is far from the great teams we’ve seen in the past, but going to Jordan-Hare stadium and winning the way Penn State did is impressive. On top of the win at Purdue in week one, the Nittany Lions have built a good resume through three games. They have the experience under center with Sean Clifford to keep them in games. They should be undefeated when they travel to Ann Arbor in October. They have a recent history of keeping the games between Michigan and Ohio State and I expect them to do so. They do lack the talent that both of those teams have but I expect them to keep it interesting. Right now it seems like Penn State and Michigan State are 1a and 1b of who will finish third in the Big Ten East. I would give the Nittany Lions the edge after three weeks. </p><br /><br /><hr />

            <h1>There is a Lack of Great Teams this Season</h1><br /><br />
            <img src="https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-09/Bryce%20Young.jpg?itok=5wpKnkZU" alt="Bryce Young" /><br /><br />
            <p>After three weeks, it seems to me that college football lacks great teams. We have already seen four top ten teams lose in Notre Dame, Texas A&M, Utah, and Baylor. While watching some of these teams ranked in the top 20, I struggle to see most of them winning big games. Especially in the top ten currently. I struggle to see how Clemson is the fifth best team in the country. Yet, I know they will find themselves in playoff contention at the end of the year because they play in the ACC. I think Oklahoma and Oklahoma State are far from great teams. This is one of the least talented teams Oklahoma has had in a while, so I don’t see them competing with any of the top teams. Oklahoma State allowed 44 in week one to a Central Michigan team who has looked poor outside of that game. I struggle to see how Kentucky and Arkansas can compete against Alabama and Georgia in the SEC. Maybe this is just the reality of college football, but it seems like this year is more exaggerated than in previous years. I really only see 5 teams that can realistically contend for the national title at this moment.</p><br /><br />

          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'></h1>
            <p className='blog-date'></p>
            <img className='footer-img' src={'https://media-exp1.licdn.com/dms/image/C5603AQF69_iPKLuVGg/profile-displayphoto-shrink_800_800/0/1613173186664?e=1668038400&v=beta&t=rgOs-V8wGMY6_weE6O0zWVgRySLTK0uP4K8Be2YUWJM'} alt="Author"/>
            <p style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0 auto', textAlign: 'center', padding: '1rem'}}>
                Rockford, Michigan <br /><br /> Central Michigan University <br /><br /> Broadcasting
            </p>

            <div style={{ display: 'flex',  flexDirection: 'row' }}>
                <span><a href="https://twitter.com/nicktalksball"><i class="fab fa-twitter"></i></a></span>
                <span><a href="https://www.linkedin.com/in/nick-martin-893aa2206/"><i class="fab fa-brands fa-linkedin"></i></a></span>
                <span><a href="https://www.instagram.com/__nickmartin__/"><i class="fab fa-instagram"></i></a></span>
            </div>
        </div>
        </> 
    </>
  );
};

export default CFBW3;
