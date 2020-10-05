import React from 'react';
import PropTypes from "prop-types";

const Informacion = ({info}) => {

  // Si no hay informacion no cargar el componente
  if (Object.keys(info).length === 0) return null;

  const { strArtistThumb, strGenre, strBiographyES, strArtist, strFacebook, strTwitter, strLastFMChart } = info;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light text-center font-weight-bold">
        Información de {strArtist}
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artista" />
        <p className="card-text">Género: {strGenre}</p>
        <h2 className="card-text">Biografía:</h2>
        <p className="card-text">{strBiographyES}</p>
        <p className="card-text">
          <a
            href={`https://${strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

Informacion.propTypes = {
  info: PropTypes.object.isRequired,
};
 
export default Informacion;