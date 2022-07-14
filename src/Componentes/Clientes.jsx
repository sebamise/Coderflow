import React from 'react';
import "../Styles/style.css";
function Cliente({ Cliente }) {
    return (
        <div className='cliente'>
            <button className='botonClientes'>Clientes</button>
            <img id='img' src={require(`../Media/${Cliente}.png`)} alt='Tizamol Portada' />
        </div>
    );
}

export default Cliente;