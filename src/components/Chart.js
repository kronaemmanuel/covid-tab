import React from 'react'
import { ResponsiveLine } from '@nivo/line'

export default class Chart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country: this.props.country,
      data: []
    }
  }

  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://corona.lmao.ninja/v2/historical/${this.props.country}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        const cases = result.timeline.cases
        let fdata = []
        fdata.push({ id: 'cases', data: [] })

        for (let [date, num] of Object.entries(cases)) {
          fdata[0].data.push({ x: date, y: num })
        }
        
        this.setState({ data: fdata });
      })
      .catch(error => console.log('error', error))
  }

  render() {
    return(
      <div style={{height: '300px', width: '100%'}}>
        <ResponsiveLine data={this.state.data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{
            type: 'time',
            format: '%m/%d/%Y',
            precision: 'day',
          }}
          xFormat="time:%m/%d/%Y"
            axisBottom={{
            orient: 'bottom',
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Date',
            legendOffset: 36,
            legendPosition: 'middle',
              format: '%b %d'
        }}      
                 axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
          color={{ scheme: 'nivo' }}
          pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        />
      </div>
    )
  }
}
