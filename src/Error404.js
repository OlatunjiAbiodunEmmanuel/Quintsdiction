import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='mt-4'>
        <div className='text-6xl'>Error404</div>

        <div className='text-2xl'>The page is not available <Link className='text-blue-600' style={{ textDecoration:'none'}} to ='/'> go back to homepage</Link></div>
        
    </div>
  )
}

export default Error404