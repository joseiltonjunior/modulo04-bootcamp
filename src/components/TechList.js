import React, { Component } from 'react';

import TechItem from './TechItem';
class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Estudar para o bootcamp',
      'Estudar para a faculdade'
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {

    return (
      <div className="container">
        <h1>Painel de Tarefas</h1>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)} />
            ))}
          </ul>
          <input
            type="text"
            className="form-control required"
            placeholder="Nova tarefa"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button className="btn btn-info" type="submit">Cadastrar</button>
        </form>
      </div>
    )
  }
}

export default TechList;