import './App.css';
import Home from './pages/Home'
import Game from './pages/Game'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';



function App() {

  //-------------------------

  
  let [listaDeFavs, editarFavs] = useState([]);

  useEffect(() => {
      // Obtener la lista de favs del localStorage
      const storedFavorites = localStorage.getItem('favs');
      if (storedFavorites) {
          listaDeFavs = JSON.parse(storedFavorites)
          editarFavs(JSON.parse(storedFavorites))
      }
  }, []);

  useEffect(() => {
      // Guardar lala lista de favs del localStorage cada vez que se actualice "listaDeFavs"
      localStorage.setItem('favs', JSON.stringify(listaDeFavs));
  }, [listaDeFavs]);

  const handleAddFav = (game) => {
      // Agregar elemento a la lista de favs
      editarFavs([...listaDeFavs, game]);
  };

  const handleDeleteFav = (game) => {
      // Quitar elemento a la lista de favs
      const favsSinActual = listaDeFavs.filter(fav => fav !== game);
      editarFavs(favsSinActual);
};


  //-----------------------------------


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home listaDeFavs={listaDeFavs}/>} />
          <Route path="/game/:idGame" element={<Game listaDeFavs={listaDeFavs} handleAddFavorite={handleAddFav} handleDeleteFav={handleDeleteFav}/>} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
