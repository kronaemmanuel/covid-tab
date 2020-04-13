import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) =>({
  margin: {
    margin: theme.spacing(1)
  },
  centeredContainer: {
    textAlign: 'center'
  }
}))

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)'
    }
  }
}))(InputBase)

export default function RegionSelector(props) {
  const classes = useStyles()

  const handleRegionChange = (e) => {
    props.handleRegionChange(e.target.value)
  }

  const handleLegendChange = (e) => {
    props.handleLegendChange(e.target.value)
  }
  
  const regionsList = props.regions.map(item => 
      <MenuItem value={item.iso3} key={item.iso3}>{item.name}</MenuItem>
  )
  
  const legends = ['cases', 'deaths', 'recovered']
  const legendsList = legends.map(item => 
    <MenuItem value={item} key={item}>{item}</MenuItem>
  )

  return(
    <Grid container direction='row' justify='center' alignItems='center'>
      <Typography variant='h6' display='inline'>Show</Typography>
      <FormControl className={classes.margin}>
        <Select
          labelId='region'
          value={props.legend}
          input={<BootstrapInput />}
          onChange={handleLegendChange}
          autoWidth
        >
        {legendsList}
        </Select>
      </FormControl>
      <Typography variant='h6' display='inline'>From</Typography>
      <FormControl className={classes.margin}>
        <Select
          labelId='region'
          value={props.value}
          onChange={handleRegionChange}
          input={<BootstrapInput />}
          autoWidth
        >
        {regionsList}
        </Select>
      </FormControl>
    </Grid>
  )
}
