import { Outlet, NavLink } from "react-router-dom"
import logo from "../assets/LOGO.png"
import "../Pages/layout.scss"
function Layout() {

    return (
        <div className="layout">
            <header>
                <nav className="nav">
                    <img src={logo} alt="Logo de Kasa" className="logo" />
                    <div className="nav-links">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                            Accueil
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                            À propos
                        </NavLink>
                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p> 2025 Kasa. Tous droits réservés</p>
            </footer>
        </div>
    )
}

export default Layout
