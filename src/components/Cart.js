import React, {useState} from 'react'
import data from "../db.json"
import "./cart.css"
function Cart({setIsOpen}) {

    const [items] = useState(data)
  return (
    <aside className='aside-cart'>
        <div className='content-cart'>
          <h2>You cart</h2>
          <button onClick={() => setIsOpen(false)} className='butons-cart'>Close</button>
        </div>
     
          {items.products.map(({id,name,desc,small,large}) =>(
          <article key={id} className="article-cart">
            <div className='art-cart'>
              <img className="images-cart" src={small} alt={name}/>
              <h3 className='lyric-cart'>{name}</h3>
            </div>
              <button className='buton-cart'>Delete</button>
          </article>
   
          ))}
         <button className='buton-cart'>Clear cart</button>
    </aside>
  )
}

export default Cart