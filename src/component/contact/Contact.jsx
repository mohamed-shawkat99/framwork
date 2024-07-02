import React from 'react'
import "./contact.css"
import $ from "jquery"
import { useEffect } from 'react';


export default function Contact() {
    useEffect(()=>{
        $("input").keyup(()=>{
            if($('.input1').length > 0 && $('.input1').val() != '') {
                $(".name").animate({top: '-30px',opacity:"1"})
            }else{
                $(".name").animate({top: '0px',opacity:"0"})
                
            }
            if($('.input2').length > 0 && $('.input2').val() != '') {
                $(".age").animate({top: '-30px',opacity:"1"})
            }else{
                $(".age").animate({top: '0px',opacity:"0"})
                
            }
            if($('.input3').length > 0 && $('.input3').val() != '') {
                $(".email").animate({top: '-30px',opacity:"1"})
            }else{
                $(".email").animate({top: '0px',opacity:"0"})
                
            }
            if($('.input4').length > 0 && $('.input4').val() != '') {
                $(".password").animate({top: '-30px',opacity:"1"})
            }else{
                $(".password").animate({top: '0px',opacity:"0"})
                
            }
        });
    },[])
    return <>
    <div className='contact p-5 text-center m-5'>
        <h1>CONATCT SECTION</h1>
        <div className=' d-flex justify-content-center mb-3'>
            <div className='lineContact'></div>
            <i _ngcontent-kex-c6="" class="fa-solid fa-star contact-icon mx-2 fs-5"></i>
            <div className='lineContact'></div>
        </div>
    <form className=' w-50 m-auto'>


    <div class="position-relative mt-5">
        <p className='name'>UserName:</p>
        <input className=' input1 form-control m-5' placeholder='Name' type="text" />
    </div>

    <div class="position-relative mt-5">
        <p className='age'>Age:</p>
        <input className='input2 form-control m-5' placeholder='Age' type="text" />
    </div>


    <div class="position-relative mt-5">
        <p className='email'>E-mail</p>
        <input className=' input3 form-control m-5' placeholder='E-mail' type="text" />
    </div>
    <div class="position-relative mt-5">
        <p className='password'>Password:</p>
        <input className=' input4 form-control m-5' placeholder='Password' type="text" />
    </div>
    <div className=' d-flex justify-content-start'>
    <button className='btn btn-info ms-5 '>submit</button>
        </div>
    </form>

    </div>
    </>
}

