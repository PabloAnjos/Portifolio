import "../styles/header.scss"
import imgMenu from "../assets/images/menu.png"
import { useState } from "react";

export function Header() {

        const menuHamburguer = document.querySelector('#menu-hamburguer');
        const buttonMenuHamburguer = document.querySelector('#menu-hamburguer-button');
        const [active, setMode] = useState(false);
        const toggleMode = () => {
            setMode(!active)
        }
       
        
        

    return (
        <>
            <header>
                    <nav>
                        <h1>Pablo Anjos</h1>
                        <img src={imgMenu} alt="Imagem Menu" id="menu-hamburguer-button" />
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about-me">About Me</a></li>
                            <li><a href="#works">Works</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="menu-hamburgur">
                        
                    </div>
            </header>
        </>
    )
}