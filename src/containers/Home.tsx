import { ImageComponent } from "../components/ImageComponent"
import { SocialNetworks } from "../components/SocialNetworks"

 const Home = () => {

	return (
		<div className="z-0 fixed overflow-y-hidden">
			<div className='bg-black opacity-70 
							w-full 
							min-h-screen 
							top-0 
							z-10 
							fixed
							overflow-y-hidden
							'>
			</div>
			<ImageComponent src="https://i.ibb.co/60CDxVw/pexels-danny-meneses-943096-compressed.jpg"
				customClass="
					rounded-none
					m-0
					object-cover
					z-0
					h-screen
					"
				alt="Imagen de escritorio con codigo"
				width="screen"
				height="screen"

			/>
			<div className="absolute z-10 top-0 
							md:flex 
							md:flex-col 
							md:h-screen
							md:w-[calc(100vw_-_20rem)]
							md:right-0
							md:items-center
							md:justify-center">
				<h1 className='text-6xl
						text-white 
						mt-16
						px-3
						ml-4
						py-8
						drop-shadow-2xl
						z-10
						leading-normal
						opacity-100
						text-center
						'>
					Bienvenido a mi <span className='italic font-bold text-focus'>Portafolio</span>
				</h1>

				<SocialNetworks />
			</div>


		</div>
	)
}

export default Home;