import { Layout } from "./containers/Layout";
import { NavigationMenu } from "./components/NavigationMenu";
import { Outlet } from "react-router-dom";

export default function Example() {
return (
	<div>
		<img src="https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg"
			className="z-0 w-screen h-screen absolute"
		/>
		<div className="w-full h-full flex">
			<NavigationMenu />
			<Layout />

		</div>
	</div>
	)
}