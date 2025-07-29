import React from 'react'
import { useState, useRef, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  
  const navigate = useNavigate();

  const handleHomeButton = () => {
    navigate('/home')
  } 

  return (
    <div className='flex absolute top-25 left-1/4 justify-center items-center'>
        <header className='flex'>
            <div className='rounded-4xl border-[0.5px] border-white flex justify-between backdrop-blur-2xl h-15 w-[800px] p-4'>
              <div className='flex flex-row gap-2 '>
                <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35.632 35.632" xml:space="preserve" stroke="#ffffff">
                  <path d="M20.777,5.002h8.539l0.713,1.13h-8.537L20.777,5.002z M24.679,4.271L23.71,2.671H12.116l0.969,1.599H24.679z M19.132,8.507 l-1.475-2.804H0l1.474,2.804H19.132z M35.632,24.513v4.838h-3.037c-0.346,2.045-2.123,3.609-4.266,3.609 c-2.142,0-3.921-1.564-4.265-3.609h-9.728c-0.346,2.045-2.123,3.609-4.266,3.609c-2.142,0-3.92-1.564-4.266-3.609H5.188v-7.336 h10.871l-1.475-2.801H5.188v-2.021l-2.81-0.012l-0.961-1.604l3.771,0.017V9.991h18.978v2.802h7.896L35.632,24.513z M12.368,28.63 c0-1.266-1.026-2.293-2.292-2.293c-1.265,0-2.292,1.027-2.292,2.293c0,1.264,1.027,2.293,2.292,2.293 C11.341,30.923,12.368,29.894,12.368,28.63z M30.625,28.63c0-1.266-1.029-2.293-2.293-2.293s-2.293,1.027-2.293,2.293 c0,1.264,1.029,2.293,2.293,2.293S30.625,29.894,30.625,28.63z M33.595,24.816l-3.036-9.983h-4.351v10.028 c0.627-0.354,1.353-0.561,2.121-0.561c1.93,0,3.565,1.27,4.125,3.014h1.141V24.816L33.595,24.816z">
                  </path>
                </svg>
                <p className='text-white text-[16px]'>MMO-Tracking Service</p>
              </div>
              <div className='text-white flex flex-row gap-5 text-[16px]'>
                <p>Home</p>
                <p>Login</p>
              </div>
            </div>
            

        </header>
    </div>
  )
}

export default Header