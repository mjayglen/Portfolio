import React from "react";
import './Header.css'

function Header () {
    return(
        <header className="nav">
            <nav>
                <div className="nav-container">
                <div className="logo">
                <h1>Felipe <span>Alves</span></h1>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="">Contato</a></li>
                        <li><a href="">Projetos</a></li>
                        <li><a href="">Certificados</a></li>
                        <li><a href="">Habilidades</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header