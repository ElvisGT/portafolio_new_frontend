
export const Home = () => {
  return (
    <div className="z-0">
        <img src="https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg"
			className="
					z-0 
					w-screen 
					h-screen
					object-cover
					md:absolute
					"
		/>
        <div className='bg-black opacity-70 h-full absolute top-0'>
				<h1 className='text-6xl
							text-white 
							mt-16
							px-3
							py-8
							drop-shadow-2xl
							z-10
							leading-normal
							'>
					Bienvenido a mi <span className='italic font-bold'>Portafolio</span>
				</h1>
		</div>
    </div>
  )
}
