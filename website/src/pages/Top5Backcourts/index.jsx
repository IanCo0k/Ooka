import React from 'react';
import { Helmet } from 'react-helmet';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import '../Top5QBweek1/styles.css';

const Top5Backcourts = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
            Ranking the Top Five Backcourts in the NBA for the 2022-2023 NBA Season
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>September 15th, 2022</p>
            <h1>Ranking the Top Five Backcourts in the NBA for the 2022-2023 NBA Season</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NBA'/>
                </div>
                <div>
                <Chip label='Rankings'/>
                </div>
            </div>
          </header>
          <img src={'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg3OTM4NzQzMjY3NjMzMDk4/steph-klay-getty_0.jpg'} alt='cover' />
          <p className='blog-desc'>

            <br /><br /><h1>5. Ja Morant and Desmond Bane</h1><br /><br />
            <img src="https://nba.nbcsports.com/wp-content/uploads/sites/12/2022/04/GettyImages-1390933042-e1650973223804.jpg?w=829" alt="Ja" /><br /><br />
            <p>Ja Morant and Desmond Bane are one of the most exciting young duos that we have in the NBA. Morant is a highflier and playmaker who can get to the basket at will, ranking top 3 in the NBA in paint PPG behind only Giannis Antetokounmpo and Nikola Jokic. Bane is the perfect complement to Ja as an efficient, high volume 3 point shooter who benefits from Ja’s gravity when driving to the rim. Both have proven to be solid playoff performers already in their young careers, and as they continue to grow and develop those playoff runs should start stretching closer and closer to early June.</p>
            <br /><br /><hr />

            <h1>4. Trae Young and Dejounte Murray</h1><br /><br />
            <img src="https://cdn-wp.thesportsrush.com/2022/07/801c3bec-untitled-design-81.jpg" alt="trae" /><br /><br />
            <p>This duo was tough for me to place. Both are all-star level individual players, and it seems as though pairing an elite defensive guard like Murray alongside Young to make up for his defensive deficiencies would be a perfect fit. My hesitations with this duo lie far more with Murray than they do with Young. Trae has proven to be the guy, making a surprise run to the ECF just 2 seasons ago and consistently producing on the offensive end at a super-star level. Murray just fully came into his own this previous year, earning his first all-star nod. But he did so on a team where he was the only consistent threat and got to have the ball in hish hands at all times. I question his ability to be able to play off the ball next to Trae. Doubts aside, this duo is too talented to not be considered one of the tops in the NBA.</p>
            <br /><br /><hr />

            <h1>3. Darius Garland and Donovan Mitchell</h1><br /><br />
            <img src="https://cavaliersnation.com/wp-content/uploads/2022/01/Darius-Garland-and-Donovan-Mitchell-1.jpg" alt="darius" /><br /><br />
            <p>The Cleveland Cavaliers just had one of the most efficient rebuilding to contention transitions that I can remember in my lifetime. I truly believe that this backcourt has the potential to make it out of the Eastern Conference this year. Darius Garland made his jump into stardom last season, averaging close to 22 and 9 on very efficient shooting, and turning himself into a true floor general. He led the Cavs to a play-in berth without a single other true bucket getter on the roster. With Donovan Mitchell, the Cavs get not just any bucket getter, but one of the best the league has to offer. Donovan Mitchell, while still young at only 26, brings plenty of valuable playoff experience and shot creation that the Cavs were severely lacking to be able to make that next stop. With this backcourt and two of some of the best rim protectors in the league backing them up in Evan Mobley and Jarrett Allen, the Cavs are going to be dangerous.</p>
            <br /><br /><hr />

            <h1>2. Chris Paul and Devin Booker</h1><br /><br />
            <img src="https://arizonasports.com/wp-content/uploads/2021/05/chris-paul-devin-booker-1.jpg" alt="cp3" /><br /><br />
            <p>Chris Paul, at age 36, remains one of the top players in the game. Many are predicting a regression from him entering into his age 37 season, but I am just not as convinced that age will effect his game as much as it might for other players. Obviously the physical tole of a full NBA season is difficult, and that difficulty would increase with age, but Chris Paul’s game relies so little on his athleticism and so much more on his IQ and decision making, which makes it easier for me to ignore the fear of regression. Devin Booker, on the other hand, is far from regressing. He is gradually entering into his prime, coming off a season where he was 1st team All-NBA. He is one of the most elite scorers in the game and was even starting to develop into a solid defender this past season. This duo undoubtedly unperformed in the playoffs this past year, but they are coming off two seasons in which they made a finals run and then followed that up with winning the most regular season games in Suns history. They are still a duo to look out for.</p>
            <br /><br /><hr />

            <h1>1. Stephen Curry and Klay Thompson</h1><br /><br />
            <img src="https://fadeawayworld.net/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg3MzY4NDYzNjg0MDg1MzA4/curry-klay.jpg" alt="splash" /><br /><br />
            <p>The Splash Brothers have been one of the most (and normally THE most) dominant backcourts in the NBA for almost a decade now. Stephen Curry finally earned his first Finals MVP this past season and continues to play at a super star MVP level. There is no question that that will continue. Klay Thompson struggled to get into a groove coming back from a 2-year absence this past year, but even in what many considered to be a down year (for the time that he played), Klay averaged 20 points and was elite from behind the line. After a full healthy off-season of training, I’m expecting close to pre-injury Klay production, at least on the offensive end. These two are two of the best shooters that the world has ever seen, and I wouldn’t be surprised if they made a run at #5 together next year.</p><br /><br />

          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'></h1>
            <p className='blog-date'></p>
            <img className='footer-img' src={'https://campgeneva.org/wp-content/uploads/2022/06/Cook_Ian.jpg'} alt="Author"/>
            <p style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0 auto', textAlign: 'center', padding: '1rem'}}>
                Rockford, Michigan <br /><br /> Central Michigan University <br /><br /> Computer Science
            </p>

            <div style={{ display: 'flex',  flexDirection: 'row' }}>
                <span><a href=""><i class="fab fa-twitter"></i></a></span>
                <span><a href=""><i class="fab fa-brands fa-linkedin"></i></a></span>
                <span><a href=""><i class="fab fa-instagram"></i></a></span>
            </div>
        </div>
        </> 
    </>
  );
};

export default Top5Backcourts;
