import React, { useEffect, useState } from 'react';
import styles from "./home.module.css";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../images/newimage1.png";
import image2 from "../images/newimage2.png";
import image3 from "../images/newimage3.png";
import image4 from "../images/newimage4.png"
import Faq from "../components/faq.js"
import SubscribeLetter from '../components/subscribeLetter';
import {Link} from "react-router-dom"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Product from "../Db/product.js";
import WineShoeCase from "../components/wineShoeCase.js"

// 0-navbar ,1 -home page,2- show differnt type of wine only 4 with shop more button,3- faq section with 5-6 question,3 no alcohol wine,4 - subscriber letter page,footer page  
const Home = () => {
  const [ExpensiveWine,setExpensiveWine] = useState([]);
  const [noAlcoholWIne,setNoAlcoholWine] = useState([]);
  useEffect(()=>{
    setExpensiveWine(Product.filter((p)=>{
      return p.price  >= 300;
    }));
    setNoAlcoholWine(Product.filter((p)=>{
      return p.category === "No Alcohol"
    }))
  },[Product])
   
  console.log(ExpensiveWine)
  console.log(noAlcoholWIne)
  return (
    <div className={styles.conatiner}>
        <div className={styles.nav}>
            <Navbar/>
        </div>
        <div className={styles.slidercase}>
        <div className={styles.sldr}>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className={styles.mySwiper}
      >

        <SwiperSlide className={styles.sld1}>
          <img src={image1} alt="gh" height="760px" width="1800px" className={styles.image1}/>
        </SwiperSlide>


        <SwiperSlide className={styles.sld2}>
        <img src={image2} alt="gh" height="760px" width="1800px" className={styles.image2}/>
        
        </SwiperSlide>



        <SwiperSlide className={styles.sld3}>
        <img src={image3}  alt="gh" height="760px" width="1800px" className={styles.image1}/>
        </SwiperSlide>

        <SwiperSlide className={styles.sld3}>
        <img src={image4}  alt="gh" height="760px" width="1800px" className={styles.image1}/>
        </SwiperSlide>

        
      </Swiper>
    </div>
        </div>

        <div className={styles.showcaseofwine}>
         
         { ExpensiveWine.length >=2   && ExpensiveWine.slice(0,4).map((a)=>{
            return  (
            <WineShoeCase 
            key={a.id}
            name={a.name}
            country={a.country}
            category={a.category}
            alcohol={a.alcohol}
            img={a.img}
            price={a.price}
            />)
         })}
         <div className={styles.showmorebtn}>
         <div className={styles.wrapperofshowmorebtn}>
          <h2 className={styles.headingOfWine}>More Expensive Wine</h2>
          <Link to="/store"><button className={styles.watchmorebtn}>WATCH MORE</button></Link>
         </div>
         </div>
        
       
        </div>


        <div className={styles.faqsection}>
        <Faq/>
        </div>
        <div className={styles.noAlcoholWine}>
          <div className={styles.noAlcoholWineTitleContainer}>
          <h2  className={styles.noAlcoholWineTitle}>NO ALCOHOL WINE</h2>
          </div>
          <div className={styles.noalcol}>
         { noAlcoholWIne.length >=2 && noAlcoholWIne.map((a)=>{
          return <WineShoeCase
          key={a.id}
          name={a.name}
          country={a.country}
          alcohol={a.alcohol}
          img={a.img}
          price={a.price}
          forbutton={true}
          />
         })}
         </div>
        </div>
        <div className={styles.subscriberLetter}>
          <SubscribeLetter/>
        </div>
        <div className={styles.footer}>
            <Footer/>
        </div>
    </div>
  )
}

export default Home;