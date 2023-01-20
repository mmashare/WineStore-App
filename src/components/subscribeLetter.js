import React from 'react'
import styles from "./subscriberLetter.module.css"
import image from "../images/anglewithwine.jpg"
const SubscribeLetter = () => {
  return (


    <div className={styles.container}> 
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <div className={styles.imgcontainer}>
                    <img src={image} alt="dfs" className={styles.imgofwine} height="50px" width="100px"/>
                </div>
                <div className={styles.contentContainer}>
                    <h1 className={styles.heading}>SUBSCRIBE</h1>
                    <input placeholder='Name' className={styles.inputofname}/>
                    <input placeholder='Email' className={styles.inputofemail} />
                    <button className={styles.gobtn}>GO</button>
                </div>
            </div>
        </div>
        </div>
  
    )
}

export default SubscribeLetter;