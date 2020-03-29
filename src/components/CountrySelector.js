import React from 'react'

import './CountrySelector.css'

export default class CountrySelector extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.handleCountryChange(e.target.value)
  }

  render() {
    return (
      <div className="countrySelector">
        <p>See data from </p>
        <select className="select" onChange={this.handleChange} defaultValue={this.props.value}>
          <option value='all'>World</option>
          <option value='usa'>United States</option>
          <option value='china'>China</option>
          <option value='pakistan'>Pakistan</option>
          <option value='italy'>Italy</option>
        </select>
      </div>
    )
  }
}
