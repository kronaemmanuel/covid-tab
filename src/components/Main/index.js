import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import CountrySelector from '../CountrySelector'
import Chart from '../Chart'
import Overview from '../Overview'

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

  const [countryList, setCountryList] = React.useState([])
  const [country, setCountry] = React.useState('all')
  const handleCountryChange = country => {
    setCountry(country) 
  }


  React.useEffect(() => {
    const fetchCountriesList = async () => {
      await
        fetch('https://corona.lmao.ninja/countries?sort=country')
        .then(async response => response.json())
        .then(data => {
          let list = []
          list.push({
            iso3: 'all',
            country: 'World'
          })
          data.forEach(item => {
            list.push({
              iso3: item.countryInfo.iso3,
              country: country
            })  
          })
          console.log(list)
          setCountryList(list)
        })
        .catch(err => console.log('Error while fetching data', err))
    }
    fetchCountriesList()
  }, [])

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <CountrySelector countries={countryList} value={country} handleCountryChange={handleCountryChange}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            {/*<Chart country={country} legend='deaths'/>*/}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Overview country={country}/>
        </Grid>
      </Grid>
    </Container>
  )
}
