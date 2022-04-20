import React from 'react'


const PokemonDatails = ({id, image, name, type,abilities, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className=" columns">
            <div className=" column">
            <h2>{name}</h2>
            </div>
            <div className=" column">
            <div className="numberDatails"><small>#0{id}</small></div>
            </div>
            </div>
            <img src={image} alt={name} />

            <div className="about">
                
                <small><span className='span-details'>{type}</span></small>
                <h3>about</h3>
                <div className=" columns">
            <div className=" column">
            <h2>{name}</h2>
            </div>
            <div className=" column">
            <div className="numberDatails"><small>#0{abilities}</small></div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default PokemonDatails 
