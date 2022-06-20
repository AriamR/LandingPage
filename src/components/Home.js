import React from 'react'
import Image from "../../src/source/logo.png"
import Images from "../../src/source/image1.jpg"
import Images1 from "../../src/source/image2.jpg"
import {Link} from "react-router-dom"
import { FaUserAlt } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa"

import "./home.css"
function Home() {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <img className="home-image" src={Image} alt="images"/>
        <h3 className="home-icon"><FaUserAlt/></h3>
        <h3 className="home-icon1"><FaShoppingCart/></h3>
      </div>
      <div>
        <img  className="home-image-top" src={Images}></img>
        <img  className="home-image-bottom" src={Images1}></img>
      </div>
      <div className='home-title'>
        <h1 className="home-title-p">Vans Classic</h1>
        <h4 className='home-title-h'>Old Skool</h4>
        <Link to="/product" className="home-link"> What is the style? &rarr;</Link> 
      </div>

    </div>
  )
}

export default Home