import React from 'react';
import './contador.css';
import { useTranslation } from '../idiomaContext/idiomaContext.jsx';

const Contador = ({valor, datos}) => {
  const { t } = useTranslation()
  return (
    (typeof(datos.num_rows) == 'number' ? <div>{valor}/{datos.num_rows}</div> : <div>{t('CSVMsjPending')}</div>)
  )
}

export default Contador 