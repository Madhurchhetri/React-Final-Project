import React from 'react'
import './TopBtn.css'

const GoTopButton = () => {
    let goTopBtn =()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    }
  return (
    <div onClick={goTopBtn} className='top-btn'>
        <i class="fa-solid fa-arrow-up fa-bounce"></i>
    </div>
  )
}

export default GoTopButton