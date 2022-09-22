import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import blog1 from './blog1.png';
import '../Top5QBweek1/styles.css';

const Top5PG = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
            Ranking The Top 5 Point Guards In The NBA
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>Published on September 5th</p>
            <h1>Ranking The Top 5 Point Guards In The NBA</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NBA'/>
                </div>
                <div>
                <Chip label='Rankings'/>
                </div>
            </div>
          </header>
          <img src={blog1} alt='cover' />
          <p className='blog-desc'>
          The current pool of PG's in the NBA has a great mix of young and veteran talent, and the upcoming season promises to have all of that talent on full display. Here are the top 5 Floor Generals to look out for as the 2022-2023 season soon begins <br/><br />
          DISCLAIMER: Damian Lillard will not be included due to last year's injury (but he otherwise would be on this list) <br /><br />
          <h2>#5: KYRIE IRVING</h2> <br /><br />
          With the departure of James Harden to Philly, we can expect Kyrie to resume his role as the startin PG in Brooklyn. When Kyrie is available and on the floor (which isn't the reality a lot of the time, unfortunately), he is a generational type offense talent. Few can score the basketball as efficiently and as gracefully as Kyrie Irving. He is a 50/40/90 guy who can give you a ridiculously efficient 50 piece on any given night. <br /><br />

          <h2>#4: JA MORANT</h2> <br /><br />
           Ja Morant finally made his ascension to stardom during the 2022 NBA Season. He went from fringe all-star to MVP candidate, and even manage to win MIP, increasing his scoring average by 8 PPG and leading the Grizzlies to be one of the top seeds in the west. He has an unreal amount of confidence, and is already a proven playoff performer at just 23.<br /><br />

          <h2>#3: Trae Young</h2> <br /><br />

          Trae Young is an offensive juggernaut. He is 23 years old, and has averaged close to 30 and 10 in two seperate seasons, which has only been done by 4 other players in the history of the NBA. The defensive limitations are there, but let's not act like any other guy on this list is a brick wall on defense either... His offensive contributions more than make up for it. He's a guy that can lead you on a deep playoff run as the #1 guy, and the Hawks recent moves to surround him with defenders will only help that reality.<br /><br />
          <h2>#2: Luka Doncic</h2> <br /><br />
          Luka Doncic is the definition of a superstar. At the age of 22, Luka already has 3 All-NBA selections to his name, and has posted some of the most absurd averages the league has ever seen for people his age. More importantly, Luka has proven to be someone that you can rely on to carry you through a playoff series. There's 82 game guys, and then there is 16 game guys... Luka is a 16 game guy. He plays at an MVP level all regular season, and still manages to elevate his game come playoff time. He is one of the most elite offensive talents the league has ever seen, and he's only going into his 5th season.<br /><br />
          <h2>#1: Stephen Curry</h2><br /><br />
          Fresh off of his 1st Finals MVP (although he should have 2, maybe even 3...), there is no one more deserving of this spot. Steph is the greatest shooter the world has ever seen, and he is the engine behind one of the greatest dynasties in NBA history. Nobody single-handedly shifts a defense like Wardell Stephen Curry. He is just as effective without the ball as he is with it, and he is just a WINNER.<br /><br />
          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'>Ian Cook</h1>
            <p className='blog-date'>NBA Writer</p>
            <img className='footer-img' src={'https://campgeneva.org/wp-content/uploads/2022/06/Cook_Ian.jpg'} alt="Author"/>
            <p style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0 auto', textAlign: 'center', padding: '1rem'}}>
                Rockford, Michigan <br /><br /> Central Michigan University <br /><br /> Computer Science
            </p>

            <div style={{ display: 'flex',  flexDirection: 'row' }}>
                <span><a href="https://twitter.com/Chefc0ok"><i class="fab fa-twitter"></i></a></span>
                <span><a href="https://www.linkedin.com/in/ian-cook-854896205/"><i class="fab fa-brands fa-linkedin"></i></a></span>
                <span><a href="https://www.instagram.com/ianco0k/"><i class="fab fa-instagram"></i></a></span>
            </div>
        </div>
        </> 
    </>
  );
};

export default Top5PG;
