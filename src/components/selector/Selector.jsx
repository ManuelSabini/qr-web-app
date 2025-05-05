import React, {useState, useEffect} from 'react'
import { Radio } from "antd";
import './selector.css'


const Selector = ({modo, setModo, setValor}) => {
    const cambiarModo = ({ target: { value } }) => {
        console.log('Modo: ', value);
        setValor("")
        setModo(value);
    };

    
    const opcionesMobil = [
        { value: "manual", label: "Manual" },
        { value: "auto", label: "Automatico", disabled: true},
    ]
    
    const opcionesEscritorio = [
        { value: "manual", label: "Manual" },
        { value: "auto", label: "Automatico", disabled: false},
    ]

    const [opcionesTamañoPantalla, setOpcionesTamañoPantalla] = useState(opcionesMobil)
    useEffect(() => {
        window.innerWidth < 900 ? setOpcionesTamañoPantalla(opcionesMobil) : setOpcionesTamañoPantalla(opcionesEscritorio) 
    },[])

    return (
        <div id='selectorModo'>
            <Radio.Group
                options={opcionesTamañoPantalla}
                defaultValue={modo}
                optionType="button"
                buttonStyle="solid"
                onChange={cambiarModo}
                value={modo}
                block
            />
        </div>
    )
}

export default Selector