import React, { Component } from 'react';

export default class Horario extends Component {
  constructor() {
    super();
    this.state = {
      diasSemana: ['Día', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
      horarios: [
        { hora: '09:00 AM', disponible: true, lunes: true, martes: false, miercoles: true, jueves: false, viernes: true },
        { hora: '10:00 AM', disponible: true, lunes: false, martes: true, miercoles: false, jueves: true, viernes: false },
        { hora: '11:00 AM', disponible: false, lunes: true, martes: true, miercoles: false, jueves: true, viernes: false },
        { hora: '12:00 PM', disponible: true, lunes: true, martes: false, miercoles: true, jueves: false, viernes: true },
        { hora: '13:00 PM', disponible: true, lunes: false, martes: true, miercoles: false, jueves: false, viernes: true },
        { hora: '14:00 PM', disponible: false, lunes: true, martes: true, miercoles: false, jueves: false, viernes: true },
        { hora: '15:00 PM', disponible: true, lunes: true, martes: false, miercoles: true, jueves: true, viernes: false },
        { hora: '16:00 PM', disponible: true, lunes: false, martes: true, miercoles: false, jueves: false, viernes: true },
        { hora: '17:00 PM', disponible: false, lunes: true, martes: true, miercoles: false, jueves: false, viernes: true },
        { hora: '18:00 PM', disponible: true, lunes: true, martes: false, miercoles: true, jueves: false, viernes: true },
        { hora: '19:00 PM', disponible: true, lunes: false, martes: true, miercoles: false, jueves: false, viernes: true },
        { hora: '20:00 PM', disponible: false, lunes: true, martes: true, miercoles: false, jueves: false, viernes: true },
        { hora: '21:00 PM', disponible: true, lunes: true, martes: false, miercoles: true, jueves: true, viernes: false }
      ],
    };
  }

  render() {
    return (
      <div className="row justify-content-center align-items-center vh-100" style={{marginTop:"40px"}}>
        <h1>Horarios Disponibles</h1>
        <table>
          <thead>
            <tr>
              {this.state.diasSemana.map((dia, index) => (
                <th key={index}>{dia}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.horarios.map((horario, index) => (
              <tr key={index}>
                <td>{horario.hora}</td>
                <td className={horario.lunes ? (horario.disponible ? 'disponible' : 'no-disponible') : ''}>
                  {horario.lunes ? (horario.disponible ? 'Disponible' : 'No disponible') : ''}
                </td>

                <td className={horario.martes ? (horario.disponible ? 'disponible' : 'no-disponible') : ''}>
                  {horario.martes ? (horario.disponible ? 'Disponible' : 'No disponible') : ''}
                </td>

                <td className={horario.miercoles ? (horario.disponible ? 'disponible' : 'no-disponible') : ''}>
                  {horario.miercoles ? (horario.disponible ? 'Disponible' : 'No disponible') : ''}
                </td>

                <td className={horario.jueves ? (horario.disponible ? 'disponible' : 'no-disponible') : ''}>
                  {horario.jueves ? (horario.disponible ? 'Disponible' : 'No disponible') : ''}
                </td>

                <td className={horario.viernes ? (horario.disponible ? 'disponible' : 'no-disponible') : ''}>
                  {horario.viernes ? (horario.disponible ? 'Disponible' : 'No disponible') : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
