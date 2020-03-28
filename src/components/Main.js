import React from 'react'

import Chart from './Chart'
import CountrySelector from './CountrySelector'
import Overview from './Overview'
import './Main.css'

export default class Main extends React.Component {
  constructor() {
    super()
    this.handleCountryChange = this.handleCountryChange.bind(this)
    this.state = {
      country: 'all',
      cases: 0,
      deaths: 0,
      recovered: 0,
      data: {}
    }
  }

  handleCountryChange(country) {
    this.setState({country})
  }

  render() {
    const { country } = this.state;
    return(
      <div>
        <CountrySelector value={ country } handleCountryChange={this.handleCountryChange}/> 
        <Overview country={this.state.country} />
        <div className="chartsContainer">
          <Chart country={this.state.country} legend='deaths'/>
          <Chart country={this.state.country} legend='cases'/>
        </div>
      </div>
    )
  }
}
