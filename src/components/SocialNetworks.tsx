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
			href:'https://linkedin.com/ElvisGT'
		},
	]
  return (
	<div className="flex w-full justify-center">
		{socialNetworks.map(network  => (
			<a href={network.href} target={'_blank'} 
				className="mx-4 
						md:hover:cursor-pointer 
						">
				<ImageComponent src={network.src}
					alt={network.alt}
					width={'12'}
					height={'12'}
				    customClass={`md:hover:ring-alert 
									
									`}/>
				
			</a>
		))}
	</div>
  )
}
