import { Link,Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
        <nav>
        <ul className="unorderedlist">
            <li className="list"><Link to="/">Blog Webiste</Link></li>
            <li className="list"><Link to="/about">About</Link></li>
            <li className="list"><Link to="/login">Login</Link></li>
            <li className="list"><Link to="/register">Register</Link></li>
            <li className="list"><Link to="/contact">Contact</Link></li>

        </ul>
        </nav>

        <Outlet />
        </>
        
    )
}