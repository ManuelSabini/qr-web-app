import React from 'react';
import { Button } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import './botonLimpiar.css';

const BotonLimpiar = ({setValorInsertado, ref}) => {
    const borrarValores = () => {
        setValorInsertado("")
        if (ref.current) {
            ref.current.focus();
        }
    }

    return (
        <Button 
            id='botonLimpiar' 
            type="primary" 
            danger 
            icon={<DeleteOutlined />}
            onClick={borrarValores}
        />
    )
}

export default BotonLimpiar