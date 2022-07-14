import React from 'react';
import "../Styles/style.css";

function Navegacion({ Imagen }) {
    return (
        <nav className='navegacion'>
            <a href="##">
                <img src={require(`../Media/${Imagen}.svg`)} alt='Coderflow' />
            </a>
            <a className='botonInicio' href='#contacto'>Contacto</a>
        </nav>
    );
}

export default Navegacion;