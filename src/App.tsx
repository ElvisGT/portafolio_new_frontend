import { OutletContainer } from "./containers/OutletContainer";
import { NavigationMenu } from './components/NavigationMenu';


export default function App() {
return (
		<div className="w-screen h-screen">
			<NavigationMenu />
			<OutletContainer />	
		</div>
	)
}