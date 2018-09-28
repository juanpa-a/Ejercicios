import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tarjeta from './components/Tarjeta'
import NavbarComponent from './components/Navbar'
import Contador from '.components/Contador'

class HolaMundo extends Component {
  render() {
    return (
        <div className="container">
            <Contador />
        <div/>    
    );
  }
}

export default HolaMundo;
