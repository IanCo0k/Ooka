import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import '../Top5QBweek1/styles.css';
import { Link } from 'react-router-dom';

const Top5QBweek1 = () => {

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
              {blogList[1].title}
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>Published on {blogList[1].createdAt}</p>
            <h1>{blogList[1].title}</h1>
            <div className='blog-subCategory'>
                <div>
                <Chip label={blogList[1].subCategory[0]}/>
                </div>
                <div>
                <Chip label={blogList[1].subCategory[1]}/>
                </div>
            </div>
          </header>
          <img src={blogList[1].cover} alt='cover' />
          <p className='blog-desc'>

          With week one of the college football season in the books, here are the 5 quarterbacks that I felt performed the best. <br /><br />

          <h2>5. Daniel Richardson | Central Michigan</h2> <br /><br />
          <img src="https://dbukjj6eu5tsf.cloudfront.net/cmuchippewas.com/images/2021/10/25/Daniel_RichardsonB.JPG" alt="Drich" /><br /><br />

          Richardson looked poised against what was one of the best defenses in the country a year ago. OK St returned all of their D-line production that led the nation in sacks last year. Richardson put up great numbers in game one despite of that and led the Chips to a very respectable showing against a tough opponent. <br /><br />

          <h2>4. Spencer Sanders | Oklahoma State</h2> <br /><br />
          <img src="https://pistolsfiringblog.com/wp-content/uploads/2020/09/Brian-Bahr-Spencer_Sanders_OSU-WVA_2020-09-26-1-scaled.jpg" alt="Sandy" /><br /><br />

          Sanders followed up a great last season with an excellent performance in week one. He was able to get anything he wanted against CMU. He was great through the air and the ground which put the Cowboys out front early and they were able to hold onto their lead. <br /><br />

          <h2>3. Stetson Bennett | Georgia</h2> <br /><br />
          <img src="https://sportshub.cbsistatic.com/i/r/2022/07/20/b189a27c-a9f9-46df-9a25-65f90dd12e0c/thumbnail/1200x675/0829434129e72621a6432de9cef0eb2b/stetson-bennett.jpg" alt="Stetson" /><br /><br />

          Bennett looked about as in control of the offense as I have seen in his career. He was the main catalyst for the complete domination of the Ducks. He looked incredibly comfortable all game long, making every throw look easy. Bennett had the perfect start to Georgia’s repeat attempt, throwing for a career high in passing yards in a game. <br /><br />

          <h2>2. Drake Maye | North Carolina</h2> <br /><br />
          <img src="https://keepingitheel.com/wp-content/uploads/getty-images/2018/08/1342308431.jpeg" alt="Drake" /><br /><br />

          Maye has put up two great games to start the year and he was able to get it done both through the air and on the ground. The Tarheels needed all of Maye’s performance to get the win over App State which is why this game ranks so highly for me. It’s impressive to see him perform this well in his first two games regardless of the opponents. <br /><br />

          <h2>1. Anthony Richardson | Florida</h2> <br /><br />
          <img src="https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/gatorzone.com/images/2022/2/25/Richardson_Anthony__211016_0927_IsabellaMarley.jpg" alt="Tony" /><br /><br />

          This one is pretty easy for me. The one thing Richardson doesn’t have over these other guys is the gaudy passing numbers. Richardson however, made up for it by running for 3 TD’s. He was by far the best player on the field against Utah and it was pretty obvious. He led his team to the most impressive win of the week which puts him over these other guys as well. Richardson could continue to vault himself into to the top 10 of next years NFL Draft with more performances like this. <br /><br />

          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'>{blogList[1].authorName}</h1>
            <p className='blog-date'>{blogList[1].authorRole}</p>
            <img className='footer-img' src={blogList[1].authorAvatar} alt="Author Picture"/>
            <h1 style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0 auto', textAlign: 'center', padding: '1rem'}}>
                Rockford, Michigan <br /><br /> Central Michigan University <br /><br /> Broadcasting
            </h1>
        </div>
        </>
      ) 
    </>
  );
};

export default Top5QBweek1;
