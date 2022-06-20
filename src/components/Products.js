import {useState} from 'react'
import data from "../db.json"
import {Link} from "react-router-dom"
import "./products.css"
import Cart from "./Cart"
import { FaUserAlt } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import Image from "../../src/source/logo.png"


function Products({isOpen,setIsOpen}) {
    const [items] = useState(data)
 
  return (   
    <div>
        <div className='home-product'>
            <img className="home-image1" src={Image} alt="images"/>
            <nav>
                <ul className='nav-product'>
                    <li className='li-product'>Women</li>
                    <li className='li-product'>Men</li>
                    <li className='li-product'>Boys</li>
                    <li className='li-product'>Skateboaring</li>
                </ul>
            </nav>

            <div>
                <h3 className="home-icon12"><FaUserAlt/></h3>
                <Link to="/"className="home-icon13"> <AiFillHome/></Link>
            </div>
        </div>

         <div className='products'>
            {items.products.map(({id,name,desc,small,large}) => (
                <article key={id} className="article-products">
                    <div>
                        <picture>
                            <source media="(min-width:768px)" srcSet={large} />
                                <img className="image-product" src={small} alt={name}/>
                        </picture>
                    </div>

                    <div>
                        <h2>{name}</h2>
                        
                        <div>
                            <Link to={`/${name}`} className="link-product">More Details</Link> 
                            <button className="buton-product" onClick={() => setIsOpen(true)}> Add to Cart</button>
                        </div>
                    </div>
                </article>
            
            ))}
        </div>
        
        <div className='footer'>
            <h3>Made By Maira Rodriguez</h3>
        </div>

        {isOpen && <Cart setIsOpen={setIsOpen}/>}
    </div>
   
  )
}

export default Products