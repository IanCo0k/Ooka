//This is where all the different articles will be stored
import blog1 from './blog1.png';
import blog2 from './blog2.png';
import blog3 from './blog3.png';
import blog4 from './blog4.png';
import blog5 from './blog5.png';
import blog6 from './blog6.png';
import blog7 from './blog7.png';
import blog8 from './blog8.png';
import blog9 from './blog9.png';
import blog10 from './blog10.png';
import blog11 from './blog11.png';
import blog12 from './blog12.png';
import blog13 from './blog13.png';
import blog14 from './blog14.png';
import chet from './chet.png';

export const blogList = [
  {
    id: 1,
    title: 'Ranking The Top 5 Point Guard\'s In The NBA',
    category: 'NBA',
    subCategory: ['NBA', 'Rankings'],
    description:
      [`The current pool of PG's in the NBA has a great mix of young and veteran talent, and
      the upcoming season promises to have all of that talent on full display. Here are
      the top 5 Floor Generals to look out for as the 2022-2023 season soon begins`,
    `DISCLAIMER: Damian Lillard will not be included due to last year's injury (but he 
      otherwise would be on this list)`,
    `#5: KYRIE IRVING`,
    `With the departure of James Harden to Philly, we can expect Kyrie to resume
    his role as the startin PG in Brooklyn. When Kyrie is available and on the
    floor (which isn't the reality a lot of the time, unfortunately),
    he is a generational type offense talent. Few can score the basketball
    as efficiently and as gracefully as Kyrie Irving. He is a 50/40/90 guy who can
    give you a ridiculously efficient 50 piece on any given night.`,
    `#4: JA MORANT`,
    `Ja Morant finally made his ascension to stardom during the 2022 NBA Season. He
    went from fringe all-star to MVP candidate, and even manage to win MIP, increasing
    his scoring average by 8 PPG and leading the Grizzlies to be one of the top seeds
    in the west. He has an unreal amount of confidence, and is already a proven playoff performer at just
    23.`,
    `#3: TRAE YOUNG`,
    `Trae Young is an offensive juggernaut. He is 23 years old, and has averaged close
    to 30 and 10 in two seperate seasons, which has only been done by 4 other players
    in the history of the NBA. The defensive limitations are there, but let's 
    not act like any other guy on this list is a brick wall on defense either... 
    His offensive contributions more than make up for it. He's a guy that can lead
    you on a deep playoff run as the #1 guy, and the Hawks recent moves to surround
    him with defenders will only help that reality.`,
    `#2: LUKA DONCIC`,
    `Luka Doncic is the definition of a superstar. At the age of 22, Luka already has 3 All-NBA 
    selections to his name, and has posted some of the most absurd averages the league
    has ever seen for people his age. More importantly, Luka has proven to be someone
    that you can rely on to carry you through a playoff series. There's 82 game guys, and then
    there is 16 game guys... Luka is a 16 game guy. He plays at an MVP level all 
    regular season, and still manages to elevate his game come playoff time. He is one
    of the most elite offensive talents the league has ever seen, and he's only going
    into his 5th season.`,
    `#1: Stephen Curry`,
    `Fresh off of his 1st Finals MVP (although he should have 2, maybe even 3...), there is
    no one more deserving of this spot. Steph is the greatest shooter the world has ever 
    seen, and he is the engine behind one of the greatest dynasties in NBA history. Nobody
    single-handedly shifts a defense like Wardell Stephen Curry. He is just as effective
    without the ball as he is with it, and he is just a WINNER.`],
    authorName: 'Ian Cook',
    authorAvatar: 'https://campgeneva.org/wp-content/uploads/2022/06/Cook_Ian.jpg',
    createdAt: 'September 5, 2022',
    cover: blog1,
    authorRole: 'NBA Writer',
    authorBio: ['Rockford, Michigan', 'Central Michigan University', 'Computer Science'],
  },  
  {
    id: 2,
    title: 'Ranking The Top 5 QB Performances Of Week 1',
    category: 'NCAA',
    subCategory: ['NCAA','Rankings'],
    description:
      [`With week one of the college football season in the books, here are the 5 quarterbacks that I felt performed the best. `,
      `5. Daniel Richardson | Central Michigan `,
      `Richardson looked poised against what was one of the best defenses in the country a year ago. OK St returned all of their D-line production that led the nation in sacks last year. Richardson put up great numbers in game one despite of that and led the Chips to a very respectable showing against a tough opponent.`,
      `4. Spencer Sanders | Oklahoma State`,
      `Sanders followed up a great last season with an excellent performance in week one. He was able to get anything he wanted against CMU. He was great through the air and the ground which put the Cowboys out front early and they were able to hold onto their lead.`,
      `3. Stetson Bennett | Georgia `,
      `Bennett looked about as in control of the offense as I have seen in his career. He was the main catalyst for the complete domination of the Ducks. He looked incredibly comfortable all game long, making every throw look easy. Bennett had the perfect start to Georgia’s repeat attempt, throwing for a career high in passing yards in a game. `,
      `2. Drake Maye | North Carolina`,
      `Maye has put up two great games to start the year and he was able to get it done both through the air and on the ground. The Tarheels needed all of Maye’s performance to get the win over App State which is why this game ranks so highly for me. It’s impressive to see him perform this well in his first two games regardless of the opponents.`,
      `1. Anthony Richardson | Florida
      `,
      `This one is pretty easy for me. The one thing Richardson doesn’t have over these other guys is the gaudy passing numbers. Richardson however, made up for it by running for 3 TD’s. He was by far the best player on the field against Utah and it was pretty obvious. He led his team to the most impressive win of the week which puts him over these other guys as well. Richardson could continue to vault himself into to the top 10 of next years NFL Draft with more performances like this. `,],
    authorName: 'Nick Martin',
    authorAvatar: 'https://media-exp1.licdn.com/dms/image/C5603AQF69_iPKLuVGg/profile-displayphoto-shrink_800_800/0/1613173186664?e=1668038400&v=beta&t=rgOs-V8wGMY6_weE6O0zWVgRySLTK0uP4K8Be2YUWJM',
    createdAt: 'September 5, 2022',
    authorBio: ['Rockford, Michigan', 'Central Michigan University', 'Broadcasting'],
    authorRole: 'College Sports Writer',
    cover: blog2,
  },
  {
    id: 3,
    title: 'NFL Season Predictions',
    category: 'NFL',
    description:[`I think Rodgers will have an underwhelming season, but I believe he will still be good enough to win the NFC North. Their one-two punch of Aaron Jones and AJ Dillon is probably the best backfield in the NFL. The Packers will win this division again but let down their fans with another playoff loss.`],
    authorName: 'Jacob Majoor',
    authorAvatar: 'https://media-exp1.licdn.com/dms/image/C5603AQH5jSChfarphg/profile-displayphoto-shrink_800_800/0/1662510225096?e=1668038400&v=beta&t=gXXjX_fRwTVfqvUqeFCQEWDFasj8dOOMt6H9BSOq51g',
    cover: blog3,
    createdAt: 'September 7, 2022'

  },
  {
    id: 4,
    title: 'Winners & Losers of Week 1',
    category: 'NFL',
    description:[`Discussing the winners and losers from week 1`],
    authorName: 'Jared Haverdink',
    authorAvatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQErcwFTWNdQHA/profile-displayphoto-shrink_200_200/0/1613409482439?e=1665619200&v=beta&t=3HsFHoulpCyukzEx35xvKIQSoCXYQeqCxUTnS3GTIGM',
    cover: blog4,
    createdAt: 'September 13, 2022'
  },
  {
    id: 5,
    title: 'Five Takeaways from Week Two of College Football',
    category: 'NCAA',
    description: [`5 biggest takeaways from Week 2 of the 2022-2023 College Football season`],
    authorName: 'Nick Martin',
    authorAvatar: 'https://media-exp1.licdn.com/dms/image/C5603AQF69_iPKLuVGg/profile-displayphoto-shrink_800_800/0/1613173186664?e=1668038400&v=beta&t=rgOs-V8wGMY6_weE6O0zWVgRySLTK0uP4K8Be2YUWJM',
    createdAt: 'September 13, 2022',
    authorBio: ['Rockford, Michigan', 'Central Michigan University', 'Broadcasting'],
    authorRole: 'College Sports Writer',
    cover: blog5,
  },
  {
    id: 6,
    title: 'Ranking the Top Five Backcourts in the NBA for the 2022-2023 NBA Season',
    category: 'NBA',
    description: [`The level of talent in NBA backcourts today is arguably the greatest that the league has ever seen. Here are the top 5 amongst those groups: `],
    authorName: 'Ian Cook',
    authorAvatar: 'https://campgeneva.org/wp-content/uploads/2022/06/Cook_Ian.jpg',
    createdAt: 'September 15, 2022',
    cover: blog6,
    authorRole: 'NBA Writer',
    authorBio: ['Rockford, Michigan', 'Central Michigan University', 'Computer Science'],
  },
  {
    id: 7,
    title: 'Biggest Takeaways From Week Three of College Football',
    category: 'NCAA',
    description: [`Following the conclusion of week 3, let's take a deep dive and see what stood out the most:`],
    authorName: 'Nick Martin',
    authorAvatar: 'https://media-exp1.licdn.com/dms/image/C5603AQF69_iPKLuVGg/profile-displayphoto-shrink_800_800/0/1613173186664?e=1668038400&v=beta&t=rgOs-V8wGMY6_weE6O0zWVgRySLTK0uP4K8Be2YUWJM',
    createdAt: 'September 19, 2022',
    authorBio: ['Rockford, Michigan', 'Central Michigan University', 'Broadcasting'],
    authorRole: 'College Sports Writer',
    cover: blog7,
  },
  {
    id: 8,
    title: 'Will 2023 be the Class That Brings Texas Back?',
    category: 'NCAA',
    description: [`So much has been made about the 2023 recruiting that Texas has assembled thus far. Rightfully so, as the Longhorns currently have the number two class in the country just behind Alabama. The problem for Texas in recent years has been getting the good recruiting classes to translate to wins on the field. I would say the reason they haven’t been able to translate these classes to wins is because of the quarterback position. Since the dominant stretch from ‘04 to ‘09 with Vince Young and Colt McCoy, Texas has had one season with over 10 wins. The Longhorns had some success with Sam Ehlinger, but certainly not up to the standards of the fans of Texas football. The ‘23 class seems to have solved that problem. While rankings don’t translate to success 100 percent of the time, Arch Manning is the highest rated player Texas has landed in a long time. Being the composite number one recruit, Arch has all the projections to be a very good quarterback for Texas. Along with Manning, Texas landed former five-star Quinn Ewers from Ohio State. Ewers like Manning, once had a perfect player rating on 247sports. Ewers was showing his potential against Alabama before suffering a sprained sprained SC joint during the game. It was initially reported Ewers would miss six weeks, but after he was on the field during warmups against UTSA, it’s looking evident that Ewers will make a return much sooner than expected. It’s obvious that the Longhorns have two extremely talented guys at the quarterback position, so it will be exciting to watch for the next few years.`],
    authorName: 'Nick Martin',
    authorAvatar: 'https://media-exp1.licdn.com/dms/image/C5603AQF69_iPKLuVGg/profile-displayphoto-shrink_800_800/0/1613173186664?e=1668038400&v=beta&t=rgOs-V8wGMY6_weE6O0zWVgRySLTK0uP4K8Be2YUWJM',
    createdAt: 'September 19, 2022',
    authorBio: ['Rockford, Michigan', 'Central Michigan University', 'Broadcasting'],
    authorRole: 'College Sports Writer',
    cover: blog8,
  },
  {
    id: 9,
    title: 'Winners & Losers  of Week 2',
    category: 'NFL',
    description: ['Discussing the winners and losers from week 2'],
    authorName: 'Jared Haverdink',
    authorAvatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQErcwFTWNdQHA/profile-displayphoto-shrink_200_200/0/1613409482439?e=1665619200&v=beta&t=3HsFHoulpCyukzEx35xvKIQSoCXYQeqCxUTnS3GTIGM',
    cover: blog9,
    createdAt: 'September 21st, 2022'
  },
  {
    id: 10,
    title: 'Takeaways from Week Four of College Football',
    category: 'NCAA',
    description: [`Following the conclusion of week 4, let's take a deep dive and see what stood out the most:`],
    authorName: 'Nick Martin',
    authorAvatar: 'https://media-exp1.licdn.com/dms/image/C5603AQF69_iPKLuVGg/profile-displayphoto-shrink_800_800/0/1613173186664?e=1668038400&v=beta&t=rgOs-V8wGMY6_weE6O0zWVgRySLTK0uP4K8Be2YUWJM',
    createdAt: 'September 26th, 2022',
    authorBio: ['Rockford, Michigan', 'Central Michigan University', 'Broadcasting'],
    authorRole: 'College Sports Writer',
    cover: blog10,
  },
  {
    id: 11,
    title: 'Biggest Moments From NBA Media Day',
    category: 'NBA',
    description: [`The start of the 2022-2023 NBA Season is upon us. Let's take a look at what stood out the most from media day:`],
    authorName: 'Ian Cook',
    authorAvatar: 'https://campgeneva.org/wp-content/uploads/2022/06/Cook_Ian.jpg',
    createdAt: 'September 28th, 2022',
    cover: blog11,
    authorRole: 'NBA Writer',
    authorBio: ['Rockford, Michigan', 'Central Michigan University', 'Computer Science'],
  },
  {
    id: 12,
    title: 'Winners & Losers of Week 3',
    category: 'NFL',
    description:[`Discussing the winners and losers from week 3`],
    authorName: 'Jared Haverdink',
    authorAvatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQErcwFTWNdQHA/profile-displayphoto-shrink_200_200/0/1613409482439?e=1665619200&v=beta&t=3HsFHoulpCyukzEx35xvKIQSoCXYQeqCxUTnS3GTIGM',
    cover: blog12,
    createdAt: 'September 29th, 2022'
  },
  {
    id: 13,
    title: 'Preseason Power 25 for the ‘22-‘23 College Basketball Season',
    category: 'NCAA',
    description: [`Andy Katz recently released his power 36 for the upcoming college basketball season. It inspired me to release my own preseason power rankings.`],
    authorName: 'Nick Martin',
    authorAvatar: 'https://media-exp1.licdn.com/dms/image/C5603AQF69_iPKLuVGg/profile-displayphoto-shrink_800_800/0/1613173186664?e=1668038400&v=beta&t=rgOs-V8wGMY6_weE6O0zWVgRySLTK0uP4K8Be2YUWJM',
    createdAt: 'September 29th, 2022',
    authorBio: ['Rockford, Michigan', 'Central Michigan University', 'Broadcasting'],
    authorRole: 'College Sports Writer',
    cover: blog13,
  },
  {
    id: 14,
    title: 'MLB Playoffs Predictions/Preview',
    category: 'MLB',
    description: [`With the MLB playoffs starting today, the time has come to preview and predict all of the rounds from the Wild Card leading to the World Series.  Starting today, October 7, the road to the World Series officially starts for 12 teams.  All of these teams have a fresh slate, with only 13 wins required to be crowned World Champions.  Without further fanfare, let’s start in the National League.`],
    authorName: 'Chet Huls',
    createdAt: 'October 7th, 2022',
    authorAvatar: chet,
    cover: blog14,
  }

];
