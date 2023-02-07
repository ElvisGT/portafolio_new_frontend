import { Link } from "react-router-dom"

export const NavigationMenu = () => {
  return (
    <div className="w-96 h-screen">
      <ul>
        <li><Link to={'/menu'}>Menu</Link></li>
        <li><Link to={'/menu2'}>Menu2</Link></li>
        <li><Link to={'/menu3'}>Menu3</Link></li>
        <li><Link to={'/menu4'}>Menu4</Link></li>
      </ul>
    </div>
  )
}
