import { NavLink } from "react-router-dom";

function Header() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink to="/Home" end>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to=".Contact" end>Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Projects" end>Projects</NavLink>
                </li>
            </ul>
        </nav>
    </>
}

export default Header;