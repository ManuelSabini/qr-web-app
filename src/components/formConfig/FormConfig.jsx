import React, { useState, useRef } from 'react'
import { Card } from 'antd';
import './formConfig.css';
import { Input, Space } from 'antd';
import Selector from '../selector/Selector.jsx';
import BotonLimpiar from '../botonLimpiar/BotonLimpiar.jsx';
import FormAutomatico from '../formAutomatico/FormAutomatico.jsx';
import { useTranslation } from '../idiomaContext/idiomaContext.jsx';

const FormConfig = ({setValorInsertado, valor}) => {
  const [modo, setModo] = useState("manual")
  const { t } = useTranslation()
  const inputRef = useRef(null);
  const cambiosValores = (event) => {
    setValorInsertado(event.target.value);
  };
  const panelModo = (opcion) => {
    if (opcion.modo == 'manual') {
      return (
        <>
          <div id='inputManual'>
            <Space.Compact style={{ width: '100%' }}>
              <Input addonBefore={t('value')} value={valor} onChange={cambiosValores} placeholder={t('valuePlaceholder')} ref={inputRef}/>
              <BotonLimpiar setValorInsertado={setValorInsertado} ref={inputRef}/>
            </Space.Compact>
          </div>
        </>
      )
    } else if(opcion.modo == 'auto') {  
      return (
        <>
          <div id='inputAuto'>
            <FormAutomatico valor={valor} setValor={setValorInsertado}/>
          </div>
        </>
      )
    }
  }
  return (
    <section>
      <Card className='Card'>
        <Selector modo={modo} setModo={setModo} setValor={setValorInsertado}/>
        {panelModo({modo})}
      </Card>
    </section>  
  )
}

export default FormConfig