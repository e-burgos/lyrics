import React from 'react';
import PropTypes from 'prop-types';

const Cancion = ({letra}) => {

    // Si no hay ninguna letra no cargar el componente
    if (letra.length === 0) return null;

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light text-center font-weight-bold">
                Letra de la Canción
            </div>
            <div className="card-body">
                <p className="card-text letra">{letra}</p>
            </div>
        </div>
    );
}

Cancion.propTypes = {
  letra: PropTypes.string.isRequired
};
 
export default Cancion;