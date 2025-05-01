import React from 'react'
import { Button } from "antd";
import './botonDescarga.css'

const BotonDescarga = ({texto, color, icon, nombreArchivo}) => {
    const downloadSvgQRCode = () => {
        var _a;
        const svg =
            (_a = document.getElementById('qrActual')) === null || _a === void 0
            ? void 0
            : _a.querySelector('svg');
        const svgData = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        doDownload(url, nombreArchivo);
        };

        function doDownload(url, fileName) {
            const a = document.createElement('a');
            a.download = fileName;
            a.href = url;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    return (
        <Button 
            type="primary" 
            color={color} 
            block 
            className='boton' 
            icon={icon}
            onClick={downloadSvgQRCode}
            >
            {texto}
        </Button>
    )
}

export default BotonDescarga