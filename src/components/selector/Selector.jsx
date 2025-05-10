import React, {useState, useEffect} from 'react'
import { Radio, Tooltip } from "antd";
import './selector.css'
import { useTranslation } from '../idiomaContext/idiomaContext.jsx';
import { FileAddOutlined } from '@ant-design/icons';



const Selector = ({modo, setModo, setValor}) => {
    const { locale } = useTranslation()
    const cambiarModo = ({ target: { value } }) => {
        console.log('Modo: ', value);
        setValor("")
        setModo(value);
    };

    const opcionesMobil_es = [
        { value: "manual", label: "Manual" },
        { value: "auto", label: "Archivo (Solo PC)", disabled: true}
    ]

    const opcionesMobil_en = [
        { value: "manual", label: "Manual" },
        { value: "auto", label: "From file (PC Only)", disabled: true}
    ]
    
    const opcionesEscritorio_es = [
        { value: "manual", label: "Manual" },
        { value: "auto", label: "Desde Archivo", disabled: false},
    ]
    
    const opcionesEscritorio_en = [
        { value: "manual", label: "Manual" },
        { value: "auto", label: "From file", disabled: false},
    ]

    const idiomaOpciones = () => {
        switch (locale) {
            case 'es':
                window.innerWidth < 900 ? setOpcionesTamañoPantalla(opcionesMobil_es) : setOpcionesTamañoPantalla(opcionesEscritorio_es)
                break;
            case 'en':
                window.innerWidth < 900 ? setOpcionesTamañoPantalla(opcionesMobil_en) : setOpcionesTamañoPantalla(opcionesEscritorio_en)
                break;
        }
    }

    const [opcionesTamañoPantalla, setOpcionesTamañoPantalla] = useState("")
    
    useEffect(() => {
        idiomaOpciones()
    },[locale])

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