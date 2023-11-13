import React, { Component } from 'react'

export default class Peluqueria extends Component {
    render() {
      return (
        <div className="row justify-content-center align-items-center vh-100" style={{marginTop:"70px"}}>
          <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">        
            <h1><span><strong>Curso de Peluquería Unisex</strong></span></h1>
            <p class="lead"><strong><span>Aprende sobre la últimas tendencias de estilismo: tinturas, alisados químicos, mechas-visos, peinados, cortes de dama y varón.</span></strong></p>   
          </div>

          <div class="col-sm-5 col-md-4">
            <div class="mt--1">
              <h4 class="color--primary-1">Programa</h4>
              <p><span>✔&nbsp;</span>Módulo 1: “Ética Profesional”</p>
                                <p><span>✔&nbsp;</span>Módulo 2: “Química Capilar”</p>
                                <p><span>✔&nbsp;</span>Módulo 3: “Fisiología del Cabello”</p>
                                <p><span>✔&nbsp;</span>Módulo 4: “Peluquería Clásica”</p>
                                <p><span>✔&nbsp;</span>Módulo 5: “Peluquería Dama”</p>
                                <p><span>✔&nbsp;</span>Módulo 6: “Peluquería Varón”</p>
                                <p><span>✔&nbsp;</span>Módulo 7: “Colorimetría”</p>
                                <p><span>✔&nbsp;</span>Módulo 8: “Decoloración”</p>
                                <p><span>✔&nbsp;</span>Módulo 9: “Ondulación y Volumen”</p>
                                <p><span>✔&nbsp;</span>Módulo 10: “Alisado”</p>
                                <p><span>✔&nbsp;</span>Módulo 11: “El Cliente”</p>
                                <p>Para mayor información ir a contacto.</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      )
    }
  }