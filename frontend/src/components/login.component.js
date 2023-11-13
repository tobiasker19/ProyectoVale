import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      rememberMe: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://backend:8000/api/login/', {
        email: this.state.email,
        password: this.state.password,
      });

      // Procesa la respuesta del servidor
      console.log(response.data);

      // Puedes redirigir o realizar otras acciones después de un inicio de sesión exitoso
    } catch (error) {
      // Maneja errores
      console.error('Error de inicio de sesión:', error);
    }
  };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleLogin}>
            <h3>Sign In</h3>

            <div className="mb-3">
              <label>Email </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Contraseña </label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="custom-control-input"
                  id="customCheck1"
                  checked={this.state.rememberMe}
                  onChange={this.handleChange}
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Recuerdame
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>
            </div>
            <p className="forgot-password text-right">
              ¿Olvidaste la <a href="#">contraseña?</a>
            </p>
            <p>
              ¿Todavía no estás registrado? <Link to="/sign-up">Registrarse</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
