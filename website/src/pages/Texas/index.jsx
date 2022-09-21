import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Navbar from '../Home/Navbar';
import Chip from '../../components/common/Chip';
import '../Top5QBweek1/styles.css';

const Texas = () => {

  let open = true;


  return (
    <>
        <Navbar open={open} />
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
            Will 2023 be the Class that Brings Texas Back? 
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>September 13th, 2022</p>
            <h1>Will 2023 be the Class that Brings Texas Back? </h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label='NCAA'/>
                </div>
                <div>
                <Chip label='Texas'/>
                </div>
            </div>
          </header>
          <img src={'https://cdn.vox-cdn.com/thumbor/9-9_Ad5zaoLePWb5U820eEPQqlY=/0x0:4872x3248/1200x800/filters:focal(2082x686:2860x1464)/cdn.vox-cdn.com/uploads/chorus_image/image/71379767/1422531040.0.jpg'} alt='cover' />
          <p className='blog-desc'>

            <br /><br />
            <p>So much has been made about the 2023 recruiting that Texas has assembled thus far. Rightfully so, as the Longhorns currently have the number two class in the country just behind Alabama. The problem for Texas in recent years has been getting the good recruiting classes to translate to wins on the field. I would say the reason they haven’t been able to translate these classes to wins is because of the quarterback position. Since the dominant stretch from ‘04 to ‘09 with Vince Young and Colt McCoy, Texas has had one season with over 10 wins. The Longhorns had some success with Sam Ehlinger, but certainly not up to the standards of the fans of Texas football. The ‘23 class seems to have solved that problem. While rankings don’t translate to success 100 percent of the time, Arch Manning is the highest rated player Texas has landed in a long time. Being the composite number one recruit, Arch has all the projections to be a very good quarterback for Texas. Along with Manning, Texas landed former five-star Quinn Ewers from Ohio State. Ewers like Manning, once had a perfect player rating on 247sports. Ewers was showing his potential against Alabama before suffering a sprained sprained SC joint during the game. It was initially reported Ewers would miss six weeks, but after he was on the field during warmups against UTSA, it’s looking evident that Ewers will make a return much sooner than expected. It’s obvious that the Longhorns have two extremely talented guys at the quarterback position, so it will be exciting to watch for the next few years.</p>
            <br /><br /><hr />

            <img src="https://www.nj.com/resizer/EUAt_svBTgm3c_DrYIS0qgB3m7I=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SWTAHYNSPRHXLEWUERJYLVLX6A.jpg" alt="Arch Manning" /><br /><br />
            <p>Alongside Arch Manning is a plethora of talent in the 2023 class. The class contains 11 of the top 247 on 247sports. That 11 includes two top 75 receives for Ewers or Manning to throw too. In what is coach Steve Sarkisians third recruiting class at Texas, it is a positive thing to see the Longhorns that high in the team rankings. This class has filled out well with a good mix of skill positions and linemen. With National Signing Day on February 1st, this class has a lot more time to grab more players who haven’t committed or flip players committed to other schools. A name to look out for is four star wide receiver from Longview, Texas Jalen Hale. Hale is currently the composite ranked 51st player in the nation and is expected to make his commitment on Wednesday, September 20th. Hale has one crystal ball to Texas as of now. Along with the 2023, the 2022 finished 5th in the country. That class has 12 players ranked inside the top 247. The class has already seen two players reach the starting lineup as true freshman. Both on the offensive line, Kelvin Banks has started at left tackle and Cole Hutson at right guard. This is an important position for Texas to hit on in the next few years, especially with the move to the SEC coming soon. Since 2010 Texas has had just two offensive linemen drafted into the NFL. The ‘23 class has five o-linemen in it alone. The two previous classes give Texas a solid ground work to build up their talent before moving to the SEC.</p>
            <br /><br /><hr />

            <img src="https://www.kxan.com/wp-content/uploads/sites/40/2022/08/Bijan-Mustardson-_-Image-1-1.jpg?w=1080" alt="Bijan Mustard" />
            <p style={{ color: '#efefef', fontSize: '12px', fontStyle: 'itatlic' }}> <a href="https://www.kxan.com/sports/bijan-robinsons-new-mustard-available-for-order/">Bijan Mustardson</a> </p><br /><br />
            <p>Something very important that Texas has going for them is their NIL possibilities. The Wall Street Journal ranked Texas number one in terms of total value back in 2018. It’s safe to say Texas has access to a ton of resources. NIL is only going to keep getting bigger and becoming more impactful on which teams are good in the coming years. Texas has already set up some of its players with NIL deals in the short time since it became allowed. Running back Bijon Robinson scored a deal with a Lamborghini dealer in Austin, along with his own style of Dijon Mustard; “Bijon Mustard”. Quinn Ewers landed a deal with popular jeans brand Wranglers and every on scholarship offensive lineman will get $50,000 annually thanks to “The Pancake Factory”, founded by six alumni and supporters of the University of Texas. I can only imagine the deals that will be set up for Arch Manning and the other players in the ‘23 class. Just recently Texas spent $280,000 on a visit weekend for Arch Manning and eight other recruits. That kind of cash, along with the wide variety of NIL opportunities Texas will be able to offer is going to land them some of the top recruits year in and year out. Not to mention the transfers that they will be able to land with the current state of the transfer portal. It has already worked to land 7 transfers last year, including Quinn Ewers and two former Alabama Crimson Tide Agiye Hall and Jahleel Billingsley. I certainly expect Texas to be active in the transfer portal from here on out. I think Texas is on the rise and while the jump to the SEC may take a few years to adjust, Texas may be “back” sooner than we realize.</p>

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

export default Texas;
