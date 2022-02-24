import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {

  const [isopen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)



const handleResize = () => {
  if (window.innerWidth < 720) {
      setIsMobile(true)
  } else {
     setIsMobile(false)
  }
}

  const handleClick = (event) => {
    if(isopen){
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }


  const handleMobileClick = (event) => {
    if(isMobileOpen){
      setIsMobileOpen(false)
      setIsOpen(false)
    } else {
      setIsMobileOpen(true)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

    return (
     
<div class="container mx-auto px-16">

<nav class="text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div class="container flex flex-wrap justify-between  mx-auto">
  <div>
    <a href="#" class="flex">
	<img src="./assets/img/logo.png" class="max-w-full h-auto" />
     </a>
     </div>
    <button onClick={handleMobileClick} data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div  class={isMobileOpen? 'w-full md:block md:w-auto' : 'hidden w-full md:block md:w-auto' }   id="mobile-menu">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:white md:p-0 dark:text-white" aria-current="page">About Us</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Why ZKX</a>
        </li>
       
		<li>
            <button onClick={handleClick} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-white  md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:w-auto  md:dark:hover:bg-transparent">Community <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
         {isopen == true && 
         <div id="dropdownNavbar"  class="absolute right-5 z-10 w-44 text-white text-base list-none bg-[#1E2029]] rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
         <ul class="py-1" aria-labelledby="dropdownLargeButton">
         <div class="px-2 py-2 bg-[#1E2029] rounded-md shadow dark-mode:bg-[#1E2029]">
							<a class="block px-4 py-2 mt-2 text-white font-semibold inline-flex" href="#"><img src="./assets/img/twitter.png" class="max-w-full h-auto object-center pr-5" alt="..." />Twitter</a>
							<a class="block px-4 py-2 mt-2 text-white font-semibold inline-flex" href="#"><img src="./assets/img/discord.png" class="max-w-full h-auto object-center pr-5" alt="..." />Discord</a>
							<a class="block px-4 py-2 mt-2 text-white font-semibold inline-flex" href="#"><img src="./assets/img/medium.png" class="max-w-full h-auto object-center pr-5" alt="..." />medium</a>
							 <a class="block px-4 py-2 mt-2 text-white font-semibold inline-flex" href="#"><img src="./assets/img/teligram.png" class="max-w-full h-auto object-center pr-5" alt="..." />Telegram</a>
							<a class="block px-4 py-2 mt-2 text-white font-semibold inline-flex" href="#"><img src="./assets/img/linkdin.png" class="max-w-full h-auto object-center pr-5" alt="..." />Linkdin</a>
						  </div>
         </ul>
         
     </div>
         }
             {isopen == false && 
 <div id="dropdownNavbar" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
 <ul class="py-1" aria-labelledby="dropdownLargeButton">
   <li>
     <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Dashboard</a>
   </li>
   <li>
     <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Settings</a>
   </li>
   <li>
     <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Earnings</a>
   </li>
 </ul>
 <div class="py-1">
   <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
 </div>
</div>
}
        </li>
     
      </ul>
    </div>
  </div>
</nav>

</div>

    )
}

export default Navbar