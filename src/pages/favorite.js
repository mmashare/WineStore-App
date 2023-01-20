import React from 'react'
import styles from "./favorite.module.css"
import ShowCase from '../components/showCase'
import Navbar from "../components/navbar.js"
const Favorite = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
            <Navbar/>
        </div>
        <div className={styles.mainContainer}>

        </div>
    </div>
  )
}

export default Favorite;