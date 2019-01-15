import React from 'react';
import './PlanetCard.css';

const PlanetCard = ({id, name, showModal}) => {
    return(
        <div onClick = {() => showModal(id, name)} className="Card">
            <img className="Image" src={require(`./PlanetImages/${name}.jpg`)} width="50%"></img>
            <p className="text">{name}</p>
        </div>
    );
}

export default PlanetCard;