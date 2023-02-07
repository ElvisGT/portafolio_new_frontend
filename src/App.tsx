import { Layout } from "./containers/Layout";
import { NavigationMenu } from "./components/NavigationMenu";

export default function Example() {
return (
	<div className="overflow-y-hidden">
		<img src="https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg"
			className="
					z-0 
					w-screen 
					h-screen
					object-cover
					md:absolute
					"
		/>
		
		<div className="w-full h-full md:flex">
			<NavigationMenu />
			<Layout />

		</div>
	</div>
	)
}