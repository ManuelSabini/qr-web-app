import React from 'react'
import { Radio } from "antd";
import './selector.css'


const Selector = ({modo, setModo}) => {
    const cambiarModo = ({ target: { value } }) => {
        console.log('Modo: ', value);
        setModo(value);
    };
    return (
        <div id='selectorModo'>
            <Radio.Group
                options={[
                    { value: "manual", label: "Manual" },
                    { value: "auto", label: "Automatico"},
                ]}
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