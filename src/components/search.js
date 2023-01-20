import React from 'react'
import styles from "./search.module.css"
const Search = ({valuee,handleSearch}) => {
  return (
    <div className={styles.container}>
        
                <input value={valuee} onChange={handleSearch} className={styles.inputt} placeholder="Search Here" type="search"/>
           
    </div>
  )
}

export default Search;