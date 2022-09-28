import React from 'react';
import { Helmet } from 'react-helmet';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import blog11 from './blog11.png';
import '../Top5QBweek1/styles.css';

const MediaDay = () => {

  let open = true;

  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
                Biggest Moments From NBA Media Day
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>September 28th, 2022</p>
            <h1>Biggest Moments From NBA Media Day</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NBA'/>
                </div>
                <div>
                <Chip label='Media Day'/>
                </div>
            </div>
          </header>
          <img src={blog11} alt='cover' />
          <p className='blog-desc'>

            <br /><br /><h1>Something Is Up In Phoenix</h1><br /><br />
            <p>This past postseason, during the Suns game 7 collapse against the Dallas Mavericks, Deandre Ayton and Coach Monty Williams got into a heated dispute. Monty Williams, at the time, wouldn’t share much of what exactly went it, calling the situation “internal”.</p><br /><br />
            <p>Ayton was an RFA this past offseason, and signed a 4 year $133M offer sheet with the Indiana Pacers. The Suns decided to match, bringing him back for the 2022-2023 NBA season.</p><br /><br />
            <p>Ayton, however, made it abundantly clear on day 1 that there is still some sort of bad blood between him and Williams:</p><br /><br />
            <TwitterTweetEmbed tweetId={'1574865758001106944'} />
            <br /><br />
            <p>This situation will be interesting to follow going into the regular season.</p><br /><br />

            <h1>Kevin Durant…</h1><br /><br />
            <p>It would be an understatement to say that there was a bit of turmoil within the Nets organization this past offseason. Late last year, the Nets made the decision to trade James Harden and Paul Millsap to the 76ers for Ben Simmons, Seth Curry, and Andre Drummond. Ben Simmons availability was questioned, but he was expected to be able to return come playoff time. Obviously that did not happen, and the Nets ended up getting swept by the Boston Celtics. The frustration after an embarrassing playoff series loss, coupled with contempt between Durant and different members within the front office lead to Durant requesting a trade. No suitable partners were found, forcing Kevin Durant to stay in a Nets uniform. In regards to Kevin Durant’s commitment to the squad following all the events of the past year, here is what he had to say:</p><br /><br />
            <TwitterTweetEmbed tweetId={'1574417071999488002'} /> <br /><br />
            <p>As of right now, KD appears to be committed to this team. With a healthy Ben Simmons and available Kyrie Irving (which both are far from certainties), this Nets team will at the very least be a fascinating team to monitor.</p><br /><br />

            <h1>What’s Up With Lonzo Ball?</h1><br /><br />
            <p>When Lonzo Ball is on the floor, he has proven to be an elite defender and has shown significant improvements in his ability to shoot the 3, specifically in his time with the Bulls this past year. The issue for him, really throughout his career, has been staying on the floor. He suffered a knee injury last year, which has now been lingering far longer than everyone expected… including his doctors. Here is what Lonzo had to say in a recent interview:</p><br /><br />
            <TwitterTweetEmbed tweetId={'1574941010274258944'} />
            <br /><br />

            <h1>Jimmy Butler</h1><br /><br />
            <TwitterTweetEmbed tweetId={'1574403989520715777'} /> <br /><br />
            <p>... yeah</p><br /><br />

          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'>Ian Cook</h1>
            <p className='blog-date'></p>
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

export default MediaDay;
