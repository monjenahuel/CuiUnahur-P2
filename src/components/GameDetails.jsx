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
                            <h6><span className="text-info">Genre:</span> {genre}</h6>
                            <h6><span className="text-info">Platform:</span> {platform}</h6>
                            <h6><span className="text-info">Publisher:</span>{publisher}</h6>
                            <h6><span className="text-info">Developer:</span> {developer}</h6>
                            <h6><span className="text-info">Release Date:</span> {release_date}</h6>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6}>
                    <h1 className="mb-4 text-light">{title}</h1>
                    <p>{description}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default GameDetails;
