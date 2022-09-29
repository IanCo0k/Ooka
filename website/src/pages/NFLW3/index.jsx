import React from 'react';
import { Helmet } from 'react-helmet';
import blog12 from './blog12.png';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import '../Top5QBweek1/styles.css';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const NFLW3 = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
            Winners & Losers of Week 3
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>September 29th, 2022</p>
            <h1>Winners & Losers of Week 3</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NFL'/>
                </div>
                <div>
                <Chip label='Winners and Losers'/>
                </div>
            </div>
          </header>
          <img src={blog12} alt='cover' />
          <p className='blog-desc'>
          <br /><br /><h1>Winners</h1><br /><br />

          <h1>Cooper Rush</h1><br /><br />
          <p>Cooper Rush is now 3-0 as an NFL starter. The Central Michigan grad has stepped in after a pair of Dak Prescott injuries and has held his own. Rush was consistently getting his team down the field into scoring position and without a few key drops, may have added an extra touchdown to his stats. Often when backups are forced to start, the goal is for them to not lose the the team the game. Cooper Rush has done that and much more. He has not been dead-weight that the rest of the team must make up for. He has greatly contributed to all three team wins. Cooper Rush has solidified himself as a reliable backup and a guy the Cowboys can trust to keep them alive in the playoff race while Dak recovers from injury.</p>
          <br /><br />

          <h1>Miami Dolphins</h1><br /><br />
          <p>A special start has begun in Miami. The Dolphins beat the Super Bowl Favorite Buffalo Bills and improved to 3-0. This win came one week after defeating a solid Lamar Jackson-led Ravens squad. The Dolphins shortened the game by forcing the Bills to go on long drives in order to score. The Bills had three drives of 14 plays or more, including a 20 play drive that resulted in just a field goal. The Eagles didn’t take the lead until the 4th quarter, but they hung around long enough to stay within striking distance. The Dolphins escaped after we saw the rare “butt punt” when Thomas Morstead was pinned in his own end zone resulting in a safety. The Dolphins remain undefeated with multiple wins over teams looking to make deep playoff runs.</p>
          <br /><br />

          <h1>Philadelphia Eagles</h1><br /><br />
          <TwitterTweetEmbed tweetId={'1575463367891976194'} /> <br /><br />
          <p>The NFC East favorites reside in Lincoln Financial Field. The Eagles have looked clean and polished from the beginning. Jalen Hurts has taken the leap the Eagles were dying to see from him. The defense has cleaned up the holes we saw Week 1. The offense is getting contributions all the way down the depth chart. All this success is coming while the other three teams in the division are stumbling over each other in the chase of the Eagles. The Cowboys seem to have grasped the second place spot for now, but they appear miles behind the Eagles through just three weeks.</p>
          <br /><br />

          <h1>Losers</h1><br /><br />

          <h1>Washington Commanders</h1><br /><br />
          <p>The Commanders have not found success in their first year under the new name. The team won its first game after rebranding, but followed that up with two uninspired losses. In Week 3, they played a divisional game against the Eagles and it was over rather quickly. Neither team scored in the first quarter, but Philly followed it up with a 24 point second quarter. The Commanders didn’t get on the board until a 4th quarter safety made the score 24-2. With a touchdown at the two minute warning, the score looked a little more presentable, but the game was not as close as the final score suggests. Washington has become the next victim of the common denominator that is Carson Wentz. Several teams have tried now, but no one has been able to find the Carson Went that we saw early on in his career.</p>
          <br /><br />

          <h1>New Orleans Saints</h1><br /><br />
          <p>The Saints have played three divisional games, and after limping to a narrow win against the Falcons, they have fallen short and lost to the Buccaneers and Panthers. In Week 3, the Panthers beat them while only getting into the red zone one time. They added a 67 yard passing touchdown and paired it with a defensive scoop and score to propel them to the win. In more positive news, Chris Olave had a great game with nice catches for 147 yards, but that is about where the positivity stops. With only three divisional games remaining, the Saints will have to play especially well outside of the NFC South to recover from the slip-ups of weeks 1-3.</p>
          <br /><br />

          <h1>Las Vegas Raiders</h1><br /><br />
          <TwitterTweetEmbed tweetId={'1424128221470154761'} />
          <p>“The Raiders” are 0-3. In an uber-competitive AFC West, that start may be a death sentence. All three losses were within one score, but are still losses nonetheless. The latter two come at the hands of teams that are not powerhouses this year in the Cardinals and Titans. Derek Carr is playing up to his expectations, averaging over 280 yards and 2 touchdowns per game. The problem comes from the rushing attack. As a team the Raiders are averaging 80 rush yards. The Raiders have not scored a rushing touchdown this year. They are running the ball on nearly 42% of offensive plays, but aren’t finding success doing it. A turn around needs to happen soon, or the Raiders may find themselves in a hole too deep to climb out of.</p>
          <br /><br />


          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'>Jared Haverdink</h1>
            <p className='blog-date'></p>
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

export default NFLW3;
