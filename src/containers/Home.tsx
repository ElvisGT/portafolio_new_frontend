import { ImageComponent } from "../components/ImageComponent"
import { SocialNetworks } from "../components/SocialNetworks"

export const Home = () => {

	return (
		<div className="z-0">
			<div className='bg-black opacity-70 w-full h-full top-0 z-10 fixed'>
			</div>
			<ImageComponent src="https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg"
				customClass="
					w-screen 
					h-screen
					object-cover
					z-0
					"
				alt="Imagen de escritorio con laptop"

			/>
			<div className="absolute z-10 top-0 
							md:flex 
							md:flex-col 
							md:h-screen
							md:w-[calc(100vw_-_24rem)]
							md:right-0
							md:items-center
							md:justify-center">
				<h1 className='text-6xl
						text-white 
						mt-16
						px-3
						py-8
						drop-shadow-2xl
						z-10
						leading-normal
						opacity-100
						'>
					Bienvenido a mi <span className='italic font-bold'>Portafolio</span>
				</h1>

				<SocialNetworks />
			</div>


		</div>
	)
}
