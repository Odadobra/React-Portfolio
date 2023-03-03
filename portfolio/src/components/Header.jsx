import { Navlink } from "react-router-dom";

function Header() {
    return <>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink to="/Home">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/Projects">Projects</NavLink>
            </li>
        </ul>
    </>
}

export default Header;