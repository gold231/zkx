import Typewriter from 'typewriter-effect'
import {  animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = () => {
  return (
    <>
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-white text-center lg:pt-60 xl:pt-60 pt-36">
        Power In 
        <span class="bg-[#1e2429] text-[#00ff62] px-8 rounded-full font-bold pb-2 mt-5 inline-block">
          <Typewriter
            options={{
              strings: ['Perpetuity', 'Leverage', 'Assets'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
		  <p class="text-center text-[#6A6F81] pt-8 text-xl font-semibold p-2">Trade power perpetuals with exposure to off-chain assets for minimal fees. Join the waitlist</p>
		  <p class=" text-center pt-12 pb-12">
        <button align="center" class="bg-[#00ff62] hover:bg-blue-700 text-white font-bold py-2 px-4 text-[#000] rounded-full items-center text-center" 
          onClick={() =>  scroller.scrollTo('notifysection', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          })}>Join The Waitlist
        </button>
      </p>
		  <div align="center" class="text-center content-center ">
        <h2 class="lg:pb-80 xl:pb-80 pb-32 xl:text-4xl text-xl text-center text-[#6A6F81] pb-12 inline-flex">
          Powerd By 
          <img src="./assets/img/fill.png" class="max-w-full h-auto pr-6 pl-6" alt="..." /> 
          <span class="font-medium">STARK </span>
          <span class="pl-3"> WARE </span>
        </h2>
      </div>        
    </>
  )
}

export default Header