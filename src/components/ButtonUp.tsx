import { useEffect, useState } from "react";

export const ButtonUp = () => {
	const screenHeight = 500;
	const [button, setButton] = useState(false)

	useEffect(() => {
		document.addEventListener("scroll",() => {
			if(document.documentElement.scrollTop > screenHeight){
				setButton(true)
			}else {
				setButton(false)
			}
		})
	},[]) 
	const handleUp = () => {
		window.scroll(0,0);
	}
	return (
		<>
			{button && 
				<img onClick={handleUp}
					className={`fixed bottom-5 right-6 z-20 
								md:hover:cursor-pointer
								md:animate-bounce`} 
					src="https://i.ibb.co/hfnp5g2/icons8-up-arrow-60-1.png"
					alt="flecha arriba"/>
				
			}
		</>
	)
}
