import React from 'react';
import "../Styles/style.css";

export function Servicios() {
    return (
        <div className='seccionServicios'>
            <div className='seccionBoton'>
                <button className='botonServicios'>Servicios</button>
                <h2 className='tituloServicios'>QUÉ <span>HACEMOS?</span></h2>
            </div>
        </div>
    );
}

export function Seccion({ Icono, Texto }) {
    return (
        <div className='serviciosGrid'>
            <section className='seccionServicio'>
                <h5>{Texto}</h5>
                {Icono}
            </section>
        </div>
    );
}
