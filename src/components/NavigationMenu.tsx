import { Link } from "react-router-dom"

export const NavigationMenu = () => {
  return (
    <div className="w-96 h-screen z-10 border-r-2 border-black">
      <ul>
        <li><Link to={'/'}>Inicio</Link></li>
        <li><Link to={'/menu'}>Sobre mi</Link></li>
        <li><Link to={'/menu2'}>Habilidades</Link></li>
        <li><Link to={'/menu3'}>Proyectos</Link></li>
        <li><Link to={'/menu4'}>Contacto</Link></li>
      </ul>
    </div>
  )
}
