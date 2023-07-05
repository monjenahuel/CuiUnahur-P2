import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const GameDetails = ({ game, listaFavs, addToFav, delFromFav }) => {

    const {
        id,
        title,
        thumbnail,
        description,
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
        } else {
            delFromFav(id);
        }
    };

    const juegoEnFavsBool = !listaFavs.includes(id);

    const favButtonText = juegoEnFavsBool
        ? "Agregar a favoritos"
        : "Quitar de favoritos";

    const favButtonColor = juegoEnFavsBool
    ? "warning"
    : "danger";


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
