import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Exit(props) {
   
    return (
        <div>
            <h1>Vielen Dank für Ihre Bestellung!</h1>
            <h3>Bestellnummer:15130</h3>
            <h5>wir haben Ihnen eine Bestellbestätigung per E-Mail geschickt.</h5>

            <Link className="exit ion-icon" to="/"><ion-icon name="caret-back-outline"></ion-icon><button className= "button primary">Zurück zum Shop</button></Link> 
        </div>
    );
}

export default Exit;