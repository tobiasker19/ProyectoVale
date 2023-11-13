import React, { Component } from 'react'

export default class Secretariado extends Component {
  render() {
    return (
      <div className="row justify-content-center align-items-center vh-100" style={{marginTop:"70px"}}>
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">        
          <h1><span><strong>Curso de Secretariado Computacional Bilingüe Contable</strong></span></h1>
          <p class="lead"><strong><span>El curso busca potenciar habilidades técnicas y destrezas, promoviendo la eficiencia en el trabajo y el compromiso ético, además de enseñar a diseñar esquemas de trabajo individual y de equipo.</span></strong></p>   
        </div>

        <div class="col-sm-5 col-md-4">
          <div class="mt--1">
            <h4 class="color--primary-1">Programa</h4>
            <p><span>✔&nbsp;</span>“Computacional”</p>
                              <p><span>✔&nbsp;</span>“Bilingüe”</p>
                              <p><span>✔&nbsp;</span>“Contable”</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    )
  }
}
