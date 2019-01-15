import React from 'react';
import PlanetCard from './PlanetCard'
import './Content.css'

const Content = ({ planets, showModal, loading }) => {
    if (!loading) {
        return (
            <div className="content">
                {planets.map((planet, i) => {
                    return (
                        <PlanetCard key={planet.name} id={i} name={planet.name} showModal={showModal} />
                    );
                })}
            </div>
        );
    } else {
        return (
            <div className="content2">
                <h1>Loading...</h1>
                <img src={require(`./loadingimage.gif`)}></img>
            </div>
        );
    }
}

export default Content;