import React from 'react'
import './contador.css'

const Contador = ({valor, datos}) => {
    
  return (
    (typeof(datos.num_rows) == 'number' ? <div>{valor}/{datos.num_rows}</div> : <div>Cargue un archivo .csv</div>)
  )
}

export default Contador 