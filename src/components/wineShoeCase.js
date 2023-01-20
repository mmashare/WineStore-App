import React, { useEffect, useState } from 'react';
import styles from "./wineShowCase.module.css";
import {AiOutlineHeart} from "react-icons/ai";
const WineShoeCase = ({id,name,country,category,alcohol,img,price,forbutton}) => {
    const [colorr,setColorr] = useState("");
    useEffect(()=>{
        setColorr(()=>{
            if(category=== "Red Wine"){
                    return "red"
            }else if(category === "White Wine"){
                    return "white"
            }else if(category === "Rosé Wine"){
                    return "red"
            }else if(category === "Sparkling Wine"){
                return "#a1a1aa"
        }else{
            return "#fdba74"
        }
          })
        

    },[category])
  
  console.log(colorr)
  return (
    <div className={styles.container}>
           <div className={styles.wrapper}>
                    <div className={styles.ratingBarContainer}>
                        <div className={styles.containerofbar}>
                        <span style={{backgroundColor:`${colorr}`}} className={styles.bar} ></span>
                        </div>
                            <p className={styles.percentage}>{alcohol}%</p>
                            <span className={styles.likeicon}>
                            <AiOutlineHeart className={styles.likeiconssssss}/>
                            </span>
                    </div>
                    
                    <div className={styles.imageContainer}>
                        <img src={img} className={styles.realImage}/>
                    </div>
                    <div className={styles.titlecontainer}>
                        <h3>{name}</h3>
                    </div>
                    <div className={styles.contryContainer}>
                        {country}
                    </div>
                    <div className={styles.priceAndCatIconContainer}>
                        <h4 className={styles.price}>${price}</h4>
                        <button className={styles.addtocart}>CART</button>
                    </div>
                    
            </div>
    </div>
  )
}

export default WineShoeCase;