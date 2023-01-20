import React from 'react'
import styles from "./about.module.css"
import Navbar from "../components/navbar.js"
import Footer from '../components/footer';
import image7 from "../images/imsge7.jpg"
const About = () => {
  return (
    <div className={styles.container}>
      
        
        <div className={styles.navbarContainer}>
         <Navbar />
          </div>
        
        <div className={styles.contentContainer}>
        
          <div className={styles.semicontainer}>
           <h2 className={styles.title}>About Winez</h2>
           <img src={image7} className={styles.imges}/>
           <p className={styles.para1}>The business was launched in 2014 by David Whelehan in the flagship wine warehouse store location of the Silver Tassie in South Dublin. David has been submerged in the world of wine for over 40 years, tutored by his father ‘TP’ who majored in the wine industry, and was the first Irish Times Wine correspondent. He contributed to the Irish Times weekly for 25 years, and wrote the book ‘Irish Wines of Bordeaux”.

           </p>
           <p className={styles.para2}>David learned the rudiments of wine tasting at an early age and has worked in wineries in the Napa Valley, California and judged at major wine competitions in Ireland, England, Italy and Japan. He has completed the WSET Diploma, as well as the first year of the Masters in Wine and continues to fine tune his palate daily!  He has built up a great team of knowledgeable and enthusiastic wine professionals to support him and they collectively add another 40 years of wine experience and excellence into the company.  With their help he has built up one of the most exciting and largest wine offerings in Ireland.

           </p>
           <p className={styles.para3}>
 The business was launched in 2014 by David Whelehan in the flagship wine warehouse store location of the Silver Tassie in South Dublin. David has been submerged in the world of wine for over 40 years, tutored by his father ‘TP’ who majored in the wine industry, and was the first Irish Times Wine correspondent. He contributed to the Irish Times weekly for 25 years, and wrote the book ‘Irish Wines of Bordeaux”.
 
 David learned the rudiments of wine tasting at an early age and has worked in wineries in the Napa Valley, California and judged at major wine competitions in Ireland, England, Italy and Japan. He has completed the WSET Diploma, as well as the first year of the Masters in Wine and continues to fine tune his palate daily!  He has built up a great team of knowledgeable and enthusiastic wine professionals to support him and they collectively add another 40 years of wine experience and excellence into the company.  With their help he has built up one of the most exciting and largest wine offerings in Ireland.
 
 We ship 80% of the wines we offer in our wine store directly from the vineyards.  Drawing on the company's intergenerational wine expertise and contacts we are expert in finding the most exciting wineries and on shipping their wines exclusively into Ireland. This expertise ensures we have a unique and acclaimed product range offering exceptional value as there is no wholesaler taking their share. 
 
 The team complements their direct imports with wines from the specialist local wholesalers which ensures their offering is as exciting and as complete as possible. Our tagline is ‘Great Wines, Great Taste’ and we take great service as a given and delight in going the extra mile. We are thrilled to advise on wines to match a certain dish, to help with that special wine gift or to simply help you find some thrilling new and exciting wines.
 </p>
         <div className={styles.sendEmailContainer}>
          <h2 className={styles.headingContactUS}>Contact us</h2>
          <p className={styles.emaill}>Email: support@winezgmail.com </p>

          </div>   
        <div className={styles.firstinputContainer}>
          <h1 className={styles.headingMEssage}>Leave Us A Message Below</h1>
              <input src="" className={styles.inputOne} placeholder="Name"/>
              <input src="" className={styles.secondOne} placeholder="Email"/>
           </div>

            <div className={styles.secondinputContainer}>
          
            <textarea name="Message" rows="0" cols="0"  placeholder="Message" className={styles.thirdinput}></textarea>
            
            </div>
            </div>
            
            </div>
        
          
        
        <div className={styles.footerContainer}>
          <Footer/>
          </div>
      
    </div>
  )
}

export default About;