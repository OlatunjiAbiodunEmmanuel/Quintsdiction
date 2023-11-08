import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./gallery/image 1.jpg"
import Drp from './Drp'
import { useState } from 'react'

const Navbar = () => {
  let orangeColor={
    backgroundColor:"#EB5D00"
  }
  const color1 ={backgroundColor:'#FFCEAE',color:"#EB5D00"}
  const color2 ={backgroundColor:'#EB5D00',color:"white"}
  const [change, setChange] = useState(color2)

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  return (

    <div className=''>
      <div  className='flex justify-around lg:justify-end items-center p-3'style={orangeColor}>
         <div style={{marginRight:"2.2rem",color:"white"}}><i class="fa-regular fa-envelope pr-2"style={{color: "#fafcff"}}></i>info@quintsdiction.com</div> 
      <div style={{marginRight:"7.5rem",color:"white"}}><i class="fa-solid fa-phone pr-2"style={{color: "#fafcff"}}></i>info@quintsdiction.com</div>
      </div>

    <div style={{backgroundColor:"#21251F"}}  className='flex justify-between lg:justify-around items-center p-2'>
      <div>
        <img src={logo}/>
      </div>

        <div className='hidden   lg:flex justify-around items-center'>

          <div className='mr-6 border-none border-b-4 border-[#FFCEAE] hover:border-solid'><Link  style={{color:'white', textDecoration:'none'}} to ='/'>Home</Link></div>
          <div className="relative group ">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none border-none border-b-4 border-[#FFCEAE] hover:border-solid mr-6"
          >
            About us<i class="fa-solid fa-chevron-down ml-3"style={{color:"#e6e6e6"}}></i>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-[#EB5D00] border-none border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-black cursor-pointer"><Link  style={{color:'white'}} to ='/Contact'>About quints</Link></li>
                <li className="px-4 py-2 hover:bg-black cursor-pointer"><Link  style={{color:'white'}} to ='/Contact'>About lead coach</Link></li>
              </ul>
            </div>
          )}
        </div>


        <div className="relative group ">
          <button
            onClick={toggleDropdown1}
            className="text-white focus:outline-none border-none border-b-4 border-[#FFCEAE] hover:border-solid mr-6"
          >
            Service<i class="fa-solid fa-chevron-down ml-3"style={{color:"#e6e6e6"}}></i>
          </button>
          {isOpen1 && (
            <div className="absolute right-0 mt-2 w-44 bg-[#EB5D00] border-none border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-black cursor-pointer"><Link  style={{color:'white'}} to ='/Contact'>1</Link></li>
                <li className="px-4 py-2 hover:bg-black cursor-pointer"><Link  style={{color:'white'}} to ='/Contact'>2</Link></li>
                <li className="px-4 py-2 hover:bg-black cursor-pointer"><Link  style={{color:'white'}} to ='/Contact'>2</Link></li>
                <li className="px-4 py-2 hover:bg-black cursor-pointer"><Link  style={{color:'white'}} to ='/Contact'>2</Link></li>
                <li className="px-4 py-2 hover:bg-black cursor-pointer"><Link  style={{color:'white'}} to ='/Contact'>2</Link></li>
                <li className="px-4 py-2 hover:bg-black cursor-pointer"><Link  style={{color:'white'}} to ='/Contact'>2</Link></li>
                <li className="px-4 py-2 hover:bg-black cursor-pointer"><Link  style={{color:'white'}} to ='/Contact'>2</Link></li>
                <li className="px-4 py-2 hover:bg-black cursor-pointer"><Link  style={{color:'white'}} to ='/Contact'>2</Link></li>
                <li className="px-4 py-2 hover:bg-black cursor-pointer"><Link  style={{color:'white'}} to ='/Contact'>2</Link></li>
                <li className="px-4 py-2 hover:bg-black cursor-pointer"><Link  style={{color:'white'}} to ='/Contact'>2</Link></li>
              </ul>
            </div>
          )}
        </div>
         
          {/* <div className='mr-6 border-none border-b-4 border-[#FFCEAE] hover:border-solid'><Link  style={{color:'white'}} to ='/Contact'>Services</Link></div> */}
          <div className='mr-6 border-none border-b-4 border-[#FFCEAE] hover:border-solid'><Link  style={{color:'white'}} to ='/Support'>Books</Link></div>
          <div className='mr-6 border-none border-b-4 border-[#FFCEAE] hover:border-solid'><Link  style={{color:'white'}} to ='/About'>Blog</Link></div>
          <div className='mr-6 border-none border-b-4 border-[#FFCEAE] hover:border-solid'><Link  style={{color:'white'}} to ='/Contact'>Gallery</Link></div>
          <div className='mr-6 border-none border-b-4 border-[#FFCEAE] hover:border-solid'><Link  style={{color:'white'}} to ='/Support'>Contact us</Link></div>
                
        </div>

          <div className='hidden lg:inline text-center'>
            <Link className='text-base syt2 border-none rounded-full text-center' to ='/Support'style={change}
            onMouseEnter={()=>{setChange(color1)}} onMouseLeave={()=>{setChange(color2)}}>Upcoming Training</Link>
          </div>

      <div className='lg:hidden'><i class="fa-solid fa-2xl fa-bars" style={{color:"white"}}></i></div>
    </div>
    
    </div>
  )
}

export default Navbar