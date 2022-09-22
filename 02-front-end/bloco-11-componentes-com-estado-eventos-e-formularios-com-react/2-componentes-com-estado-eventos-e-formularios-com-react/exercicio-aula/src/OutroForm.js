import React from 'react';
import './Form.css'
import EstadoFavorito from './EstadoFavorito.js';
import Email from './Email';

class OutroForm extends React.Component {
  
  state = {
    estadoFavorito: '',
    email: '',
    nome: '',
    idade: '',
    vaiComparecer: false,
    palavraChaveFavorita: 'Componente',
    arquivoPng: ''
  }

  handleChange = ({target}) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value})
  }
  
  render () {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

            <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>
            
            <fieldset>
              <Email value={this.state.email} handleChange={this.handleChange}/>

              <input
              type="text"
              name="nome"
              placeholder='nome'
              value={this.state.nome}
              onChange={this.handleChange}
              />

              <input
              type="number"
              name="idade"
              placeholder='idade'
              value={this.state.idade}
              onChange={this.handleChange}
              />
            </fieldset>

            <label>
              Vai comparecer?
              <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
              />
            </label>

            <label>
              Escolha sua palavra chave favorita
              <select
                name="palavraChaveFavorita"
                value={this.state.palavraFavorita}
                onChange={this.handleChange}
              >
                <option value="Componente">Componente</option>
                <option value="Estado">Estado</option>
                <option value="Evento">Evento</option>
                <option value="Props">Props</option>
              </select>
            </label>

            <fieldset>
              <input 
              type="file"
              name="arquivoPng"
              value={this.state.arquivoPng}
              onChange={this.handleChange}
              />
            </fieldset>

        </form>
      </div>
    )
  }
};

export default OutroForm;