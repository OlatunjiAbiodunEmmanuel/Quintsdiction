import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
        <h1>Error404</h1>

        <h5>The page is not available <Link  style={{ textDecoration:'none'}} to ='/'> go back to homepage</Link></h5>
        
    </div>
  )
}

export default Error404