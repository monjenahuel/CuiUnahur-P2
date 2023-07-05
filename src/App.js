import './App.css';
import Home from './pages/Home'
import Game from './pages/Game'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'



function App() {

  useEffect(() => {
    document.title = 'FreeToPlay'; // Cambia el título de la pestaña
  }, []);

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
      Swal.fire({
        icon: 'success',
        title: 'Juego añadido a favoritos',
        showConfirmButton: false,
        timer: 1500
      })
  };

  const handleDeleteFav = (game) => {
    Swal.fire({
      imageUrl: 'https://i.pinimg.com/originals/03/76/1f/03761fc7a9ac6947f5542547d4cfaa31.png',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Imagen de un gatito muy pero muy triste',
      title: '¿Quitar de tus favoritos?',
      text: "Siempre podes volver a agregarlo",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quitate tú!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        const favsSinActual = listaDeFavs.filter(fav => fav !== game);
        editarFavs(favsSinActual);

        Swal.fire(
          'Hasta la vista baby!',
          'Una distracción menos',
          'success'
        )
      }
    })
      
};


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home listaDeFavs={listaDeFavs}/>} />
          <Route path="/game/:idGame" element={<Game listaDeFavs={listaDeFavs} handleAddFavorite={handleAddFav} handleDeleteFav={handleDeleteFav}/>} />
          <Route path="*" element={<Home listaDeFavs={listaDeFavs}/>} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
