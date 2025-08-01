import React from 'react';
import { Hyperspeed, TrueFocus } from '@appletosolutions/reactbits';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/home');
  }

  const handleLogin = () => {
    navigate('/login');
  }
  return (
    <div className='h-screen w-screen flex flex-items justify-center overflow-hidden bg-[#171717]'>
        <header className='flex absolute top-10 sm:top-25 w-full justify-center items-center z-[1000]'>
          <div className='rounded-4xl border-[0.5px] border-white flex justify-between backdrop-blur-sm h-15 w-[400px] sm:w-[600px] md:w-[800px] p-4'>
            <div className='flex flex-row gap-2 '>
              <svg className='cursor-pointer' fill="#ffffff" viewBox="0 0 35.632 35.632">
                <path d="M20.777,5.002h8.539l0.713,1.13h-8.537L20.777,5.002z M24.679,4.271L23.71,2.671H12.116l0.969,1.599H24.679z M19.132,8.507 l-1.475-2.804H0l1.474,2.804H19.132z M35.632,24.513v4.838h-3.037c-0.346,2.045-2.123,3.609-4.266,3.609 c-2.142,0-3.921-1.564-4.265-3.609h-9.728c-0.346,2.045-2.123,3.609-4.266,3.609c-2.142,0-3.92-1.564-4.266-3.609H5.188v-7.336 h10.871l-1.475-2.801H5.188v-2.021l-2.81-0.012l-0.961-1.604l3.771,0.017V9.991h18.978v2.802h7.896L35.632,24.513z M12.368,28.63 c0-1.266-1.026-2.293-2.292-2.293c-1.265,0-2.292,1.027-2.292,2.293c0,1.264,1.027,2.293,2.292,2.293 C11.341,30.923,12.368,29.894,12.368,28.63z M30.625,28.63c0-1.266-1.029-2.293-2.293-2.293s-2.293,1.027-2.293,2.293 c0,1.264,1.029,2.293,2.293,2.293S30.625,29.894,30.625,28.63z M33.595,24.816l-3.036-9.983h-4.351v10.028 c0.627-0.354,1.353-0.561,2.121-0.561c1.93,0,3.565,1.27,4.125,3.014h1.141V24.816L33.595,24.816z">
                </path>
              </svg>
            </div>
            <div className='text-white font-bold flex flex-row gap-5 text-[16px]'>
              <p onClick={handleHome} className='cursor-pointer'>Home</p>
              <p onClick={handleLogin} className='cursor-pointer'>Login</p>
            </div>
          </div>
        </header>
        <div className='absolute top-30 sm:top-50 w-full z-[999] text-white'>
          <TrueFocus 
            sentence="MMO Tracking"
            manualMode={false}
            blurAmount={5}
            borderColor="white"
            animationDuration={2}
            pauseBetweenAnimations={1}
            />
        </div>
        <div className='flex absolute top-100 sm:top-100 w-full justify-center items-center z-[999] '>
          <div onClick={handleHome}
           className='rounded-4xl border-[0.5px] border-white shadow-sm hover:backdrop-blur-sm cursor-pointer h-15 w-[150px] p-2'>
            <p className='text-white font-extrabold text-[16px] text-center mt-2'>INICIAR</p>
          </div>
        </div>
        <div className='hidden sm:flex absolute top-0 left-0 w-full h-full inset-0 clip-fade'>
            <Hyperspeed
                effectOptions={{
                    length: 400,
                    roadWidth: 10,
                    islandWidth: 2,
                    lanesPerRoad: 4,
                    fov: 90,
                    fovSpeedUp: 150,
                    speedUp: 2,
                    carLightsFade: 0.4,
                    totalSideLightSticks: 20,
                    lightPairsPerRoadWay: 40,
                    shoulderLinesWidthPercentage: 0.05,
                    brokenLinesWidthPercentage: 0.1,
                    brokenLinesLengthPercentage: 0.5,
                    lightStickWidth: [0.12, 0.5],
                    lightStickHeight: [1.3, 1.7],
                    movingAwaySpeed: [60, 80],
                    movingCloserSpeed: [-120, -160],
                    carLightsLength: [12, 80], // 400 * 0.03, 400 * 0.2
                    carLightsRadius: [0.05, 0.14],
                    carWidthPercentage: [0.3, 0.5],
                    carShiftX: [-0.8, 0.8],
                    carFloorSeparation: [0, 5],
                    distortion: 'turbulentDistortion',
                    colors: {
                    roadColor: 0x171717,
                    islandColor: 0x1a1a1a,
                    background: 0x171717,
                    shoulderLines: 0xffff00,
                    brokenLines: 0x0033a0,
                    leftCars: [0xffff00, 0x0033a0, 0xce1126],
                    rightCars: [0xce1126, 0xffff00, 0x0033a0],
                    sticks: 0xffffff
                    }
                }}
            />
        </div>
        


    </div>
  )
}

export default Login