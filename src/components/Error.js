import React from 'react'
import {Link} from "react-router-dom"

function Error() {
  return (
    <div>
        <h1>Error <span> The page you are looking for does not exist</span></h1>
        <Link to="/product" className="bg-white"> &larr; Back to homepage</Link> 
    </div>
  )
}

export default Error