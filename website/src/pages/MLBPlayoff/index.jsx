import React from 'react';
import { Helmet } from 'react-helmet';
import chet from './chet.png';
import blog14 from './blog14.png';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import '../Top5QBweek1/styles.css';

const MLBPlayoff = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
                MLB Playoffs Predictions/Preview
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>October 7th, 2022</p>
            <h1>MLB Playoffs Predictions/Preview</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='MLB'/>
                </div>
                <div>
                <Chip label='Playoffs'/>
                </div>
            </div>
          </header>
          <img src={blog14} alt='cover' />
          <p className='blog-desc'>
         
            <p>With the MLB playoffs starting today, the time has come to preview and predict all of the rounds from the Wild Card leading to the World Series.  Starting today, October 7, the road to the World Series officially starts for 12 teams.  All of these teams have a fresh slate, with only 13 wins required to be crowned World Champions.  Without further fanfare, let’s start in the National League.</p><br /><br />

            <h1>National League</h1><br /><br />
            <h2>Wild Card Round </h2><br /><br />
            <p>Phillies vs Cardinals</p><br /><br />
            <p>The Phillies come into the post season at a .500 clip over the last week of the season, but have revitalized energy going into the postseason.  The Phillies have completely turned their season around with Rob Thompson at the helm after starting the season 22-29.  This team has star power behind the bats of Kyle Schwarber, Rhys Hoskins, Bryce Harper and others.  It will be a tough first series for them to go against the combination of veteran stars and up and coming prospects utilized by the Cardinals.</p><br /><br />
            <p>The Cardinals come into the postseason after yet another fantastic season.  The Cardinals finish the season after running away from the other teams in the division by mounting a 7 game lead at the seasons end.  The season had more storylines than one could have hoped for, behind Albert Pujols reaching the 700+ career home run mark, Adam Wainwright and Yadier Molina becoming the all time leaders in starts made by the same catcher and pitcher.  The Cardinals are a team to watch this postseason, with a blend of rookies and veterans through the roster.</p><br /><br />
            <p>Series Winner: Cardinals</p><br />
            <p>The Cardinals have too much for the Phillies to overcome.  The Phillies do not have playoff experience outside a few players, whereas the Cardinals have made the playoffs every year form 2019 on, which will lead to a Wild Card round victory against the Phillies.</p><br /><br />

            <p>Padres vs Mets</p><br /><br />
            <p>The New York Mets have revitalized their fanbase over this season.  The Mets haven’t made them layoffs since 2016, in which they lost in the divisional round.  The Mets may have blown a historic lead for the division to the Braves to not secure a bye in the Wild Card round, but these are not the ‘same old Mets’.  These Mets are legit, with hitters up and down the lineup and the potential to have shut down pitching night in and night out.  The Mets are being overlooked by many due to their collapse in the division, but they are still an interesting team to keep an eye on. </p><br /><br />
            <p>The San Diego Padres made undoubtedly the biggest splash at the trade deadline, trading to acquire the young superstar, Juan Soto.  He struggled once he arrived to San Diego, but is appearing to heat up at the right time.  The Padres seem to be overshadowed by playing in the same division as the Dodgers all season, but they have been a consistent team over the past couple years after coming out of the years of misery that their fanbase had to endure.  The Padres have a lot of pieces working together, and it will be interesting to see if they can put them all together in the Wild Card round.</p><br /><br />
            <p>Series Winner:  New York Mets</p><br />
            <p>Citi Field will be rocking for the Mets first playoff appearance since 2016, and the star power that the Mets have will be hard for the Padres to overcome.  The Mets will be playing angry after their collapse in the division, and they will handle the Padres in the Wild Card Round.</p><br /><br />

            <h2>Divisional Round</h2><br /><br />
            <p>Braves vs Cardinals</p><br /><br />
            <p>The Braves come into the postseason defending their World Series title from last year, and have already faced adversity throughout their regular season.  They had to play from behind in the division for just about the entire summer, and still ended up on the right end and won the National League East for the 5th straight year.  The Braves have locked up the majority of their teams core for the foreseeable future, as they look to continue their success that they found in the playoffs in 2021.</p><br /><br />
            <p>Series Winner:  Braves</p><br />
            <p>The Cardinals season comes to an end in the divisional round, and their seasoned veterans retire with their heads held high after their careers come to an end.  The Braves are just too much for the Cardinals to handle throughout the series, and they end the Cardinals seasons with ease.</p><br /><br />

            <p>Dodgers vs Mets</p><br /><br />
            <p>The Dodgers have continued to be themselves over the last year, reaching 100 wins for the third season out of the last fours (the only exception coming in the 2020 COVID-shortened season).  They continue to have success through their veterans, free agent signings, and home grown prospects from one of the top rated farm systems in baseball.</p><br /><br />
            <p>Series Winner: Dodgers</p><br />
            <p>Even though the Mets won 4-7 of their games against the Dodgers this season, the Mets season will come to an end against the high powered Los Angeles Dodgers.  The Dodgers have been incredible in both the regular season and postseason the last couple years, and this year will be no different.  The Dodgers handle the Mets, but the Mets will put up a fight before eventually losing the series.</p><br /><br />

            <h2>Championship Series</h2><br /><br />
            <p>Braves vs Dodgers</p><br /><br />
            <p>Series Winner:  Dodgers</p><br />
            <p>In a tight series, the Dodgers avenge their loss last season to the Braves in the NLCS.  The Dodgers head back to their second World Series in three years, and look poised to attempt to replicate their success that they found in 2020.</p><br /><br />

            <h1>American League</h1><br /><br />

            <h2>Wild Card Round</h2><br /><br />
            <p>Guardians vs Rays</p><br /><br />
            <p>The Cleveland Guardians are one of the surprises to come out of Major League Baseball this year.  They were expected to for sure finish behind the Twins and the White Sox, and instead they went out and took the division and won it by 11 games.  The Guardians have one of the youngest teams in the league, and has finished the season winning seven of their last tens.  They look to continue to be the team of surprises as they take on the Rays.</p><br /><br />
            <p>The Rays have been one of the most consistent teams in the last couple years, and see themselves in the playoffs for the fourth time in the last four years.  They have had success with a low payroll and a lot of homegrown talent, and they look to continue that success in the postseason this year after making the World Series a mere two years ago. </p><br /><br />

            <p>Series Winner:  Guardians</p><br />
            <p>Cleveland will continue to be a team of surprises in 2022.  Nobody thought they would be in the playoffs, much less win the division by 11 games.  They will continue their success with their young core producing throughout the series, pushing them to the Divisional Round.</p><br /><br />

            <p>Mariners vs Blue Jays</p><br /><br />
            <p>The Mariners have one of the most exciting rookies in baseball and the presumed American League Rookie of the Year in Julio Rodriguez.  He provides a spark to the team by being the second highest statistical hitter in just his first year.  The Mariners ended the longest playoff drought this season, and they are a team that looks to make their name heard throughout the postseason.</p><br /><br />
            <p>The Blue Jays continue to have success behind their young core of superstars.  The Blue Jays have not had the most success in the postseason, and look to change that this year.  The Blue Jays are 2-5 against the Mariners this season, and look to change that while hosting the Mariners for the best of three Wild Card Series.</p><br /><br />
            <p>Series Winner:  Mariners</p><br />
            <p>The Mariners had their most successful season since 2001 by making the playoffs, and look to continue their success this weekend.  Even though they have the tough task of going on the road to Toronto, they win the series and move onto the Divisional Round.</p><br /><br />

            <h2>Divisional Round</h2><br /><br />
            <p>Yankees vs Guardians</p><br /><br />
            <p>The Yankees continued their streak of successful seasons on the back of their slugger Aaron Judge.  He had one of the most successful seasons in American League history by setting the Yankees and American League home run record by hitting 62 home runs over the course of the season.  The Yankees look to get back to the World Series for the first time since winning it all in 2009.</p><br /><br />
            <p>Series Winner:  Yankees</p><br />
            <p>The Cleveland Guardians surprise series comes to an end after meeting the Yankees in the Divisional Round.  The Yankees have too much firepower for the Guardians to overcome, and they will handle business quickly before looking ahead at preparing for the Championship Series.</p><br /><br />

            <p>Astros vs Mariners</p><br /><br />
            <p>The Houston Astros continue their string of dominance in the American League West.  They won the division for the fifth time in six years, and amassed a 16 game lead on the Mariners for the division.  The Astros continue to reload after loosing Gerrit Cole, Carlos Correa, George Springer, and others over the last couple of years.  The Houston Astros look to continue their postseason success in the divisional round.</p><br /><br />
            <p>Series Winner:  Astros</p><br />
            <p>The Astros will continue their success against the Mariners after going 12-7 over the course of the regular season.  The Astros look to get back to the American League Championship Series for the sixth straight season, and will handle the Mariners easily before returning to the ALCS.</p><br /><br />

            <h2>Championship Series</h2><br /><br />
            <p>Astros vs Yankees</p><br /><br />
            <p>Series Winner:  Astros</p><br /><br />
            <p>The Astros will continue their success over the Yankees in the American League Championship Series.  This season alone, the Astros have won five of seven games between the two teams.  The series will be close, but it will end with the Astros advancing to the World Series for the fourth time in the last six years.</p><br /><br />

            <h1>World Series</h1><br /><br />
            <p>Astros vs. Dodgers</p><br /><br />            
            <p>World Series Winner: Dodgers</p><br /><br />
            <p>The Dodgers will become the World Championships after the rematch of the 2017 World Series.  There is a lot of bad blood between the teams after the cheating scandal by the Astros was made public, and the Dodgers will revenge their loss five years ago by reclaiming the title of World Champions for the second time in three years.  The Astros are good, but the Dodgers are better and will be the reigning champions going into the 2023 Major League Baseball Season.</p>


          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'>Chet Huls</h1>
            <p className='blog-date'></p>
            <img className='footer-img' src={chet} alt="Author"/>
            <p style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0 auto', textAlign: 'center', padding: '1rem'}}>
                Rockford, Michigan <br /><br /> Central Michigan University <br /><br /> Marketing: Professional Sales
            </p>

            <div style={{ display: 'flex',  flexDirection: 'row' }}>
                <span><a href="https://twitter.com/ChetHuls"><i class="fab fa-twitter"></i></a></span>
                <span><a href="https://www.linkedin.com/in/chethuls/"><i class="fab fa-brands fa-linkedin"></i></a></span>
                <span><a href="https://www.instagram.com/chethuls/"><i class="fab fa-instagram"></i></a></span>
            </div>
        </div>
        </> 
    </>
  );
};

export default MLBPlayoff;
