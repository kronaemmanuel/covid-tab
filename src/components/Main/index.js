import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import RegionSelector from '../RegionSelector'
import Chart from '../Chart'
import Overview from '../Overview'

var _ = require('lodash/core')

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 500,
  },
}))

export default function Main() {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  const [legend, setLegend] = React.useState('deaths')
  const handleLegendChange = legend => {
    setLegend(legend)
  }
  
  const [region, setRegion] = React.useState('all')
  const handleRegionChange = region => {
    setRegion(region)
  }

  const [countryData, setCountryData] = React.useState([])
  React.useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/countries')
      const data = await response.json()
      let list = []
      data.forEach(item => {
        if (item.countryInfo.iso3 != null) {
          list.push({
            iso3: item.countryInfo.iso3,
            country: item.country,
            cases: item.cases,
            deaths: item.deaths,
            recovered: item.recovered,
            updated: item.updated
          })
        }
      })
      setCountryData(list.reverse())
      console.log('Fetching Country Data')
    }

    fetchCountryData()
  }, [])

  const [worldData, setWorldData] = React.useState({})
  React.useEffect(() => {
    const fetchWorldData = async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/all')
      const data = await response.json()
      setWorldData({
        cases: data.cases,
        deaths: data.deaths,
        recovered: data.recovered,
        updated: data.updated
      })
      console.log('Fetching World Data')
    }

    fetchWorldData()
  }, [])

  const [regionList, setRegionList] = React.useState([])
  React.useEffect(() => {
    const createRegionList = () => {
      let list = []
      list.push({
        name: 'World',
        iso3: 'all'
      })
      countryData.forEach(item => {
        list.push({
          name: item.country,
          iso3: item.iso3
        })
      })
      setRegionList(list)
      console.log('Setting Region List')
    }

    createRegionList()
  }, [countryData])

  const [overviewData, setOverviewData] = React.useState({})
  React.useEffect(() => {
    if (region === 'all') {
      const lastUpdated = new Date(worldData.updated).toDateString()
      setOverviewData({
        cases: worldData.cases,
        recovered: worldData.recovered,
        deaths: worldData.deaths,
        updated: lastUpdated
      })
    } else {
      const country = countryData.find(item => item.iso3 === region)
      const lastUpdated = new Date(country.updated).toDateString()
      setOverviewData({
        cases: country.cases,
        recovered: country.recovered,
        deaths: country.deaths,
        updated: lastUpdated
      })
    }
  }, [region, worldData, countryData])

  const [historicalData, setHistoricalData] = React.useState({})

  React.useEffect(() => {
    const fetchHistoricalData = async () => {
      const response = await fetch(`https://corona.lmao.ninja/v2/historical/${region}`)
      const data = await response.json()
      if (region === 'all'){
        setHistoricalData({
          cases: data.cases,
          deaths: data.deaths,
          recovered: data.recovered
        })
      }
      else {
        setHistoricalData({
          cases: data.timeline.cases,
          deaths: data.timeline.deaths,
          recovered: data.timeline.recovered
        })
      }
    }
    
    fetchHistoricalData()
    console.log('Fetching Historical Data')
  }, [region])

  const [chartData, setChartData] = React.useState([])
  React.useEffect(() => {
    let compiledData = []
    if (_.isEmpty(historicalData)){
      console.log('No historical data present')
    } else {
      for(let [date, num] of Object.entries(historicalData[`${legend}`])) {
        compiledData.push({
          x: date,
          y: num
        })
      }
      setChartData([{
        id: `${region === 'all' ? 'World' : region}`,
        data: compiledData
      }])
      console.log('Compiling Chart Data')
    }
  }, [historicalData, legend, region])

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RegionSelector regions={regionList} value={region} handleRegionChange={handleRegionChange} legend={legend} handleLegendChange={handleLegendChange}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart data={chartData} legend={legend}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Typography variant='subtitle2' colorTextSecondary>Last Updated: {overviewData.updated}</Typography>
          <Overview country={region} data={overviewData}/>
        </Grid>
      </Grid>
    </Container>
  )
}
