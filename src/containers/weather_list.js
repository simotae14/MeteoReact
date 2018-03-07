import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              Città
            </th>
            <th>
              Temperatura
            </th>
            <th>
              Pressione
            </th>
            <th>
              Umidità
            </th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  };
}

function mapStateToProps({ weather }) {
  return { weather };
}
