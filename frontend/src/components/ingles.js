import React, { Component } from 'react'

export default class Ingles extends Component {
  render() {
    return (
        <div className="row justify-content-center align-items-center vh-100" style={{marginTop:"70px"}}>
          <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">        
            <h1><span><strong>Curso de Inglés Personalizada</strong></span></h1>
            <p class="lead"><strong><span>Todas las clases son presenciales con profesores nacionales y extranjeros titulados en universidades de distintas partes del mundo.</span></strong></p>   
          </div>

          <div class="col-sm-5 col-md-4">
            <div class="mt--1">
              <h4 class="color--primary-1">Programa</h4>
              <p><span>✔&nbsp;</span>Nivel 1: “Básico”</p>
                        <p><span>✔&nbsp;</span>Nivel 2: “Intermedio”</p>
                        <p><span>✔&nbsp;</span>Nivel 3: “Avanzado”</p>
                      <h3><span><strong>Área de aprendizaje</strong></span></h3>
                        <p><span>✔&nbsp;</span>“Oral”</p>
                        <p><span>✔&nbsp;</span>“Escrito”</p>
                        <p><span>✔&nbsp;</span>“Conversación: nativo, norteamericano y británico.”</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
    )
  }
}
