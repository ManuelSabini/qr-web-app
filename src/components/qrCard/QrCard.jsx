import React, { useEffect, useState } from 'react';
import { QRCode } from "antd";
import { Card } from 'antd';
import './qrCard.css';
import BotonDescarga from '../botonDescarga/BotonDescarga.jsx';
import { CloudDownloadOutlined } from '@ant-design/icons';

const QrCard = ({valorInsertado}) => {
  useEffect(() => {
    console.log("Valor a renderizar: "+valorInsertado)
  },[valorInsertado])

  return (
    <section>
      <Card className='sectionQrCard'>
          <QRCode value={valorInsertado} className='QrCard' status="active" type="svg" id="qrActual" size={250}/>
          <BotonDescarga texto={"Descargar"} color={"danger"} icon={<CloudDownloadOutlined />} nombreArchivo={"QrCatch-"+valorInsertado+".svg"}></BotonDescarga>
      </Card>
    </section>
  )
}

export default QrCard