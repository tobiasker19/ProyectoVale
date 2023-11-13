import React, { Component } from 'react'

export default class Computacion extends Component {
    render() {
      return (
        <div className="row justify-content-center align-items-center vh-100" style={{marginTop:"70px"}}>
          <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">        
            <h1><span><strong>Curso de Computación Personalizada</strong></span></h1>
            <p class="lead"><strong><span>En Aicc te ofrecemos la mejor enseñanza, recibe capacitación de computación donde podrás aprender y adquirir grandes conocimientos.</span></strong></p>   
          </div>

          <div class="col-sm-5 col-md-4">
            <div class="mt--1">
              <h4 class="color--primary-1">Clases de Windows</h4>
              <h4 class="color--primary-1">Clases de Word</h4>
              <ul>
                <li>Aprende todas la opciones y técnicas que te brinda las herramientas de Word, el programa mas usado para realizar documentos escritos.</li>
              </ul>
              <h4 class="color--primary-1">Clases de Internet</h4>
              <ul>
                <li>Conoce los inicios del Internet, descubre la forma correcta para realizar investigaciones y un si fin de formas para navegar en el mundo digital.</li>
              </ul>
              <h4 class="color--primary-1">Clases de Excel</h4>
              <ul>
                <li>Aprende todas la opciones y técnicas que te brinda las herramientas de <span color="#252525">Excel</span>, el programa mas usado para realizar documentos escritos.</li>
              </ul>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      )
    }
  }