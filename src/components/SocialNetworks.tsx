import { ImageComponent } from "./ImageComponent"

export const SocialNetworks = () => {
	const socialNetworks = [
		{
			src:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			alt:'Github',
			href:'https://github.com/ElvisGT'
		},
		{
			src:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
				className="mx-4 
						md:hover:cursor-pointer 
						"
				key={network.href}
				>
				<ImageComponent src={network.src}
					alt={network.alt}
				    customClass={`md:hover:ring-alert 
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
