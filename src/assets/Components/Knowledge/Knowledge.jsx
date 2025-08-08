import React from "react";
import './Knowledge.css'

function Knowledge () {
    return(
        <section className="knowledge">
            <h1 className="section-title">Conhecimentos</h1>
            <div className="knowledge-container">
                <div className="knowledge-itens">
                    <h2>Tecnologias</h2>
                    <div className="knowledge-content">
                        <div className="knowledge-grid">
                            <div className="tech-itens">
                                <i className="bi bi-filetype-html"></i>
                                <span>HTML</span>
                            </div>
                            <div className="tech-itens">
                                <i className="bi bi-css"></i>
                                <span>CSS</span>
                            </div>
                            <div className="tech-itens">
                                <i className="bi bi-javascript"></i>
                                <span>JAVASCRIPT</span>
                            </div>
                            <div className="tech-itens">
                                <i className="bi bi-filetype-jsx"></i>
                                <span>REACT</span>
                            </div>
                            <div className="tech-itens">
                                <i className="bi bi-bootstrap-fill"></i>
                                <span>BOOTSTRAP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="knowledge-container">
                <div className="knowledge-itens">
                    <h2>Ferramentas & DevOps</h2>
                    <div className="knowledge-content">
                        <div className="knowledge-grid">
                            <div className="tech-itens">
                                <i className="bi bi-code-slash"></i>
                                <span>vs code</span>
                            </div>
                            <div className="tech-itens">
                                <i className="bi bi-git"></i>
                                <span>Git</span>
                            </div>
                            <div className="tech-itens">
                                <i className="bi bi-palette"></i>
                                <span>Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Knowledge