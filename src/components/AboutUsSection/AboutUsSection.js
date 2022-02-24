

const AboutUsSection = () => {
    return (
<div class="container mx-auto lg:px-20 xl:px-20 px-4 min-h-90">
		<div class=" flex-wrap  justify-center lg:mt-20 lg:mt-20 mt-10 text-left">
			<div class="w-full sm:w-1/2 md:w-full md:px-20 md:py-32 md:flex md:flex-col md:justify-center md:items-center lg:w-1/4 xl:w-5/12 mb-4 rounded-3xl gap-x-7 bg-[#1e2029] lg:p-20 xl:p-20 p-5 lg:m-4 xl:m-4 mr-0 xl:ml-20 xl:float-right">
				<h1 class="text-4xl text-left text-[#00ff62] font-bold">About Us</h1>
				<p class="text-white text-lg mt-5">ZKX is an innovative derivatives protocol built on StarkNet, StarkWare’s ZK rollup.  We are introducing power perpetuals, an evolution of perpetual swaps with high convexity and hedged downside.</p>
				<p class="text-white text-lg mt-5">Elevate your trading experience with gamified leaderboards and choose from multiple categories of off-chain and on-chain assets.</p>
				<p class="text-white text-lg mt-5">Our mission is to democratize access to global yields through our offerings to anyone, anywhere.</p>
			</div>
			<div class="w-full sm:w-1/2 md:px-20 md:flex md:flex-col md:justify-center md:items-center md:py-32 item-center md:w-full lg:w-1/4 xl:w-5/12 mb-4 rounded-3xl gap-x-7 bg-[#1e2029] p-7 xl:p-20 lg:p-20 m-4 ml-0">
				<img src="./assets/img/aboutus.png" class="max-w-full h-auto object-center " alt="..." />
			</div>
		</div>

</div>
        
    )
}

export default AboutUsSection