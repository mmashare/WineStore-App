import React from 'react';
import image1 from "../images/robertMondavi.png";
import image2 from "../images/gallo-family.png";
import image3 from "../images/anglewithwine.jpg";
import image4 from "../images/beringer.jpg"
import Logo from "../images/logoforweb.png"
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <div className={styles.contentContainer}>
        <div className={styles.semicontentcontainer}>
        
        <div className={styles.divv1}>
        <h3 className={styles.para1}>Store Hours</h3>
        <p className={styles.para2}>Mon-Sun : 9AM to 9PM</p>
        </div >

        <div className={styles.divv2}>
        <h3 className={styles.heading2}>Phone</h3>
        <p className={styles.para3}>020 8434 7192</p>
        </div>

        <div className={styles.divv3}>
        <h3 className={styles.address}>Address</h3>
        <p className={styles.para4}>Niddry Lodge,51,Holland Street,London,W8 7JB</p>
        </div>

        </div>
        <div className={styles.semiproductContainer}>
        <h2 className={styles.heading3}>Our Partners</h2>
        <img src={image1} atl="jj" className={styles.prod1}/>
        
        <img src={image4} alt="jk" height="50px" width="50px" className={styles.prod4}/> 
      
      </div>

      </div>

     

      <div className={styles.logoContaienr}>
        {/* logo */}
        <img src={Logo} alt="logo" className={styles.logos} />
        {/* description */}
        <p className={styles.para5}>@Copyright 2023 - The Winez Ltd. All Right Reserved</p>
      </div>
      </div>
      
    </div>
  )
}

export default Footer;