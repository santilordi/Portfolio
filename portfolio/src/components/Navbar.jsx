import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {

    const navLinks = [
        { name: 'Home', path: '/'},
        { name: 'About', path: '/about'},
        { name: 'Skills', path: '/skills'},
        { name: 'Projects', path: '/projects'},
        { name: 'Contact', path: '/contact'},
    ];

    return (
        <nav className="navbar-container">
            <div className="navbar-pill">
                <ul className="nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name} className="nav-item">
                            <NavLink to={link.path} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;