import { Layout } from "./containers/Layout";
import { NavigationMenu } from "./components/NavigationMenu";
import { Home } from "./containers/Home";

export default function Example() {
return (
		<div className="w-full h-full md:flex">
			<NavigationMenu />
			<Home />
			<Layout />
		</div>
	)
}