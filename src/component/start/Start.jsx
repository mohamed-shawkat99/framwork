import React from 'react'
import startLogo from "./avataaars.svg"
import "./start.css"
function Start() {
    return <>
    <section className=' d-flex justify-content-center align-items-center start'>
    <img src={startLogo} alt="" className=' w-25'/>
    <h1 className=" fs-1 ">START FRAMEWORK</h1>
        <div className=' d-flex mb-3'>
            <div className='line'></div>
            <i _ngcontent-kex-c6="" class="fa-solid fa-star mx-2 fs-5"></i>
            <div className='line'></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
    </section>
    </>
}

export default Start
