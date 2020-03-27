import React from 'react'

import Chart from './Chart'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      cases: 0,
      deaths: 0,
      recovered: 0,
      data: {}
    }
  }

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('https://corona.lmao.ninja/all', requestOptions)
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState({
          cases: data.cases,
          deaths: data.deaths,
          recovered: data.recovered,
          data
        })
      })
      .catch(error => console.log('Error fetching data: ', error));
  }

  render() {
    return(
      <div>
        <h1>Cases: {this.state.cases}</h1>
        <h1>Recovered: {this.state.recovered}</h1>
        <h1>Deaths: {this.state.deaths}</h1>
        
        <Chart country="China"/>
      </div>
    )
  }
}
