import React from 'react';
import "../Styles/style.css";
import "./Iconos"
import { IconosFB, IconoInst, IconosLink } from './Iconos';

function Portada() {
    return (
        <div className='contenedorMenu'>
            <div className='redesSocialesMenu'>
                <div className='Icono'>
                    <a href='https://www.facebook.com/coderflowsoftware/'>
                        <IconoInst Social='instagram' Color="#6f32be" />
                    </a>
                </div>
                <div className='Icono'>
                    <a href='https://www.instagram.com/coderflow_/'>
                        <IconosFB Social='facebook' Color="#6f32be" />
                    </a>
                </div>
                <div className='Icono'>
                    <a href='https://www.linkedin.com/company/coderflow/'>
                        <IconosLink Social='linkedin' Color="#6f32be" />
                    </a>
                </div>
            </div>
            <div className='portada'>
                <h1>SOFTWARE SOLUTIONS</h1>
                <hr color='#FB20D7' />
                <h2 className='tituloPortada'>BIENVENIDOS A CODERFLOW</h2>
                <a className='botonPortada' href='#contacto'>Enviar Consulta</a>
            </div>


        </div>
    );
}

export default Portada;