import React, { useState } from 'react'
import styles from "../components/navbar.module.css";
import {BiSearch} from 'react-icons/bi';
import {BiUser} from "react-icons/bi";
import {RiShoppingBasketLine} from "react-icons/ri";
import {FiMenu} from "react-icons/fi";
import {GrClose} from "react-icons/gr";
import Logo from '../images/logoforweb.png';
import {Link} from "react-router-dom"
const Navbar = () => {
    const [open,setOpen] = useState(false);
  // logo  {Home,store,about} icon{favorite-icon,cat icon,user info icon,search icon button}
  return (
    <div className={open?styles.Mcontainer:styles.container}>
      <div className={open?styles.mWrapper:styles.wrapper}>

      <div className={open?styles.MnabBtn:styles.nabBTn}>
          <button className={open?styles.MopenBtn:styles.OpenBtn} onClick={()=>{setOpen(!open)}}>{open? <GrClose className={styles.closeMenu}/>:<FiMenu className={styles.openMenu}/>}</button>
        </div>


        <div className={open?styles.Mlogocontainer:styles.logocontainer}>
          <Link to="/"><img src={Logo} className={open?styles.Mlogo:styles.logo}/></Link>
          {/* <h1 className={styles.logo}>WINE-STORE</h1> */}
        </div>

        


        <div className={open?styles.Mpagesection:styles.pagesection}>
       <Link to="/" style={{textDecoration:"none",color:"inherit"}}> <p className={open?styles.Mhome:styles.home}>Home</p></Link>
       <Link to="/store" style={{textDecoration:"none",color:"inherit"}}><p className={open?styles.Mstore:styles.store}>Store</p></Link>
        {/* <p className={styles.pcollection}>Favorite</p> */}
        <Link to="/about" style={{textDecoration:"none",color:"inherit"}}><p className={open?styles.Mabout:styles.about}>About Us</p></Link>
        
        </div>

        <div className={open?styles.Mbuttonsection:styles.buttonsection}>
          <div className={open?styles.MsearchSection:styles.searchSection}>
          <BiSearch/>
          </div>

          <div className={open?styles.Mcartsection:styles.cartsection}>
            <RiShoppingBasketLine/>
          </div>

          <div className={open?styles.Musersection:styles.usersection}>
          <BiUser/>
          </div>
        </div>

        </div>
         </div>
  )
}

export default Navbar