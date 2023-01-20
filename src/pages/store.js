import React, { useEffect, useState } from 'react'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import styles from "./store.module.css";
import Product from "../Db/product.js";
import {Slider} from "@mui/material" ;
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from '@mui/material/Checkbox';
import ShowCase from '../components/showCase';
import {useSelector,useDispatch} from "react-redux";
import {PProduct,PriceRange} from "../redux/productDetector.js"
import Search from "../components/search.js"
// import { makeStyles } from "@material-ui/core/styles";
// ye logic use karege wqebsite me

// const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedRating, setSelectedRating] = useState(null);


//  const applyfilter = ()=>{
 // let UpdateList = dataList;

//  if (selectedRating) {
//   UpdateList = UpdateList.filter((item) => {
//     return parseInt(item.rating)===parseInt(selectedRating);
//   });
// }

// if(selectedCategory){
//   UpdateList=UpdateList.filter((i)=>{
//     return i.category===selectedCategory
//   })


// }


// slider logic
//1 - const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
//  - const minimumPrice = selectedPrice[0]
//   const miximumPrice = selectedPrice[1]
// UpdateList= UpdateList.filter((item)=>item.price >=minimumPrice&&item.price<=miximumPrice )


// useEffect(() => {
 //   applyFilter();
// },[selectedRating,selectedCategory,Cusines,selectedPrice,inputSearch]);


const useStyle = makeStyles({
  root:{
      width:"322px",
      marginLeft:"29px",
      marginRight:"10px",
      marginTop:"25px",
      marginBottom:"10px",
      height:"30px",
      
  },
  thumb:{
      color:"#f3f3f3",
  },
  rail:{
      color:"#AEAEAE",
  },
  track:{
      color:"#177ADD",
  }
})
const Store = () => {
  const [price, setPrice] = useState([18,460]);
  const minimumPrice = price[0];
  const maximumPrice = price[1];
  const [alcohol,setAlcohol] = useState("");
  const [country1,setCountry1] = useState(false);
  const [country2,setCountry2] = useState(false);
  const [country3,setCountry3] = useState(false);
  const [country4,setCountry4] = useState(false);
  const [country5,setCountry5] = useState(false);
  const [country6,setCountry6] = useState(false);
  const [country7,setCountry7] = useState(false);
  const [redWine,setRedwine] = useState(false);
  const [whitewine,setWhiteWine] = useState(false);
  const [champane,setChampane] = useState(false);
  const [rosewine,setRosewine] = useState(false);
  const [sparkingWine,setSparkingWine] = useState(false);
  const [dessertwinez,setDessertwine] = useState(false);
  const [PriceRangeToggle,setPriceRangeToggle] = useState(false)
  const [search,setSearch] = useState("")
  const dispatch = useDispatch();

  const askFor = useSelector((state)=>{
    return state.Product.askFor;
 })

 
 
 const PR = useSelector((state)=>{
  return state.Product.priceRange;
})




 const [updatedProduct,setUpdatedProduct] = useState("")

  const classes = useStyle();


  const handleChange = (event, newValue) => {
    setPrice(newValue);
    dispatch(PriceRange(newValue))
    setPriceRangeToggle(true)
    
  };

  const handleCountry1 = (e,newValue)=>{
    setCountry1(newValue);
    if(newValue===true){
    dispatch(PProduct("FRANCE"));
    }else{
      dispatch(PProduct(""));
    }
  }
  
  const handleCountry2 = (e,newValue)=>{
    setCountry2(newValue);
    if(newValue===true){
      dispatch(PProduct("NEW ZEALAND"));
      }else{
        dispatch(PProduct(""));
      }
  }

  const handleCountry3 = (e,newValue)=>{
    setCountry3(newValue);
    
    if(newValue===true){
      dispatch(PProduct("ITALY"));
      }else{
        dispatch(PProduct(""));
      }
  }

  const handleCountry4 = (e,newValue)=>{
    setCountry4(newValue);
    if(newValue===true){
      dispatch(PProduct("SPAIN"));
      }else{
        dispatch(PProduct(""));
      }
  }

  const handleCountry5 = (e,newValue)=>{
    setCountry5(newValue);

    if(newValue===true){
      dispatch(PProduct("GERMANY"));
      }else{
        dispatch(PProduct(""));
      }
  }

  const handleCountry6 = (e,newValue)=>{
    setCountry6(newValue);

    if(newValue===true){
      dispatch(PProduct("AUSTRALIA"));
      }else{
        dispatch(PProduct(""));
      }
  }

  const handleCountry7 = (e,newValue)=>{
    setCountry7(newValue);

    if(newValue===true){
      dispatch(PProduct("USA"));
      }else{
        dispatch(PProduct(""));
      }
  }

  const handleRedwine = (e,newValue)=>{
    setRedwine(newValue);

    if(newValue===true){
      dispatch(PProduct("Red Wine"));
      }else{
        dispatch(PProduct(""));
      }
  }

  const handleWhitewine = (e,newValue)=>{
    setWhiteWine(newValue);

    if(newValue===true){
      dispatch(PProduct("White Wine"));
      }else{
        dispatch(PProduct(""));
      }
  }

  const handleChampane = (e,newValue)=>{
    setChampane(newValue);

    if(newValue===true){
      dispatch(PProduct("Champagne"));
      }else{
        dispatch(PProduct(""));
      }
  }

  const handleRosewine= (e,newValue)=>{
    setRosewine(newValue);

    if(newValue===true){
      dispatch(PProduct("Rosé Wine"));
      }else{
        dispatch(PProduct(""));
      }
  }

  const handleSparkingwine= (e,newValue)=>{
    setSparkingWine(newValue);

    if(newValue===true){
      dispatch(PProduct("Sparkling Wine"));
      }else{
        dispatch(PProduct(""));
      }
  }

  const handleDessertWine= (e,newValue)=>{
    setDessertwine(newValue);

    if(newValue===true){
      dispatch(PProduct("Dessert Wine"));
      }else{
        dispatch(PProduct(""));
      }
  }

  const handleSearch = (e)=>{
    let valueeee = e.target.value;
    
    setSearch(valueeee)
  }

  useEffect(()=>{
    

    if(askFor === "FRANCE"){
      setUpdatedProduct(Product.filter((item)=>{return item.country === "FRANCE"}))
      
    }
    else if(askFor === "NEW ZEALAND"){
      setUpdatedProduct(Product.filter((item)=>{return item.country === "NEW ZEALAND"}))
      
    }else if(askFor === "ITALY"){
      setUpdatedProduct(Product.filter((item)=>{return item.country === "ITALY"}))
    }else if(askFor === "SPAIN"){
      setUpdatedProduct(Product.filter((item)=>{return item.country === "SPAIN"}))
    }else if(askFor === "GERMANY"){
      setUpdatedProduct(Product.filter((item)=>{return item.country === "GERMANY"}))
    }else if(askFor === "AUSTRALIA"){
      setUpdatedProduct(Product.filter((item)=>{return item.country === "AUSTRALIA"}))
    }else if(askFor === "USA"){
      setUpdatedProduct(Product.filter((item)=>{return item.country === "USA"}))
    }else if(askFor === "Red Wine"){
      setUpdatedProduct(Product.filter((item)=>{return item.category === "Red Wine"}))
    }else if(askFor === "White Wine"){
      setUpdatedProduct(Product.filter((item)=>{return item.category === "White Wine"}))
    }else if(askFor === "Champagne"){
      setUpdatedProduct(Product.filter((item)=>{return item.category === "Champagne"}))
    }else if(askFor === "Rosé Wine"){
      setUpdatedProduct(Product.filter((item)=>{return item.category === "Rosé Wine"}))
    }else if(askFor === "Sparkling Wine"){
      setUpdatedProduct(Product.filter((item)=>{return item.category === "Sparkling Wine"}))
    }else if(askFor === "Dessert Wine"){
      setUpdatedProduct(Product.filter((item)=>{return item.category === "Sparkling Wine"}))
     }else if(PriceRangeToggle === true){
      setUpdatedProduct(Product.filter((item)=>item.price >= PR[0] && item.price <= PR[1]))
    }else if(search.length >= 1){
      setUpdatedProduct(Product.filter((item)=>item.name.toLowerCase().search(search)))
    }
    else{
    setUpdatedProduct(Product);
    }
  },[askFor,PR,search])

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.menuContainer}>
          <div className={styles.pricesliderContainer}>
            <p className={styles.priceHeading}>Price</p>
            <div className={classes.root}>
          <Slider
        value={price}
      
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={461}
        classes={
           { thumb:classes.thumb,
            rail:classes.rail,
            track:classes.track,
}}
      />
      </div>
          </div>
      <div className={styles.countryOptionContainer}>
            <p className={styles.mainHeading}>Country</p>


        <div className={styles.content1}>

        <div className={styles.iconMoverContainer}>
     {/* always know if checkbox checked it automatically return true other it return false */}
            <Checkbox
      checked={country1}
      onChange={handleCountry1}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    </div>

            <p className={styles.france}>France</p>
            
    </div>
        {/* second column */}
    <div className={styles.content2}>

        <div className={styles.iconMoverContainer2}>
            <Checkbox
      checked={country2}
      onChange={handleCountry2}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    </div>

            <p className={styles.newZealand}>NEW ZEALAND</p>
            
    </div>
    {/* third column */}
    <div className={styles.content3}>

        <div className={styles.iconMoverContainer3}>
            <Checkbox
      checked={country3}
      onChange={handleCountry3}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    </div>

            <p className={styles.italy}>ITALY</p>
            
    </div>

    {/* forth column */}
    <div className={styles.content4}>

        <div className={styles.iconMoverContainer4}>
            <Checkbox
      checked={country4}
      onChange={handleCountry4}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    </div>

            <p className={styles.spain}>SPAIN</p>
            
    </div>


    {/* fifth column */}
    <div className={styles.content5}>

        <div className={styles.iconMoverContainer5}>
            <Checkbox
      checked={country5}
      onChange={handleCountry5}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    </div>

            <p className={styles.germany}>GERMANY</p>
            
    </div>

    {/* sixth column */}
    <div className={styles.content6}>

        <div className={styles.iconMoverContainer6}>
            <Checkbox
      checked={country6}
      onChange={handleCountry6}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    </div>

            <p className={styles.australia}>AUSTRALIA</p>
            
    </div>

    {/* seventh column */}
    <div className={styles.content7}>

        <div className={styles.iconMoverContainer7}>
            <Checkbox
      checked={country7}
      onChange={handleCountry7}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    </div>

            <p className={styles.usa}>USA</p>
            
    </div>


          </div>
          <div>
            
            <div className={styles.typesContainer}>

            <p className={styles.mainHeading}>Types</p>

            <div className={styles.contentofsparkingwinz}>

                    <div className={styles.iconMoverContainer}>
                    
                        <Checkbox
                    checked={redWine}
                    onChange={handleRedwine}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </div>

            <p className={styles.redwine}>Red Wine</p>
    
        </div>

        <div className={styles.contentofsparkingwinz}>

                    <div className={styles.iconMoverContainer}>
                    
                        <Checkbox
                    checked={whitewine}
                    onChange={handleWhitewine}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </div>

            <p className={styles.whitewine}>White Wine</p>
    
        </div>


        <div className={styles.contentofsparkingwinz}>

                    <div className={styles.iconMoverContainer}>
                    
                        <Checkbox
                    checked={champane}
                    onChange={handleChampane}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </div>

            <p className={styles.champane}>Champagne</p>
    
        </div>


        <div className={styles.contentofsparkingwinz}>

                    <div className={styles.iconMoverContainer}>
                  
                        <Checkbox
                    checked={rosewine}
                    onChange={handleRosewine}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </div>

            <p className={styles.rosewine}>Rosé Wine</p>
    
        </div>

        <div className={styles.contentofsparkingwinz}>

                    <div className={styles.iconMoverContainer}>
                   
                        <Checkbox
                    checked={sparkingWine}
                    onChange={handleSparkingwine}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </div>

            <p className={styles.sparkingwine}>Sparkling Wine</p>
            
        </div>

        <div className={styles.contentofdessertWinz}>

                    <div className={styles.iconMoverContainer}>
                    
                        <Checkbox
                    checked={dessertwinez}
                    onChange={handleDessertWine}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </div>

            <p className={styles.dessertwinez}>Dessert Wine</p>
           
        </div>

            </div>



          </div>
        </div>
        <div className={styles.showcaseContainer}>
          {/* i amde this search component commented BECAUSE THIS COMPONENT CAN cREATE A ERROR SO IF YOU UPLOAD THIS WEBSITE ON WEB THIS COMPONENT CAN BECOME A PROBLEM */}
        {/* <Search valuee={search} handleSearch={handleSearch}/> */}
          {/* {updatedProduct.length === 0 && (<button className={styles.RefetchButton} onClick={()=>{setUpdatedProduct(Product)}}>Reset</button>)} */}
         {updatedProduct.length >= 2 && updatedProduct.map((a)=>{
          return <ShowCase
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
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  )
}

export default Store;