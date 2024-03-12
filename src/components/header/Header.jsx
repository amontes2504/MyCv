import React from "react";
import "./header.css"
import foto from "./foto.jpg";
import {Smartphone,LocationOn,Mail} from '@mui/icons-material';



export default function Header(){
    return (
        <div className="header">
            <div className="headerPhoto">
                <img src={foto} alt="foto-personal" className='headerPhotoImg'/>
            </div>
            <div className="headerNombres">
                <h1>Paula Andrea Montes Parra</h1>
                <p>Tecnologo en Analisis y Desarrollo de Software</p>
            </div>
            <div className="headerContacto">
                <ul className="contactList">
                    <li className="contactListItem"><p><Smartphone/></p><p>(+57)3216774485 </p></li>
                    <li className="contactListItem"><p><LocationOn/></p><p>Pereira / Risaralda / Colombia</p></li>
                    <li className="contactListItem"><p><Mail/></p><p>paula.montes59@soy.sena.edu.co</p></li>

                </ul>
            </div>
        </div>
    )
}