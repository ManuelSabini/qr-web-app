import React from 'react'

const Contador = ({valor, datos}) => {
    
  return (
    (typeof(datos.num_rows) == 'number' ? <p>{valor}/{datos.num_rows}</p> : <p>Cargue un archivo .csv</p>)
  )
}

export default Contador 