import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    // assegno il contesto del COMPONENT alla funzione onInputChange
    this.onInputChange = this.onInputChange.bind(this);
  }

  // definisco handler dell'onChange
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
        <form className="input-group">
          <input
            placeholder="Ottieni il meteo di cinque giorni delle tue città preferite."
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
    );
  }
}
