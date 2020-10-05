import React, {Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from "./components/Cancion";
import Informacion from "./components/Informacion";
import axios from 'axios';

function App() {

  // definir el state
  const [ busquedaLetra, guardarBusquedaLetra ] = useState({});
  const [ letra, guardarLetra ] = useState('');
  const [ info, guardarInfo ] = useState({});
  const [ error, guardarError] = useState(false);

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return;
    const consultarApiLetra= async() => {
      const {artista, cancion} = busquedaLetra;
      const url= `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2= `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      
      axios.all([
      axios.get(url),
      axios.get(url2)
      ]).then(axios.spread((letra, informacion) => {
        guardarLetra(letra.data.lyrics);
        guardarInfo(informacion.data.artists[0]);
      })).catch(error => {
        guardarError(true);
      });
      guardarError(false);
    }
    consultarApiLetra();
  }, [busquedaLetra]);

  return (
    
    <Fragment>
      <Formulario 
       guardarBusquedaLetra={guardarBusquedaLetra}
      />
      {error ? <p className="alert alert-danger text-center p-5">Ooops, Artista no encontrado! Por favor intentalo de nuevo</p> : null}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion 
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
