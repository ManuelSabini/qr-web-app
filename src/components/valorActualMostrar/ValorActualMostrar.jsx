import React from 'react';
import './valorActualMostrar.css'

const ValorActualMostrar = ({valor}) => {
  return (
    (valor != "" ? <div className='cardValor'><p>{valor}</p></div> : null)
  )
}

export default ValorActualMostrar 