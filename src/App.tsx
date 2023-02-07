import { Layout } from "./containers/Layout";
import { NavigationMenu } from "./components/NavigationMenu";
import { Outlet } from "react-router-dom";

export default function Example() {
return (
		<div className="w-full h-full flex">
			<NavigationMenu />
			<Layout />

		</div>
	)
}