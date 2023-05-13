import CartWidget from "../../CartWidget/CartWidget"
import "./NavBar.css"
import logo from "./logo.png"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
      <nav className="NavBar">
        <Link to="/">
          <h3>Gaming4U</h3>
          <img
          className='logo'
          src={logo}
          alt='logo PC' />
        </Link>
        <div className="Categories">
          <NavLink to={`/category/componentes`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Componentes</NavLink>
          <NavLink to={`/category/monitores`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Monitores</NavLink>
          <NavLink to={`/category/agregados`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Agregados</NavLink>
        </div>
        <CartWidget />
      </nav>
    )
}

export default NavBar