import React, { useEffect } from 'react'

const ControladorValor = ({datos, setValor, contador}) => {
    
    const obtenerValorPorIndice = (indice) => {
        if (datos.rows && datos.rows.length > indice) {
            return datos.rows[indice].values["Valor"];
        } else {
            return "";
        }
    }

    useEffect(() => {
        setValor(obtenerValorPorIndice(contador-1))
    },[contador, datos])

    return (
    <>
    </>
)
}

export default ControladorValor