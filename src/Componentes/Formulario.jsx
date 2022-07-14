import React from 'react';
import "../Styles/style.css";

function Formulario() {
    return (
        <div className='contenedorFormulario'>
            <button className='botonClientes' id="contacto">Contacto</button>
            <h1>COMENCEMOS UN <span>PROYECTO</span></h1>
            <form className='formulario' id='Form' method='POST' action='##'>
                <div className='campos'>
                    <div className='campo'>
                        <label>Nombre*</label>
                        Usuario: <input id='Name' required type='text' name='Nombre'></input>
                    </div>
                    <div className='campo'>
                        <label>Correo Electrónico*</label>
                        <input id='Email' required type='email' name='Email'></input>
                    </div>
                </div>
                <div className='campos'>
                    <div className='campo'>
                        <label>Telefono*</label>
                        Telefono:<input id='Telefono' required type='tel' name='Telefono'></input>
                    </div>
                    <div className='campo'>
                        <label>Servicio*</label>
                        <select id='Service' name='Servicio' required>
                            <option>Desarrollo Web</option>
                            <option>E-Commerce</option>
                            <option>Diseño Grafico</option>
                        </select>
                    </div>
                </div>
                <div className='consulta'>
                    <label>Consulta*</label>
                    <textarea required name='Consulta'></textarea>
                </div>
                <input type='submit' value='Enviar' className='botonFormulario'></input>
            </form>
        </div>
    );
}

export default Formulario;