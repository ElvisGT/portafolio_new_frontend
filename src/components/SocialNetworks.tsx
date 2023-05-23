import { ImageComponent } from "./ImageComponent"

export const SocialNetworks = () => {
	const socialNetworks = [
		{
			src:'https://i.ibb.co/80zxSB0/icons8-github-50.png',
			alt:'Github',
			href:'https://github.com/ElvisGT'
		},
		{
			src:'https://i.ibb.co/5kr0yTx/icons8-linkedin-50-1.png',
			alt:'Linkedin',
			href:'https://www.linkedin.com/in/elvis-gil-torres/'
		},
	]
  return (
	<div className="flex w-full justify-center">
		{socialNetworks.map(network  => (
			<a href={network.href} 
				rel="preload"
				target={'_blank'} 
				className="mx-8 
						md:hover:cursor-pointer 
						"
				key={network.href}
				>
				<ImageComponent src={network.src}
					alt={network.alt}
				    customClass={`md:hover:ring-focus 
									rounded-full 
                            		ring-4 
                            		ring-main
									w-12
									h-12
									`}/>
				
			</a>
		))}
	</div>
  )
}
