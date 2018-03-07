import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    // assegno il contesto del COMPONENT alla funzione onInputChange
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // definisco handler dell'onChange
  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // recuperare i Dati del meteo
    this.props.fetchWeather(this.state.term);
    // cancello contenuto dell'input
    this.setState({ term: '' });
  }

  render() {
    return (
        <form onSubmit={this.onFormSubmit} className="input-group">
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

// aggancio la action al Container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
