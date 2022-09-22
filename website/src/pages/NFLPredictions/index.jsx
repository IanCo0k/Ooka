import React from 'react';
import { Helmet } from 'react-helmet';
import Chip from '../../components/common/Chip';
import blog3 from './blog3.png';
import '../Top5QBweek1/styles.css';
import Navbar from '../Home/Navbar';

const NFLPredictions = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
            NFL Season Predictions
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>Published on September 7th</p>
            <h1>NFL Season Predictions</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NFL'/>
                </div>
                <div>
                <Chip label='Predictions'/>
                </div>
            </div>
          </header>
          <img src={blog3} alt='cover' />
          <p style={{ textAlign: 'center' }} className='blog-desc'>

            <h1>NFC NORTH</h1><br />
            Packers: 12-5 <br />
            Vikings: 10-7 <br />
            Lions: 6-11 <br />
            Bears: 4-13 <br /><br />
            I think Rodgers will have an underwhelming season, but I believe he will still be good enough to win the NFC North. Their one-two punch of Aaron Jones and AJ Dillon is probably the best backfield in the NFL. The Packers will win this division again but let down their fans with another playoff loss. <br /><br />
            <hr /><br /><br />

            <h1>NFC EAST</h1><br />
            Eagles: 11-6 <br />
            Cowboys: 10-7 <br />
            Commanders: 8-9 <br />
            Giants: 6-11 <br /><br />
            This division is a toss-up between the Eagles and Cowboys. I don’t like either of these teams, but I dislike the Eagles a little less than the Cowboys. I think the Eagles will be one of the best teams when it comes to running the ball, and I believe this will ultimately lead to them winning the division. <br /><br />
            <hr /><br /><br />
            
            <h1>NFC SOUTH</h1><br />
            Bucs: 13-4 <br />
            Saints: 12-5 <br />
            Panthers: 7-10 <br />
            Falcons: 4-13 <br /><br />
            I love both the Bucs and Saints this year. Whenever you have Tom Brady, you are going to be a Superbowl contender. The Saints are going to be a team you are dreading to play week in week out. Their defense should be one of the best, and Jameis is a top candidate for comeback player of the year. I think both the Bucs and Saints have a chance to win it all this year. <br /><br />
            <hr /><br /><br />

            <h1>NFC WEST</h1><br />
            Rams: 12-5 <br />
            49ers: 11-6 <br />
            Cardinals: 6-11 <br />
            Seahawks: 3-14 <br /><br />
            I think the Rams go back-to-back this year. However, their schedule is extremely difficult, and their regular season record might not be the greatest. Even without the eye-popping record, this team has the playoff experience, a better roster, and the perfect head coach to repeat. They will have to watch out for the 49ers though. I am high on Trey Lance and the 49ers defense is always tough to score on. <br /><br />
            <hr /><br /><br />

            <h1>AFC NORTH</h1><br />
            Ravens: 14-3 <br />
            Bengals: 10-7 <br />
            Browns: 8-9 <br />
            Steelers: 7-10 <br /><br />
            Lamar is my MVP this season. This team is going to be dangerous and may just win the Superbowl. I see the Bengals taking a step back and struggling to make the playoffs. <br /><br />
            <hr /><br /><br />

            <h1>AFC East</h1><br />
            Bills: 15-2 <br />
            Dolphins: 11-6 <br />
            Pats: 9-8 <br />
            Jets: 3-14 <br /><br />
            The Bills have everything you want in a team. Josh Allen is the favorite to win MVP and will lead this team to the best record in the league. I think they make the Superbowl, but the Rams experience causes the Bills to finish one game short. <br /><br />
            <hr /><br /><br />

            <h1>AFC SOUTH</h1><br />
            Colts: 9-8 <br />
            Titans: 8-9 <br />
            Jags: 5-12 <br />
            Texans: 4-13 <br /><br />
            This division is terrible and will lose by 2+ touchdowns to an AFC West wildcard team in the first round. <br /><br />
            <hr /><br /><br />

            <h1>AFC WEST</h1><br />
            Chargers: 13-4 <br />
            Chiefs: 12-5 <br />
            Broncos: 11-6 <br />
            Raiders: 8-9 <br /><br />
            Wow. These divisional games are going to be must watch TV. I think the Chargers defense will win them this division, not Herbert. The Raiders are the team I believe will fail to keep up even with the addition of Adams. <br /><br />
            <hr /><br /><br />




          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'>Jacob Majoor</h1>
            <p className='blog-date'>NFL Writer</p>
            <img className='footer-img' src={'https://media-exp1.licdn.com/dms/image/C5603AQH5jSChfarphg/profile-displayphoto-shrink_800_800/0/1662510225096?e=1668038400&v=beta&t=gXXjX_fRwTVfqvUqeFCQEWDFasj8dOOMt6H9BSOq51g'} alt="Author"/>
            <p style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0 auto', textAlign: 'center', padding: '1rem'}}>
                Rockford, Michigan <br /> Central Michigan University <br /> Finance <br />
            </p>
            <div style={{ display: 'flex',  flexDirection: 'row' }}>
                <span><a href="https://twitter.com/Jacobmajoor"><i class="fab fa-twitter"></i></a></span>
                <span><a href="https://www.linkedin.com/in/jacob-majoor-4b364624b/"><i class="fab fa-brands fa-linkedin"></i></a></span>
                <span><a href="https://www.instagram.com/jacob_majoor/"><i class="fab fa-instagram"></i></a></span>
            </div>
        </div>
        </>
    </>
  );
};

export default NFLPredictions;
