import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameDetails from "../components/GameDetails";

function Game({ listaDeFavs, handleAddFavorite, handleDeleteFav }) {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "7034b97179msh1fc49d61755ec02p179609jsn5edf8b30af82",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
    };

    let [data, setData] = useState("");

    const { idGame } = useParams();

    useEffect(() => {
        const url =
            "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" +
            idGame;
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="App">
            <Header />
            {data ? (
                <div className="container">
                    <GameDetails
                        game={data}
                        listaFavs={listaDeFavs}
                        addToFav={handleAddFavorite}
                        delFromFav={handleDeleteFav}
                    />
                </div>
            ) : (
                <div className="loader"></div>
            )}
            <Footer />
        </div>
    );
}

export default Game;
