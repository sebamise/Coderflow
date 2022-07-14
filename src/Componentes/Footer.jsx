import React from 'react'
import "../Styles/style.css";
import { IconosFB, IconoInst, IconosLink } from './Iconos';
function Footer({ Logo }) {
    return (
        <footer className='footer'>
            <div className='footerGrid'>
                <div className='footerLogo'>
                    <img src={require(`../Media/${Logo}.svg`)} alt='Logo Coderflow Footer' />
                </div>
                <div className='footerContacto'>
                    <h5>Hablemos!</h5>
                    <a href="#contacto" className='Link'>hola@coderflow.net</a>
                </div>
                <div className='redesSocialesFooter'>
                    <p>Seguínos</p>
                    <a href="https://www.facebook.com/coderflowsoftware/">
                        <IconoInst Social='instagram' Color="#fff" />
                    </a>
                    <a href="https://www.instagram.com/coderflow_/">
                        <IconosFB Social='facebook' Color="#fff" />
                    </a>
                    <a href="https://www.linkedin.com/company/coderflow/">
                        <IconosLink Social='linkedln' Color="#fff" />
                    </a>
                </div>
            </div>
            <hr />
            <div className='textoFooter'>
                <p id="Informacion" >© Copyright 2022 – CODERFLOW. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;