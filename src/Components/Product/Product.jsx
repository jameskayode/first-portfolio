import React from 'react'
import './Product.css'
//import newElam from "../../img/new elam.png"
import Free from "../../img/free.jpg"
import Kalu from "../../img/kalu.png"
import biz from "../../img/biz.png"
import et from "../../img/et.png"

const Product = () => {
  return (
    
    <div className="grid-image">
    <img src={Free} alt="" className="images" />
    <img src={Kalu} alt="" className="images" />
    <img src={biz} alt="" className="images" />
    <img src={et} alt="" className="images" />
    
    </div>
   

  )
}

export default Product