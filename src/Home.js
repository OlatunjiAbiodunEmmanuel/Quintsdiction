import React from 'react'
import teacher from './gallery/Component 17.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const color1 ={backgroundColor:'#FFCEAE',color:"#EB5D00"}
  const color2 ={backgroundColor:'#EB5D00',color:"white"}
  const [change, setChange] = useState(color2)


  return (
    <div>

    <main className='lg:flex justify-between items-center bg-black pl-4'>
      <div className='words lg:w-[36.25rem]'>
        <span>Everybody</span> <span style={{color:"#EB5D00"}}>talks</span> <span>but only few people</span> <span style={{color:"#EB5D00"}}>speak</span> <span>rightly.</span>
        <div className='qt'>Quints Diction was born out of my passion to see a transformed society through polished speech, public speaking and social polish</div>



          <div className='lg:inline text-center'>
            <Link className='text-base qt2 border-none rounded-full text-center' to ='/'style={change}
            onMouseEnter={()=>{setChange(color1)}} onMouseLeave={()=>{setChange(color2)}}>Learn more</Link>
          </div>

      </div>

          <div className=''>
          <img src={teacher}/>
          </div>
    </main>


    <div className='wrd'>
    We transform <span className='text-[#EB5D00]'>Nervous</span> Speakers into <span className='text-[#EB5D00]'>Confident</span> 
    Speakers and <span className='text-[#EB5D00]'>Mumblers</span> into clear, <span className='text-[#EB5D00]'>interesting</span> speakers.
    </div>

















    </div>
  )
}

export default Home