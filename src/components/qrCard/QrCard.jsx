import React, { useEffect } from 'react';
import { QRCode } from "antd";
import { Card } from 'antd';
import './qrCard.css';
import BotonDescarga from '../botonDescarga/BotonDescarga.jsx';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { useTranslation } from '../idiomaContext/idiomaContext.jsx';

const QrCard = ({valorInsertado}) => {
  const { t } = useTranslation()
  useEffect(() => {
    console.log("Valor a renderizar: "+valorInsertado)
  },[valorInsertado])

  return (
    <section>
      <Card className='sectionQrCard'>
          <QRCode value={valorInsertado} className='QrCard' status="active" type="canvas" id="qrActual" bordered={false} size={250}/>
          <BotonDescarga texto={t('downloadButton')} color={"danger"} icon={<CloudDownloadOutlined />} nombreArchivo={"QrCatch-"+valorInsertado+".jpg"}></BotonDescarga>
      </Card>
    </section>
  )
}

export default QrCard