import React from 'react';
import './Modal.css';

const Modal = ({ show, planet, hide }) => {
    if (show) {
        return (
            <div className="modal-cover">
                <div className="modal-main">
                    <img src={require(`./PlanetImages/${planet.name}.jpg`)} width="50%"></img>
                    <h3>{planet.name}</h3>
                    <li className="infoList">
                        <ul className="infoList-item">Climate: {planet.climate}</ul>
                        <ul className="infoList-item">Population: {planet.population}</ul>
                        <ul className="infoList-item">Terrain: {planet.terrain}</ul>
                        <ul className="infoList-item">Orbital period: {planet.orbital_period}</ul>
                    </li>
                    <button className="exit-button" onClick={hide}>Exit</button>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default Modal;