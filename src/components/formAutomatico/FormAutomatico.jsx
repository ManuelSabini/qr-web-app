import React, { useEffect, useState } from 'react';
import { CSVImporter } from "csv-import-react";
import { Button, Space } from "antd";
import BotonControl from '../botonControl/BotonControl.jsx';
import Contador from '../contador/Contador.jsx';
import { StepBackwardOutlined, StepForwardOutlined, CaretRightOutlined } from '@ant-design/icons';
import ValorActualMostrar from '../valorActualMostrar/ValorActualMostrar.jsx';
import ControladorValor from '../controladorValor/ControladorValor.jsx';
import { useTranslation } from '../idiomaContext/idiomaContext.jsx';

const FormAutomatico = ({valor, setValor}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [datos, setDatos] = useState({});
    const [contador, setContador] = useState(1);
    const { t, locale } = useTranslation()

    const siguienteContador = () => {
        contador == datos.num_rows ? setContador(1) : setContador(contador+1)
    }
    const anteriorContador = () => {
        contador == 1 ? setContador(datos.num_rows) : setContador(contador-1)
    }

    const cargaDeDatos = (data) =>{
        console.log(data)
        setDatos(data)
        setIsOpen(false)
    }

    useEffect(() => {
        console.log(datos)
        setContador(1)
    },[datos])

    return (
        <>
            <Button onClick={() => setIsOpen(true)} block>{t('importCSVButton')}</Button>
            <CSVImporter
                language={locale}
                modalIsOpen={isOpen}
                modalOnCloseTriggered={() => setIsOpen(false)}
                darkMode={false}
                onComplete={(data) => cargaDeDatos(data)}
                primaryColor='#2C3E50'
                skipHeaderRowSelection={true}
                template={{
                    columns: [
                        {
                            name: 'Valor',
                            key: 'Valor',
                            required: true,
                            description: "Valores a generar codigos QR",
                        },
                    ],
                }}
            />
            <Space.Compact id='controlesAutomatico'block style={{ width: '100%' }}>
                <BotonControl icon={<StepBackwardOutlined />} iconPosition='start' formula={anteriorContador}>{t('previusButton')}</BotonControl>
                <BotonControl icon={<StepForwardOutlined />} iconPosition='end' formula={siguienteContador}>{t('nextButton')}</BotonControl>
            </Space.Compact>
            <Space id='valorActualAutomatico' size="middle" direction='vertical' style={{ width: '100%' }}>
                <Contador block valor={contador} datos={datos}/>
                <ValorActualMostrar block valor={valor}/>
            </Space>
            <ControladorValor setValor={setValor} datos={datos} contador={contador}/>
        </>
    )
}

export default FormAutomatico