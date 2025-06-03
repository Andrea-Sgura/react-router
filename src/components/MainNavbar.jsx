import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {
        path: "/",
        label: "Homepage"
    },
    {
        path: "/about",
        label: "About us"
    },
    {
        path: "/products",
        label: "Products"
    }
]

const MainNavbar = () => {
    return (
        <header>
            <nav>
                <ul className="list-unstyled d-flex">
                    {links.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.path}>{link.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default MainNavbar