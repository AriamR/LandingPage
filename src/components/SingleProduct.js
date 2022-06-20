import React, {useState, useEffect} from 'react'
import data from "../db.json"
import {Link, useParams} from "react-router-dom"
import Cart from "./Cart"
import { FaUserAlt } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa"
import Image from "../../src/source/logo.png"
import "./sinleProduct.css"

function SingleProduct({isOpen ,setIsOpen}) {

    const [SingleProduct, setSingleProduct] = useState([])
    const {name} = useParams()

    useEffect(() =>{
        const findProduct = () => {
            const newProduct = data.products.find((product) => product.name === name)
            setSingleProduct(newProduct)
        }

        findProduct()
    }, [name])

  return (
    <div className='single-content'>
          <div className='single-cont'>
            <img className="home-image" src={Image} alt="images"/>
            <h3 className="home-icon"><FaUserAlt/></h3>
            <h3 className="home-icon1"><FaShoppingCart/></h3>
          </div>

          <div className='single'>
            <div className='single-content-product'>
              <h1>{name} </h1>
              <p className='single-content-p'>{SingleProduct.desc} </p>

              <div className='single-content-buton'>
                <button  className='single-buton' onClick={() => setIsOpen(true)}> Add to Cart</button>
                <Link to="/product"> &larr; Back to Products</Link> 
                              
                </div>
                </div>
         

              <div>
                <img  className="image-single" src={SingleProduct.large} alt=""/>
              </div>
          
          </div>
          
         
          {isOpen && <Cart setIsOpen={setIsOpen}/>}
    </div>


  )
}

export default SingleProduct