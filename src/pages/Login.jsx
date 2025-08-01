import React, { useState, useEffect, useRef } from "react";
import { Hyperspeed, TrueFocus, BlurText } from "@appletosolutions/reactbits";
import googlelogo from "../assets/google.svg"



const Login = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="h-screen w-screen flex justify-center bg-[#171717] overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full inset-0 [mask-image:linear-gradient(to_right,black_50%,transparent)]">
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
            distortion: "turbulentDistortion",
            colors: {
              roadColor: 0x171717,
              islandColor: 0x1a1a1a,
              background: 0x171717,
              shoulderLines: 0xffff00,
              brokenLines: 0x0033a0,
              leftCars: [0xffff00, 0x0033a0, 0xce1126],
              rightCars: [0xce1126, 0xffff00, 0x0033a0],
              sticks: 0xffffff,
            },
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center absolute top-0 right-0 w-1/2 h-full">
          <BlurText
            text="Login"
            delay={500}
            animateBy="letters"
            stepDuration={0.35}
            onAnimationComplete={toggleVisibility}
            direction="top"
            className="text-4xl mb-8 text-white font-semibold absolute top-10 right-[43%]"
          />
          {isVisible && (
            <div className="flex flex-col border-2 border-white rounded-2xl text-white ">
              <form className="p-5 gap-5 flex flex-col items-center">
                <input type="text" placeholder="E-mail" 
                  className="h-12 px-4 text-black rounded-xl bg-[#F3F3F3] font-semibold outline-none focus:shadow-[0_0_10px_rgba(45,64,75,1)]"
                />
                <input type="password" placeholder="Password" 
                  className="h-12 px-4 text-black rounded-xl bg-[#F3F3F3] font-semibold outline-none focus:shadow-[0_0_10px_rgba(45,64,75,1)]"
                />
                <button type="button"
                  className={`px-6 py-2 cursor-pointer overflow-hidden border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-800 text-lg font-semibold shadow-xl relative z-10
                    before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:bg-[#171717] before:transition-all before:duration-500 before:rounded-xl
                    hover:before:w-full hover:text-white`}>
                  <span className="relative z-10 flex items-center gap-2">
                    Continuar
                  </span>
                </button>
                <p className="flex items-center hover:scale-110 transition cursor-pointer">
                    Registrarse
                </p>
              </form>
              <div className='flex justify-between items-center'>
                <div className='h-1 w-[20%] -ml-[0.5px] border-0 bg-gradient-to-r from-[#F3F3F3] to-transparent'></div>
                <p className='text-center text-sm'>O inicia sesión con</p>
                <div className='h-1 w-[20%] -mr-[0.5px] border-0 bg-gradient-to-r from-transparent to-[#F3F3F3]'></div>
              </div>
              <div className="flex justify-center p-3">
                <button id="btn-google" className="p-2 px-4 rounded-md bg-[#171717] text-white hover:bg-black hover:scale-110 transition">
                  <img src={googlelogo} className="w-[40px]" alt="Google login"/>
                </button>
              </div>
            </div>
            )}
      </div>
    </div>
  );
};

export default Login;
