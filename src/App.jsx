import React , { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import FormConfig from './components/formConfig/FormConfig.jsx'
import QrCard from './components/qrCard/QrCard.jsx'
import Footer from './components/footer/Footer.jsx'


function App() {
  const [valor, setValor] = useState("")
  const [estado, setEstado] = useState("loading")

  useEffect(() => {
    valor.length==0 ? setEstado("loading") : setEstado("active")
  },[valor])

  return (
    <>
      <Header/>
      <main>
        <FormConfig setValorInsertado={setValor} valor={valor}/>
        {estado == "active" ? <QrCard valorInsertado={valor}/> : null}
      </main>
      <Footer/>
    </>
  ) 
}

export default App
