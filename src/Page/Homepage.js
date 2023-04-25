import React from 'react';
import Banner from '../components/Banner';
import Catgory from '../components/Catgory';
import Top10 from '../components/Top10';
import Slide from '../components/Slide';
import P1 from "../images/p2.jpg";
import P2 from "../images/p3.jpg";
import P3 from "../images/p4.jpg";
import P4 from "../images/p5.jpg";
import P5 from "../images/p6.jpg";
import P6 from "../images/p8.jpg";
import P7 from "../images/p9.jpg";
import P8 from "../images/p10.jpg";
import P9 from "../images/p11.jpg";
const Homepage = () => {

  let Photo = [
    { img: P1, name: "景點1", dollar: " 60,001" },
    { img: P2, name: "景點2", dollar: " 60,002" },
    { img: P3, name: "景點3", dollar: " 60,003" },
    { img: P4, name: "景點4", dollar: " 60,004" },
    { img: P5, name: "景點5", dollar: " 60,005" },
    { img: P6, name: "景點6", dollar: " 60,006" },
    { img: P7, name: "景點7", dollar: " 60,007" },
    { img: P8, name: "景點8", dollar: " 60,008" },
    { img: P9, name: "景點9", dollar: " 60,009" },
  ];
  let title = [
    { name: "熱門打卡景點" },
    { name: "最新優惠景點" },
  ]
  return (
    <div>
      <Banner />
      <Catgory />
      <Top10 Photo={Photo} />
      <Slide Photo={Photo} title={title[0].name} />
      <Slide Photo={Photo} title={title[1].name} />
    </div>
  )
}

export default Homepage