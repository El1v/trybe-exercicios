import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }

    this.event1 = this.event1.bind(this);
    this.event2 = this.event2.bind(this);
    this.event3 = this.event3.bind(this);

    // this.state = {
    //   numeroDeCliques: 0,
    // }
  }

   event1 () {
      this.setState((estadoAnterior, _props) => ({
         numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
      }))
     }

     event2 () {
      this.setState((estadoAnterior, _props) => ({
         numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
      }
      ))
     }

     event3 () {
      this.setState((estadoAnterior, _props) => ({
         numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
      }))
     }

     //função pra trocar a cor se for impar vs par
     getButtonColor(num) {
       return num % 2 === 0 ? 'green' : 'white';
     }

   render(){
    //destruturação do this.state 
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;
    return (
      <div>
        <button onClick={this.event1} style={{backgroundColor: this.getButtonColor(numeroDeCliques1)}}>Botão 1 | Count = {this.state.numeroDeCliques1}</button>
        <button onClick={this.event2} style={{backgroundColor: this.getButtonColor(numeroDeCliques2)}}>Botão 2 | Count = {this.state.numeroDeCliques2}</button>
        <button onClick={this.event3} style={{backgroundColor: this.getButtonColor(numeroDeCliques3)}}>Botão 3 | Count = {this.state.numeroDeCliques3}</button>
      </div>
    );
   }
}

export default App;
