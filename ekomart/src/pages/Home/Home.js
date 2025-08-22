import React from 'react'
import TopHeader from './Topheader/TopHeader'
import BottomHeader from './Bottomheader/BottomHeader'
import LogoSection from './logo/Logo'
import Navbar from '../../Navbar'
import Minislider from './minislider/Minislider'
import Slider from './slider/Slider'
import Small from './small/Small'
import Discount from './discount/Discount'
import Featuregrocery from './grocery/Featuregrocery'
import Weekenddiscount from './weekend/Weekenddiscount'
import Trending from './trending/Trending'
import Latestblog from './latestblog/Latestblog'
import Bottompage from './bottompage/Bottompage'
import Groceries from './groceries/Groceries'




function Home() {
  return (
    <div>
      <TopHeader></TopHeader>
      <BottomHeader/>
      <LogoSection/>
     <Navbar></Navbar>
     <Slider></Slider>
     <Minislider></Minislider>
     <Small></Small>
     <Groceries/>
     <Discount/>
     <Featuregrocery/>
     <Weekenddiscount/>
     <Trending/>
     <Latestblog/>
     <Bottompage/>
    
    

     
    </div>
  )
}

export default Home
