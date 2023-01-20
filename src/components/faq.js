import React, { useState } from 'react'
import styles from "./faq.module.css";
import {BsArrowDownRight, BsFillSdCardFill} from 'react-icons/bs' // side arrow
import {BsArrowDown} from 'react-icons/bs' // down arraow
import { useSelector,useDispatch } from 'react-redux';
import {changeToggle1,changeToggle2,changeToggle3} from "../redux/arrowSlice.js"
const Faq = () => {

    const [toggle1,setToggle1] = useState(false);
    const [toggle2,setToggle2] = useState(false);
    const [toggle3,setToggle3] = useState(false);
    const dispatch = useDispatch();

    const toogle1 = useSelector((state)=>{
       return state.arrows.toogle1;
    })

    console.log(toogle1);

    const toogle2 = useSelector((state)=>{
        return state.arrows.toogle2;
     })
 
     console.log(toogle2);
     
     const toogle3 = useSelector((state)=>{
        return state.arrows.toogle3;
     })
 
     console.log(toogle3);
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.faqTitle}>
                <h1 className={styles.faq}>FAQ SECTION</h1>
            </div>



            <div className={toggle1?styles.faqsection:styles.faqsectionclose}>
                <h2 className={styles.Question}>Do you provide a  Wedding Wines service?<button className={styles.arrowcontainer} onClick={()=>{setToggle1(!toggle1);dispatch(changeToggle1(!toogle1))}}>{toogle1?<BsArrowDown className={styles.arrows}/>:<BsArrowDownRight className={styles.arrows}/>}</button></h2>
                <p className={toggle1?styles.faqAnswer:styles.nofaqAnswer1}>Yes of course. We would be delighted to help you with your Wedding day. Whether it's Champagne, Prosecco or Crémant de Loire for your toast, or white and red wines for your wedding menu, we can provide you with the best food and wine pairing options.</p>
            </div>




            <div className={toggle2?styles.faqsection1:styles.faqsectionclose1}>
                <h2 className={styles.Question}>Can I hire wine glasses if I'm having a party? <button className={styles.arrowcontainer1} onClick={()=>{setToggle2(!toggle2);dispatch(changeToggle2(!toogle2))}}>{toogle2?<BsArrowDown className={styles.arrows1}/>:<BsArrowDownRight className={styles.arrows1}/>}</button></h2>
                <p className={toggle2?styles.faqAnswer1:styles.nofaqAnswer2}>Absolutely. With any party wines order of 24+ bottles, we will happily supply glasses for you, FOC, with a €5 charge per broken glass.  Please note; Glasses must be collected from the Wine Store and returned in person. We also clean the glasses afterwards so you don't have to!

</p>
            </div>
            <div className={toggle3?styles.faqsection2:styles.faqsectionclose3}>
                <h2 className={styles.Question}>Do you provide a Sale or Return service? <button className={styles.arrowcontainer2} onClick={()=>{setToggle3(!toggle3);dispatch(changeToggle3(!toogle3))}}>{toogle3?<BsArrowDown className={styles.arrows2}/>:<BsArrowDownRight className={styles.arrows2}/>}</button></h2>
                <p className={toggle3?styles.faqAnswer2:styles.nofaqAnswer3}>No problem. If you have surplus, unopened, wines after your event, you can return them to the Wine Store and receive a refund for same. Please ensure you hold on to your receipt!</p>
            </div>
            

        </div>
    </div>
  )
}

export default Faq;