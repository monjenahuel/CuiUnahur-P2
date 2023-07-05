import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const GameDetails = ({ game, listaFavs, addToFav, delFromFav }) => {
    console.log("listaFavs:", listaFavs);

    const {
        id,
        title,
        thumbnail,
        description,
        game_url,
        genre,
        platform,
        publisher,
        developer,
        release_date,
    } = game;

    const agregarJuegoActualAFavs = async () => {
        //Si el juego no está en favs lo agrega
        if (!listaFavs.includes(id)) {
            addToFav(id);
            console.log("Añadido");
        } else {
            delFromFav(id);
            console.log("Eliminado");
        }
    };

    const juegoEnFavsBool = !listaFavs.includes(id);

    const favButtonText = juegoEnFavsBool
        ? "Agregar a favoritos"
        : "Quitar de favoritos";

    const favButtonColor = juegoEnFavsBool
    ? "warning"
    : "danger";

    // return (
    //     <div className="container gameDetails">
    //         <img src={thumbnail} alt="" width={600}/>
    //         <h3>{title}</h3>
    //         {description}
    //         <h6>{genre}</h6>
    //         <a href={game_url}></a>
    //         <h6>{platform}</h6>
    //         <h6>{publisher}</h6>
    //         <h6>{developer}</h6>
    //         <h6>{release_date}</h6>
    //         <button className='btn btn-warning' onClick={agregarJuegoActualAFavs}>{favButtonText}</button>
    //     </div>
    // )

    return (
        <Container className="gameDetails mt-4 p-4">
            <Row>
                <Col sm={12} md={6}>
                    <Row>
                        <Col xs={12}>
                            <Image src={thumbnail} alt="" fluid className="shadowCustom rounded" />
                        </Col>
                        <Col xs={12} className="mb-4">
                            <Button
                                variant={favButtonColor}
                                onClick={agregarJuegoActualAFavs}
                            >
                                {favButtonText}
                            </Button>
                        </Col> 
                        <Col xs={12} className="mb-4">
                            <h6>Genre: {genre}</h6>
                            <h6>Platform: {platform}</h6>
                            <h6>Publisher:{publisher}</h6>
                            <h6>Developer: {developer}</h6>
                            <h6>Release Date: {release_date}</h6>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default GameDetails;
