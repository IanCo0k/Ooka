import React from 'react';
import { Helmet } from 'react-helmet';
import blog9 from './blog9.png';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import '../Top5QBweek1/styles.css';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const NFLW2 = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
            Winners & Losers of Week 2
            </title>
          </Helmet>
          <header>
            <p className='blog-date'></p>
            <h1>Winners & Losers of Week 2</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NFL'/>
                </div>
                <div>
                <Chip label='Winners and Losers'/>
                </div>
            </div>
          </header>
          <img src={blog9} alt='cover' />
          <p className='blog-desc'>
         
            <h1>Winners</h1><br /><br />

            <h2>Detroit Lions</h2><br /><br />
            <p> The Lions came off a hard fought loss to the Eagles and focused all that disappointment on the Commanders as Washington visited Ford Field. The Lions played a near perfect first half of football. They put up 22 points, including two from a safety, and held Washington scoreless, barely allowing even a first down in the first half. The beginning of the second half gave Lions fans flashbacks to blown leads of the past. Washington got themselves back in the game but the Lions got their wits about them and closed out one of the best games that the franchise has played in recent history. Amon-Ra St. Brown proved he can be that guy in the future for the Detroit Lions.</p>
            <br /><br />
            <TwitterTweetEmbed tweetId={'1572564004219883521'} /> <br /><br />

            <h2>Buccaneers Defense</h2><br /><br />
            <p>Any team that has Tom Brady on the roster is a playoff and Super Bowl contender. A team with Tom Brady and an elite defense is a team to be feared. The Buccaneers have played on the road against the Cowboys and Saints, two teams with their eyes set on playoff spots. Tampa has surrendered one touchdown and 13 total points in those two games. Next up are the Packers and the Chiefs, which will be two more tests with two elite  quarterbacks coming to Raymond James Stadium. If the defense can compete anywhere near the same level, the Buccaneers will be in every game this year and a force come postseason.</p>
            <br /><br />

            <h2>Dolphins-Ravens Spectators</h2><br /><br />
            <p>We’ve got an early candidate for game of the year, and boy is it a strong one. 80 combined points, an offensive onslaught that began with a 103 yard touchdown return on the opening kickoff by Devin Duvernay. Lamar has begun his chase for a second MVP  with 318 yards and 3 touchdowns, a stat line that fantasy owners and NFL GM’s alike were thrilled to see. Not to be outdone by his positional counterpart, Tua Tagovailoa decided he’d mess around and toss 469 yards and 6 touchdowns on his stat sheet. The Ravens led by 21 with under 13 minutes to play, but the Dolphins scored 28 points from then on to steal a huge game on the road in Baltimore.</p><br /><br />
            <TwitterTweetEmbed tweetId={'1572600299969445892'} /> <br /><br />

            <br /><h1>Losers</h1><br /><br />

            <h2>Cincinatti Bengals</h2><br /><br />
            <p>Who expected the Bengals to make the losers list this early? Cincy opened the season playing teams in quarterback turmoil. The Steelers played their first game without Ben Roethlisberger on the roster without a clear starter. The Cowboys threw Cooper Rush into his second career start against the defending AFC champs. The Bengals didn’t win either game. Super Bowl hangover would be an understatement at this point. Joe Burrow has 5 turnovers and the offense is a shell of what we saw last year and what was expected to continue into the 2022-23 campaign. They sit in dead last in the division wondering what it will take to get back on track. The O-line has not improved and is on pace to allow over 110 sacks this year. That trend will have to turn quickly and dramatically.</p><br /><br />

            <h2>Indianapolis Colts</h2><br /><br />
            <p>Who expected the Bengals to make the losers list this early? Cincy opened the season playing teams in quarterback turmoil. The Steelers played their first game without Ben Roethlisberger on the roster without a clear starter. The Cowboys threw Cooper Rush into his second career start against the defending AFC champs. The Bengals didn’t win either game. Super Bowl hangover would be an understatement at this point. Joe Burrow has 5 turnovers and the offense is a shell of what we saw last year and what was expected to continue into the 2022-23 campaign. They sit in dead last in the division wondering what it will take to get back on track. The O-line has not improved and is on pace to allow over 110 sacks this year. That trend will have to turn quickly and dramatically.</p>
            <br /><br />

            <h2>Russell Wilson</h2><br /><br />
            <p> Much like the Bengals, Wilson and the Broncos played two opponents that most would not praise as the elite of the league. And while the Broncos limped to a win in week 2 against the Texans, Russell Wilson struggled mightily. Russ completed just 14 of his 31 pass attempts and barely cracked the 200 yard mark. The offense never had any significant rhythm with him at the helm. There are still 15 games left to play and it would be a significant shock if he completes less than half of his passes consistently. But two weeks in a row of uninspired performances has to be a scare to Broncos fans who expected Russ to immediately jumpstart the team after the Drew Lock experiment.</p>
            <br /><br />

            <h2>San Francisco 49ers</h2><br /><br />
            <p>The 49ers won their football game this week. That is an afterthought right now in San Francisco. Trey Lance broke his ankle late in the first quarter and underwent season-ending surgery. The 49ers took a chance on him after playing just one game in his final season at North Dakota State. This injury throws a real wrench in the plan to build around him as a franchise quarterback. Lance is expected to be ready by the start of next season, but that pushes the plan back a whole year and they don’t know what level of play they’ll get from him. They have yet to see how well he can perform before his devastating injury. For now, they will lean back on Jimmy Garoppolo to lead them through the rest of this season and the Trey Lance experience will be put on the back burner.</p>

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

export default NFLW2;
