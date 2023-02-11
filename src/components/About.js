import React,{useRef, useState} from 'react'
import '../Styles/About.css'

const About = () => {
   
    const inputRef=useRef()
    const [play,setplay]=useState(false)

    
    const handlePlay=()=>{
        inputRef.current.play()
        setplay(true)
    }

    const handlePause=()=>{
        inputRef.current.pause()
        setplay(false)
    }
     

  return (
    <div id="about" className='about-wrapper'>
       <div className='about-container'>
       
        <div>
            <h1>We Have Many Year Experience In Consultant Business</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button className='btn btn-primary'>Know More</button>
        </div>

        <div className='video-container'>
            <button className='custom-play-btn' onClick={play?handlePause:handlePlay}>{play?<i class="fa-solid fa-pause"></i>:<i class="fa-solid fa-play" ></i>}</button>
            <video src={'/img/video.mp4'} width="600" height="300"  ref={inputRef}/>
        </div>

      </div>
      
      <div className='about-container-2'>
         <div>
           <i class="fa-solid fa-gears"></i>
           <h6>Construction</h6>
         </div>
          
         <div>
           <i class="fa-solid fa-cloud"></i>
           <h6>High Backup</h6>
         </div>

         <div>
           <i class="fa-solid fa-magnifying-glass-chart"></i>
           <h6>Research</h6>
         </div>

         <div>
           <i class="fa-solid fa-screwdriver-wrench"></i>
           <h6>Repair</h6>
         </div> 

      </div>

    </div>

    
  )
}

export default About