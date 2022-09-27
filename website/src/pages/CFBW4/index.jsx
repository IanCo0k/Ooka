import React from 'react';
import { Helmet } from 'react-helmet';
import Hendon from './Hendon.png';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import '../Top5QBweek1/styles.css';

const CFBW4 = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
            Takeaways from Week Four of College Football
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>September 26th, 2022</p>
            <h1>Takeaways from Week Four of College Football</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NCAA'/>
                </div>
                <div>
                <Chip label='Takeaways'/>
                </div>
            </div>
          </header>
          <img src={Hendon} alt='cover' />
          <p className='blog-desc'>
            <br /><br />
            <h1>Tennessee is the Third Best Team in the SEC</h1><br /><br />
            <p>After an impressive win over the Florida Gators on Saturday, and Kentucky struggling to beat Northern Illinois, I think Tennessee has shown enough to put them at third in the conference. Of course, playing in the SEC these types of things seem to fluctuate. I think the Vols have looked like one of the best teams in conference so far through four weeks. They’ll have plenty more tests obviously. They get Alabama and Kentucky at home along with traveling to Athens in November to take on Georgia. Unfortunately for the Volunteers, they are one of the only SEC teams that plays both Alabama and Georgia. I think they have what it takes to compete with both. They have one of the best quarterbacks in the country in Hendon Hooker. The most important part of Hookers game is that he does not turn the ball over. Three interceptions last year and none so far this year. He holds onto the ball which is something that the Vols will need to do if they want to beat Alabama and Georgia. Hooker is also incredibly mobile and can beat teams either through the air or ground. Hookers impressive 71 percent completion percentage is another crucial part of his game. He makes throws and holds onto the ball which makes him so great. Tennessee has a trio of solid receivers for Hooker to throw too as well in Cedric Tillman, Jalin Hyatt, and Bru McCoy. The Volunteers beat Florida without Tillman, who is there best receiver and one of the best in the nation. That should be scary to SEC defenses to see what they can do without one of their best players. If Hooker continues to value the football and make good decisions, I think Tennessee has a very good chance to make it interesting in the SEC this year.</p>
            <br /><br /><hr />

            <h1>The PAC-12 will be Close</h1><br /><br />
            <p>After Saturday night it’s clear the PAC-12 should come down to the wire. USC, who through three weeks, looked like the best team in the conference struggled a good bit on the road against Oregon State. It looked like the Trojans wouldn’t escape with a win for a while. They did leave Corvallis with a win, but looked far from untouchable. Utah has looked solid since the week one loss to Florida. I think the experience from years previous will keep the Utes in a good spot and I think they will put up a good fight. Oregon is a team that remains one of the favorites regardless of the close win against Washington State. Washington has also looked like a team that will be tough to beat down the stretch. I think Washington State also showed this week that they will give some teams trouble. They get Washington and Utah at home, and I could certainly see one of those teams falling to the Cougars. I still expect to see USC come out of the PAC-12 as the champions this year, but it may be closer than people expected. What seemed to be a race between Utah and USC may be a four team fight at the end of the year.</p>
            <br /><br /><hr />

            <div><TwitterTweetEmbed tweetId={'1574445386294390786'} /></div>

            <h1>It Could be Another Year of no Big-12 in the College Football Playoff</h1><br /><br />
            <p>The Big-12 has been left out of the playoff the past two year, and after Oklahoma’s loss on Saturday against Kansas State, it may be another year of no Big-12 teams in the CFP. Oklahoma losing brings their chances of making the playoff down a good ways in my eyes. Sure the Sooners could win out and win the conference, I’m just not sure that would be enough. I think a one loss Ohio State or Michigan team makes it over a one loss Big-12 champion Oklahoma. The same goes with Clemson. I think Clemson makes it over Oklahoma if the Tigers go undefeated. The Big-12 does have Oklahoma State still that could win the rest of their games and make the playoff. I think they are the only team that remains with a realistic chance at this point. The Cowboys get Baylor, K-State, and Oklahoma all on the road which will be an incredible challenge. We’ve seen that Oklahoma States defense is not what is was last year and that could hurt them down the road in the Big-12. There is plenty of season left for either Oklahoma State or Oklahoma to show that they are playoff worthy, but as it stands currently I don’t see how the conference makes the playoff. Oklahoma is obviously not as talented as they usually are and Oklahoma State hasn’t proven anything through their first three games. The conference is in a tough spot as Oklahoma and Texas will be moving to the SEC soon it could be a while before we see a team in the playoff again.</p>
            <br /><br /><hr />

            <h1>The ACC Looks to be Clemson’s Again</h1><br /><br />
            <p>Clemson survived a road test against Wake Forest on Saturday and the Tigers look to be in control of the conference. The offense finally looked respectable against Wake and led to an overtime win. Clemson gets NC State at home this week, then travels too Florida State a few weeks later. Those two games look to be the last two in conference test for the Tigers. With the Coastal division looking like a pillow fight through four weeks, there is a good chance the Tigers will be conference champs if they make it out of the Atlantic. I still don’t think Clemson has looked like the team we knew a few years ago, but this game was certainly a step in the right direction. DJ Uiagalelei played very well and they were able to run the ball effectively with Will Shipley. I was surprised about the way the defense performed though. Clemson has been known as a team that was always solid on defense since Dabo Swinney has been under helm. It’s possible the loss of Brent Venables to Oklahoma may have made a big impact on the Tigers defensively. Regardless of that, it seems to be Clemson’s conference to lose after the first four weeks of the season.</p>
            <br /><br /><hr />

          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'>Nick Martin</h1>
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

export default CFBW4;
