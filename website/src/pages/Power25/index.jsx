import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import blog13 from './blog13.png';
import '../Top5QBweek1/styles.css';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Power25 = () => {

  let open = true;


  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
            Preseason Power 25 for the ‘22-‘23 College Basketball Season 
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>September 29th, 2022</p>
            <h1>Preseason Power 25 for the ‘22-‘23 College Basketball Season</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NCAA'/>
                </div>
                <div>
                <Chip label='Basketball'/>
                </div>
            </div>
          </header>
          <img src={blog13} alt='cover' />
          <p className='blog-desc'>

           <br /><br /><p>Andy Katz recently released his power 36 for the upcoming college basketball season. It inspired me to release my own preseason power rankings.</p><br /><br />

           <TwitterTweetEmbed tweetId={'1574416900620226560'} /> <br /><br />

            1. North Carolina: Came up one game short of a National title and return a large portion of their production from a season ago. <br /><br />

            2. Kentucky: They return the reigning National player of the year in Oscar Tshiebwe. He’ll be up for that award again this year. <br /><br />

            3. Gonzaga: Drew Timme is back for another year. He’ll be one of the best players in the country again. <br /><br />

            4. Houston: Finished the year very strong without their best player. Marcus Sasser will be a top guard in the country this year. <br /><br />

            5. Kansas: The National Champions return Jalen Wilson and are poised to contend for another Big-12 title. <br /><br />

            6. Arkansas: Bring in a great recruiting class including a name to watch, Nick Smith. The Hogs brought in several transfers as well. <br /><br />

            7. Duke: Once again they bring in the the No.1 ranked recruiting class. Will be interesting to see if there is any drop off without Coach K. Very talented roster as always. <br /><br />

            8. Baylor: The Bears have turned into a team that just reloads each year. They return production as well as bring in Keyonte George, who should excel in his first year. <br /><br />

            9. Creighton: Should be the best roster in the Big East. The Blue Jays return a good amount production as well as bring in one of the nations most sought after transfers, Baylor Scheierman. <br /><br />

            10. UCLA: Jaime Jaquez and Tyger Campbell will be one of the nations best duos. A good amount of experience mixed in with some young talent for the Bruins. <br /><br />

            11. Texas: Marcus Carr and Tyrese Hunter will be a very solid back court for Texas. The Longhorns bring in some talent in Dillon Mitchell who should contribute right away. <br /><br />

            12. Auburn: Bruce Pearl has quickly shown he’s one of the best coaches in the country and he brings in solid transfers and very talented freshman to this roster. <br /><br />

            13. Tennessee: Zakai Zeigler and Santiago Vescovi will be one of the most experienced back courts in the nation. Tennessee also bring in one of their highest rated recruits in program history in five star Julian Phillips. <br /><br />

            14. Texas Tech: The Red Raiders continue to be one of the most slept on teams year in and year out. Another team that brought in a very highly targeted transfer in Fardaws Aimaq. <br /><br />

            15. Villanova: It will be interesting to see how the Wildcats fare in their first season without legendary coach Jay Wright. I like what this team returns however, along with the addition of elite freshman Cam Whitmore<br /><br />

            16. Illinois: A team that hit the transfer portal very hard. Brought in Terrance Shannon and Matthew Mayer, who are both great players. Also brought in a talented guard in Skyy Clark. <br /><br />

            18. Indiana: A very experienced team brings back their best player in Trayce Jackson-Davis. Also bring in talented five star Jalen Hood-Schifino. Should battle for the Big Ten with Illinois. <br /><br />

            19. TCU: The Horned Frogs bring back one of the best guard in the nation Mike Miles. The team brings back a lot of experience and showed their potential in the second round of the tournament last year against Arizona. <br /><br />

            20. Alabama: Coach Nate Oats is building something special at Bama. The Tide bring in a solid guard transfer in Mark Sears from Ohio as well as two five stars, Jaden Bradley and Brandon Miller. A young team but a very talented team. <br /><br />

            21. Oregon: Dana Altman is another great coach who doesn’t have two bad years in a row. The Ducks return good production from last year specifically Will Richardson. They bring in top ten freshman Kel’el Ware to add talent to last years roster. <br /><br />

            22. Arizona: The Wildcats had one their best seasons in school history last year and lost two key pieces from that team in Bennedict Mathurin and Dalen Terry. They do bring back a number of guys from last years team who have experience. They also landed Courtney Ramey in the portal from Texas. <br /><br />

            23. Michigan: Hunter Dickinson is the Big Tens best player and should dominate in his third year. The Wolverines return some production as well as bring in transfer Jaelin Llewellyn from Princeton. Jett Howard is a guy who I think will be an impact freshman. <br /><br />

            24. San Diego State: The Aztecs return high level scorer Matt Bradley who should star in the Mountain West for another year. They also added another scoring guard from Seattle, Darrion Trammell who averaged 17.3 PPG a year ago. <br /><br />

            25. Miami: The U lost a lot from last years team but added arguably the best transfer from last year in Nijel Pack. Along with returner Isaiah Wong, the Hurricane should have one of the nations best back courts that could carry them through the season. <br /><br />

            <p>The top three teams are obvious, but there is certainly some room for other teams to take charge and claim the other spots for top teams. Should be interesting to see how teams start and which teams come out hot out of the gates. </p><br /><br />


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
        <div className="blog-footer" style={{ marginTop: '1vh' }}>
            <div className="blogList-wrap"></div>
        </div>
        </> 
    </>
  );
};

export default Power25;
