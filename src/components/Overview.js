import React from 'react'

import './Overview.css'

export default class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.fetchDataFor = this.fetchDataFor.bind(this)
    this.state = {
      cases: 0,
      deaths: 0,
      recovered: 0
    }
  }

  componentDidMount() {
    this.fetchDataFor(this.props.country)
  }

  componentDidUpdate(prevProps) {
    if(this.props.country !== prevProps.country) {
      this.fetchDataFor(this.props.country)
    }
  }
  
  fetchDataFor(country) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    let fetchAddress = (country === 'all') ? 'https://corona.lmao.ninja/all' : `https://corona.lmao.ninja/countries/${country}`

    fetch(fetchAddress, requestOptions)
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
      <div className="overview">
        <p className="cases">Cases: <span>{this.state.cases}</span></p>
        <p className="deaths">Deaths: <span>{this.state.deaths}</span></p>
        <p className="recovered">Recovered: <span>{this.state.recovered}</span></p>
      </div>
    )
  }
}
