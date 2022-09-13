import React from 'react';
import { Helmet } from 'react-helmet';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import '../Top5QBweek1/styles.css';

const CFBW2 = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
            Five Takeaways from Week Two of College Football

            </title>
          </Helmet>
          <header>
            <p className='blog-date'>September 13th, 2022</p>
            <h1>Five Takeaways from Week Two of College Football</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NCAA'/>
                </div>
                <div>
                <Chip label='Takeaways'/>
                </div>
            </div>
          </header>
          <img src={'https://cdn.vox-cdn.com/thumbor/GeC2W90kutoJ0J5qJ07iQF6hKlA=/0x0:4739x3330/1200x800/filters:focal(1991x1286:2749x2044)/cdn.vox-cdn.com/uploads/chorus_image/image/71353520/1422600729.0.jpg'} alt='cover' />
          <p className='blog-desc'>
            <br /><br />

            <h2>Alabama has a Problem</h2><br /><br />
            <img src="https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkyMjQyNjkwODAzMzc3NzEw/bryce-young-rescues-alabama-vs-texas.jpg" alt="Bama" /><br /><br />
            <p>It was evident on Saturday that the Crimson Tide miss Jameson Williams and John Metchie. The Tide struggled to generate offense most of the game and that was mainly in part due to the inexperience at the wide receiver position. Credit to Bryce Young for stepping up and finding a way to win in an extremely hostile environment. Alabama will need some receivers to step up if they want their offense to take them to the level they were at last season. I think they are a tier below Georgia after 2 weeks.</p>
            <br /><br /><hr />

            <h2>USC is the Team to Beat in the Pac-12</h2><br /><br />
            <img src="https://sportshub.cbsistatic.com/i/r/2021/12/30/41a1fe2a-671a-4a16-a836-9f601685d992/thumbnail/1200x675/e8ca932da8c1750205cf92ee05b17a8b/caleb-williams-oklahoma.jpg" alt="USC" /><br /><br />
            <p>There hasn’t seemed to be any growing pains for the Trojans to start the year. Their offense has been humming in both games. Caleb Williams looks to be a Heisman contender so far and the addition of Jordan Addison and Mario Williams has given Caleb Williams two dynamic targets to look to. With Utah losing their first game, the Trojans became the top team in the conference in my eyes. USC still has things to prove on the defensive end. If they want to win the conference and make some noise on the national level, their offense however, should keep them in every game.</p>
            <br /><br /><hr />

            <h2>Michigan Has Joined a New Tier</h2><br /><br />
            <img src="https://cdn.vox-cdn.com/thumbor/VTNp9AFoO9Wbp-jufKSb5JtqZ3s=/0x0:3439x2424/1200x800/filters:focal(1526x276:2076x826)/cdn.vox-cdn.com/uploads/chorus_image/image/71356775/1422673873.0.jpg" alt="JJ" /><br /><br />
            <p>While I do understand that Michigan just beat Hawaii, they have looked dominant in both games. The move to start JJ McCarthy puts this team up a level for me. I think that he was the teams missing piece to take the Wolverines to that top tier. I know that Cade McNamara led them to the playoff last year, but JJ just brings something different to the table. There are few throws on the field that McCarthy can’t make and he is Uber athletic. With him starting I think Michigan joins the tier of Alabama and Ohio State with Georgia one above. I still would like to see the Wolverines play some better competition to see what they look like on defense, but I expect this team to pick up where they left off last year and contend for another Big Ten title.</p>
            <br /><br /><hr />

            <h2>The Big Ten West Will be a Pillow Fight</h2><br /><br />
            <img src="https://static.foxnews.com/foxnews.com/content/uploads/2022/08/casey-thompson.jpg" alt="Casey" /><br /><br />
            <p>So far several Big Ten west teams have struggled, Minnesota being the only one that remains undefeated. With Nebraska losing twice to start the year, and Wisconsin falling to Washington State on Saturday, two of the preseason favorites already look shook up. While it still is early, I think it’s safe to say this division that looked wide open before the year, may come down to only a few teams. Minnesota and Purdue are the two that have the best chances in my eyes. I expect another to see another year of the Big Ten East hoisting the trophy in Indy.</p>
            <br /><br /><hr />

            <h2>The SEC Could be Interesting</h2><br /><br />
            <img src="https://thespun.com/.image/t_share/MTgzMTI4NjY2MzE3OTg5MjE2/georgia-v-arkansas.jpg" alt="Stetson" /><br /><br />
            <p>With Bama struggling to come away with the win against Texas, it made me feel like the Tide could fall to one of the SEC teams not named Georgia. Alabama didn’t seem all that comfortable on the road on Saturday and they have several ranked away games on their schedule. They travel to Arkansas, Tennessee, and Ole Miss. While I still do expect the Tide to be in the SEC Championship game come the end of the season, I don’t think this will be as easy of a year for the Tide like we’re used to seeing.</p>
            <br /><br /><hr />

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

export default CFBW2;
