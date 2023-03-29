import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <>
            <div></div>
            <div>Copyright Andzi 2023</div>
            <div className="social-icons">
                    <ul>
                        <li><NavLink><img src="/icons/discord.svg" alt="" /></NavLink></li>
                        <li><NavLink><img src="/icons/telegram.svg" alt="" /></NavLink></li>
                        <li><NavLink><img src="/icons/email.svg" alt="" /></NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink><img src="/icons/twitter.svg" alt="" /></NavLink></li>
                        <li><NavLink><img src="/icons/github.svg" alt="" /></NavLink></li>
                    </ul>
            </div>
        </>
    )
}