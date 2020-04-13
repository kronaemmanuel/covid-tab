import React from 'react'
import { ResponsiveLine } from '@nivo/line'

export default function Chart(props) {
  return(
    <ResponsiveLine data={props.data}   
      margin={{ top: 50, right: 40, bottom: 50, left:60 }}
      xScale={{
        type: 'time',
        format: '%m/%d/%Y',
        precisin: 'day'
      }}
      xFormat='time:%m/%d/%y'
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
        legend: `${props.legend}`,
        legendOffset: 0,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'nivo' }}
      pointSize={ 10 }
      pointColor={{ theme: 'background' }}
      pointBorderWidth={ 2 }
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel='y'
      pointLabelYOffset={ -12 }
      useMesh={ true }
      enableSlices='x'
      sliceTooltip= {({ slice }) => {
        return (
          <div style={{
            background: 'white',
            padding: '9px 12px',
            border: '1px solid #ccc'
          }}>
            <div><strong>Date: </strong>{slice.points[0].data.xFormatted}</div>
            {slice.points.map(point => (
              <div
                key={point.id}
                style={{
                  color: point.serieColor,
                  padding: '3px 0'
                }}
              >
                <strong>{point.serieId}</strong> [{point.data.yFormatted}]
              </div>
            ))}
          </div>
        )
      }}
    />
  )
}
