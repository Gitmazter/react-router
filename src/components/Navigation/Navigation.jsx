import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return(
        <nav>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About Us</NavLink></li>
                <li><NavLink to={"/projects"}>Projects</NavLink></li>
                <li><NavLink to={"https://gitmazter.github.io/cv-med-css-Philip-Andelic/"}>Legacy Page</NavLink></li>
            </ul>
        </nav>
    )
}