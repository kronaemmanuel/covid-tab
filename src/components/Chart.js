import React from 'react'
import { ResponsiveLine } from '@nivo/line'

export default class Chart extends React.Component {
  constructor(props) {
    super(props)
    this.fetchDataFor = this.fetchDataFor.bind(this)
    this.state = {
      data: []
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.country !== prevProps.country) {
      this.fetchDataFor(this.props.country, this.props.legend)
    }
  }

  fetchDataFor(country, legend) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://corona.lmao.ninja/v2/historical/${country}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        let fdata = []
        fdata.push({ id: `${legend}`, data: [] })

        for (let [date, num] of Object.entries(result.timeline[`${legend}`])) {
          fdata[0].data.push({ x: date, y: num })
        }
        
        this.setState({ data: fdata });
      })
      .catch(error => console.log('error', error))
  }

  render() {
    return(
      <div style={{height: '300px', width: '50%', fontSize: '0.5em'}}>
        <ResponsiveLine data={this.state.data}
          margin={{ top: 50, right: 100, bottom: 50, left: 50 }}
          xScale={{
            type: 'time',
            format: '%m/%d/%Y',
            precision: 'day',
          }}
          xFormat="time:%m/%d/%Y"
            axisBottom={{
            orient: 'bottom',
            tickPadding: 5,
            tickRotation: -90,
            legend: 'Date',
            legendOffset: 0,
            legendPosition: 'end',
              format: '%b %d'
        }}      
                 axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
                   legend: `${this.props.legend}`,
            legendOffset: 0,
            legendPosition: 'top'
        }}
          colors='#ffb174'
          pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        />
      </div>
    )
  }
}
