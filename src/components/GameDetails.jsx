import React from 'react';

const GameDetails = ({game,listaFavs,addToFav,delFromFav}) => {
    console.log("listaFavs:",listaFavs)
    
    const {id,title,thumbnail,description,game_url,genre,platform,publisher,developer,release_date,screenshots} = game

    const agregarJuegoActualAFavs = async () =>{
        //Si el juego no está en favs lo agrega
        if(!listaFavs.includes(id)){
            addToFav(id);
            console.log("Añadido")
        }else{
            delFromFav(id);
            console.log("Eliminado")
        }
    };

    const juegoEnFavsBool = !listaFavs.includes(id)

    const favButtonText = (juegoEnFavsBool) ? "Agregar a favoritos" : "Quitar de favoritos";

    return (
        <div className="container gameDetails">
            <h3>{id}</h3>
            <img src={thumbnail} alt="" width={600}/>
            <h3>{title}</h3>
            {description}
            <h6>{genre}</h6>
            <a href={game_url}></a>
            <h6>{platform}</h6>
            <h6>{publisher}</h6>
            <h6>{developer}</h6>
            <h6>{release_date}</h6>
            <button className='btn btn-warning' onClick={agregarJuegoActualAFavs}>{favButtonText}</button>
            {/* <Button variant='warning' onClick={xd}>Agregar a favoritos</Button> */}
        </div>
        
    )

}

export default GameDetails;