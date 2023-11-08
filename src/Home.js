import React from 'react'
import teacher from './gallery/Component 17.jpg'
import { useState } from 'react'
import teacher2 from './gallery/image 7.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  const color1 ={backgroundColor:'#FFCEAE',color:"#EB5D00"}
  const color2 ={backgroundColor:'#EB5D00',color:"white"}
  const [change, setChange] = useState(color2)

  const [change1, setChange1] = useState(color2)


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

    <div className='wrd py-8'>
    We transform <span className='text-[#EB5D00]'>Nervous</span> Speakers into <span className='text-[#EB5D00]'>Confident </span> 
    Speakers and <span className='text-[#EB5D00]'>Mumblers</span> into clear, <span className='text-[#EB5D00]'>interesting</span> speakers.
    </div>



    <div className='pt-12 lg:flex justify-around items-center ps-4'>

      <div className='lg:w-[36.25rem]'>
          <div className='sed lg:w-[36.25rem]'>
              You are perceived in three major ways: What you say, how you say what you say and how you appear.
          </div>
          <div className='sed1 mb-8'>
            Today, good diction is on the decline. We are a nation of people who mumble, speak too quickly, or are generally
           too lazy to make the effort to speak clearly. <br></br> <br></br> We are committed to helping our clients improve their verbal 
           communication skills. We provide customised diction coaching fully suited to our clients’ time schedule, 
           personal motivation and preferred learning style. We work with schools, individuals, corporate organisations and government agencies.
          </div>


          <div className='lg:inline text-center pb-4'>
            <Link className='text-base qt2 border-none rounded-full text-center' to ='/'style={change1}
            onMouseEnter={()=>{setChange1(color1)}} onMouseLeave={()=>{setChange1(color2)}}>Get started</Link>
          </div>
      </div>

          <div className=''>
            <img src={teacher2}/>
          </div>



    </div>













    </div>
  )
}

export default Home