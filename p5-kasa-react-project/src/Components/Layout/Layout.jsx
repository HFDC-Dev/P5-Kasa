import { Outlet, NavLink } from "react-router-dom"
import logo from "../../assets/LOGO.png"
import FooterLogo from "../../assets/LogoFooter.png"
import "./layout.scss"
function Layout() {

    return (
        <div className="layout">
            <header>
                <div className="container">
                    <nav className="nav">
                    <img src={logo} alt="Logo de Kasa" className="logo" />
                    <div className="nav-links">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>     {/* Classe active si la route correspond */}
                            Accueil
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                            À propos
                        </NavLink>
                    </div>
                </nav>
                </div>
            </header>

            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        <img src={FooterLogo} alt="Logo du footer" className="footer-logo"/>
                        <p> © 2020 Kasa. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
