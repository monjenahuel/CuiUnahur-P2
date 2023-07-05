import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Item from "../components/Item";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import ToggleButton from 'react-bootstrap/ToggleButton';

function Home({ listaDeFavs }) {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "7034b97179msh1fc49d61755ec02p179609jsn5edf8b30af82",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
    };

    const [listaDeJuegos, obtenerListaDeJuegos] = useState([]);
    const [juegosCargados, obtenerJuegosCargados] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const [onlyFavs, setOnlyFavs] = useState(false);

    const GetListaDeJuegosAPI = async () => {
        try {
            const url =
                "https://free-to-play-games-database.p.rapidapi.com/api/games";

            const api = await fetch(url, options);
            const resultado = await api.json();
            obtenerListaDeJuegos(resultado);
            obtenerJuegosCargados(resultado);
        } catch (error) {
            console.log(error);
        }
    };

    const filtrarLista = (palabrasABuscar) => {
        let result = juegosCargados.filter((juego) => {
            if (
                juego.title
                    .toString()
                    .toLowerCase()
                    .includes(palabrasABuscar.toLowerCase())
            ) {
                return juego;
            }
        });

        obtenerListaDeJuegos(result);
    };

    const handleBusqueda = (e) => {
        setOnlyFavs(false)
        filtrarLista(e.target.value);
        setBusqueda(e.target.value);
    };

    useEffect(() => {
        GetListaDeJuegosAPI();
    }, []);

    const handleFavList = (event) => {
        if (event.target.checked) {
            setOnlyFavs(event.currentTarget.checked)
            let result = juegosCargados.filter((juego) =>
                listaDeFavs.includes(juego.id)
            );
            obtenerListaDeJuegos(result);
        } else {
            setOnlyFavs(event.currentTarget.checked)
            obtenerListaDeJuegos(juegosCargados);
        }
    };

    const preventDefault = (event) => {
        event.preventDefault();
    };

    return (
        <div className="App">
            <Header />

            <div className="row d-flex justify-content-center m-4">
                <Form
                    onSubmit={preventDefault}
                    className="d-flex col-lg-8 col-md-8 col-sm-12"
                >
                    <Form.Control
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Search"
                        value={busqueda}
                        onChange={handleBusqueda}
                    />
                    {/* <Form.Switch
                        id="favSwitch"
                        label="Favoritos"
                        style={{
                            color: "white",
                            marginLeft: "10px",
                            marginTop: "6px",
                            fontSize: "large",
                        }}
                        onChange={handleFavList}
                    /> */}

                    <ToggleButton
                        className="favButton"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-info"
                        checked={onlyFavs}
                        value="1"
                        onChange={handleFavList}
                    >
                        Favoritos
                    </ToggleButton>
                </Form>
            </div>

            <div className="row justify-content-around gameList">
                {listaDeJuegos.map((juego) => {
                    if (listaDeFavs.includes(juego.id)) {
                        return (
                            <Item
                                item={juego}
                                itemList={listaDeJuegos}
                                id={juego.id}
                                fav={true}
                            />
                        );
                    } else {
                        return (
                            <Item
                                item={juego}
                                itemList={listaDeJuegos}
                                id={juego.id}
                                fav={false}
                            />
                        );
                    }
                })}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
