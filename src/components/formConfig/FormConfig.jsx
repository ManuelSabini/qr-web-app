import React from 'react'
import { Card } from 'antd';
import './formConfig.css';
import { Input } from 'antd';
import Selector from '../selector/Selector.jsx';

const FormConfig = ({setValorInsertado}) => {
  const cambiosValores = (event) => {
    setValorInsertado(event.target.value);
  };
  return (
    <section>
      <Card className='Card'>
{/*         <Selector /> */}
          <Input addonBefore="Valor:" placeholder="Ingrese un valor a generar..." onChange={cambiosValores}/>
      </Card>
    </section>  
  )
}

export default FormConfig