import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import blog3 from './blog3.png';
import '../Top5QBweek1/styles.css';

const NFLW1 = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
            Winners & Losers of Week 1
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>Published on September 13th</p>
            <h1>Winners & Losers of Week 1</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NFL'/>
                </div>
                <div>
                <Chip label='Winners and Losers'/>
                </div>
            </div>
          </header>
          <img src={blog3} alt='cover' />
          <p className='blog-desc'>
          <h1>Winners</h1><br /><br />

        <h2>Buffalo Bills</h2><br /><br />
        <p>The Buffalo Bills went out to LA to face the reigning Super Bowl Champions and open up the NFL season on Thursday night. The NFL assumed the Bills would be a Super Bowl favorite this year, but that wasn’t enough in the Bills eyes, so they went out and proved it. Josh Allen manufactured points through the air and on the ground, showing just how scary of an offense we can expect from the Bills this year. The defense also held a strong Rams offense to 10 points in the game and shut them out in the second half. The AFC Championship very well may be played in Buffalo this year, the Bills are legit.</p>
        <br /><br /><hr />

        <h2>Los Angeles Chargers</h2><br /><br />
        <p>The newly budding team in LA would not be over shadowed by their Sofi Stadium housemates winning a Super Bowl. The Chargers welcomed the Raiders and new weapon Davante Adams and showed out. Adams had himself a day, with 141 yards and a touchdown. Even still, it wasn’t enough to overcome a loaded Chargers roster. The Chargers lost Keenan Allen to injury in this game, and didn’t get much from Mike Williams. Nonetheless, Justin Herbert responded by throwing three touchdowns to three less likely contributors. Zander Horvath, Deandre Carter, and Gerald Everett each hauled in a touchdown to give the Chargers a 24-19 win over a division rival to open their season.</p>
        <br /><br /><hr />

        <h2>Philadelphia Eagles</h2><br /><br />
        <p>The Eagles took on the Hard Knock Lions in Detroit and put on an offensive clinic. Jalen Hurts threw for 243 yards, 155 of which went to new WR1 A.J. Brown. Brown was Hurts’ first read on nearly every snap, and was often the target on the key plays. The run game had an especially successful day. Four rushing touchdowns were scored by 4 different runners. In total, the Eagles ran for 216 yards on a Lions defense that just never figured out how to get the key stops. The Eagles defense wasn’t as strong, giving up 35 points to a rising Lions offense. However, the defense did chip in with a pivotal pick-6 that drastically flipped momentum. The Eagles look like the heavy favorite to win the NFC East, especially with news of Dak’s injury.</p>
        <br /><br /><hr />

        <h2>Patrick Mahomes</h2><br /><br />
        <p>Mahomes shut down any doubters that believed he couldn’t succeed following Tyreek Hill’s departure. The Cardinals are far from the best team Mahomes will face this year, but the 360 yards, five touchdowns and zero interceptions on the road speak for themselves. Mahomes spread the ball around but leaned heavily on Travis Kelce who was expected to be his number one target. Clyde Edwards-Helaire had a revitalized game, returning to the high expectations that came with his high-draft slot. The Chiefs and Patrick Mahomes do not appear to have missed a step, they are still the real deal.</p>
        <br /><br /><hr />

        <h1>Losers</h1><br /><br />

        <h2>Green Bay Packers</h2><br /><br />
        <p>The loss of Davante Adams coupled with a few key injuries loomed large in week 1 in Minnesota. The long touchdown grab that was dropped by newcomer Christian Watson served as a perfect analogy for the day. The Packers struggled to get anything going and potential big moments were snuffed out. Aaron Rodgers was visibly frustrated by the first game with his new roster. In the same time-frame Davante Adams was out scorching for 141 yards and a touchdown with his new team in Vegas.</p>
        <br /><br /><hr />

        <h2>Russell Wilson</h2><br /><br />
        <p>Wilson finally got his wish and moved from the Seattle Seahawks to a new enticing team in the Denver Broncos. As the karma that is the NFL schedule and the story lines that its schedule-makers create would have it, Wilson was sent back to Lumen Field to face his old team in week one in primetime. The Broncos had much better aspirations for this season, but no one told the Seahawks that. Geno Smith took the opening drive and converted an early touchdown to Will Dissly to take the lead. Denver was never able to take the lead in the game. Each of the two main running backs fumbled the ball away from inside the Seattle one yard line. The defense couldn’t slow down Geno and the Seahawks until the second half. By then, it was two late. Wilson and the Broncos poorly managed their time and timeouts on a potential game-winning drive that ended in a 64-yard prayer of a field goal that missed wide left. Russ returned to his former team who handed him a surprising loss to open the season.</p>
        <br /><br /><hr />

        <h2>Kickers</h2><br /><br />
        <p>Kickers were a storyline in several games this week, and outside of rookie Cade York drilling a game-winning 58-yarder, the storyline were widely not positive. Evan McPherson followed up his impressive season by missing a PAT that almost certainly would’ve won the game after a Ja’marr Chase touchdown tied the game with two seconds remaining. Then after a high snap, he missed a 29-yard field goal in OT. Colts’ Rodrigo Blankenship had a 42-yard attempt that he couldn’t connect on in OT that led to a tie with the lowly Texans. Chris Boswell missed a game-winner in OT before finally ending the ugly finish in Cincinnati by making his next attempt.</p>
        <br /><br /><hr />

        <h2>Dallas Cowboys</h2><br /><br />
        <p>The Dallas Cowboys opened the season against Father Time Tom Brady. Both offenses were sluggish but the Cowboys were especially disappointing as they were never able to find the end zone. To pile on, Dak Prescott suffered a hand injury that will sideline him “for a while”. The Cowboys struck first with a field goal to go up 3-0. From there, they were outscored 19-0 in a tough game to watch. The Cowboys are in danger without Dak in a division that played better than most expected in week 1.</p>
        <br /><br />

          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'>Jared Haverdink</h1>
            <p className='blog-date'>NFL Writer</p>
            <img className='footer-img' src={'https://media-exp1.licdn.com/dms/image/C4E03AQErcwFTWNdQHA/profile-displayphoto-shrink_200_200/0/1613409482439?e=1665619200&v=beta&t=3HsFHoulpCyukzEx35xvKIQSoCXYQeqCxUTnS3GTIGM'} alt="Author"/>
            <p style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0 auto', textAlign: 'center', padding: '1rem'}}>
                Hudsonville, Michigan <br /><br /> Central Michigan University <br /><br /> Accounting
            </p>

            <div style={{ display: 'flex',  flexDirection: 'row' }}>
                <span><a href="https://twitter.com/jared_haverdink"><i class="fab fa-twitter"></i></a></span>
                <span><a href="https://www.linkedin.com/in/jared-haverdink-971b46206/"><i class="fab fa-brands fa-linkedin"></i></a></span>
                <span><a href="https://www.instagram.com/jared_haverdink/"><i class="fab fa-instagram"></i></a></span>
            </div>
        </div>
        </> 
    </>
  );
};

export default NFLW1;
