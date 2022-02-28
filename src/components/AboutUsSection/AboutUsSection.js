const AboutUsSection = () => {
    return (
		<div class="container mx-auto lg:px-20 xl:px-20 px-4 min-h-90" id="aboutussection">
			<div class=" flex-wrap  justify-center lg:mt-20 lg:mt-20 mt-10 text-left">
				<div class="w-full sm:full md:w-full md:px-0 md:py-0 md:flex md:flex-col md:justify-center md:items-center lg:py-0 xl:py-0 lg:px-0 xl:px-0 lg:w-full  xl:w-2/4  gap-x-7 lg:m-0 xl:m-0 mr-0 xl:ml-0 xl:float-right">
					<div class="bg-[#1e2029] xl:w-11/12 lg:w-full  rounded-3xl p-8 lg:flex  xl:flex-col lg:flex-col xl:flex lg:px-[42px] py:40 xl:px-[42px] lg:py-[78px]  md:px-[42px] md:py-[78px] xl:py-[78px]">
						<h1 class="text-4xl text-left text-[#00ff62] font-bold ">About Us</h1>
						<p class="text-white text-lg mt-5 font-sir">ZKX is an innovative derivatives protocol built on StarkNet, StarkWare’s ZK rollup.  We are introducing power perpetuals, an evolution of perpetual swaps with high convexity and hedged downside.</p>
						<p class="text-white text-lg mt-5 font-sir" >Elevate your trading experience with gamified leaderboards and choose from multiple categories of off-chain and on-chain assets.</p>
						<p class="text-white text-lg mt-5 font-sir">Our mission is to democratize access to global yields through our offerings to anyone, anywhere.</p>
					</div>
				</div>
				<div class="sm:w-full w-full md:px-0 xl:px-0 lg:px-0 md:flex md:flex-col md:justify-center md:items-center md:py-2 item-center md:w-full lg:w-full  xl:w-2/4 mb-4 gap-x-7  xl:py-0 lg:py-0 xl:p-0 lg:p-0 ml-0 mt-4">
					<div class="bg-[#1e2029] xl:w-11/12 lg:w-full md:w-full md:justify-center w-full rounded-3xl p-12 lg:flex md:flex  p-[42px] xl:p-20 lg:p-20 xl:flex-col lg:flex-col xl:flex">
						<img src="./assets/img/aboutus.svg" class="max-w-full h-auto object-center " alt="..." />
					</div>
				</div>
			</div>
		</div>        
    )
}

export default AboutUsSection