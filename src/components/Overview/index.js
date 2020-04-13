import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

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
    width: '100%',
  },
}))

export default function Overview(props) {
  const classes = useStyles()
  const {
    cases,
    recovered,
    deaths,
  } = props.data  

  return(
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid container item xs={6} md={12}>
          <Paper className={classes.paper}>
            <Typography component='h2' variant='h6' color='primary' gutterBottom>
              Total Confirmed
            </Typography>
            <Typography component='p' variant='h4'>
              {cases}              
            </Typography>
          </Paper>
        </Grid>
        <Grid container item xs={6} md={12}>
          <Paper className={classes.paper}>
            <Typography component='h2' variant='h6' color='primary' gutterBottom>
              Recovered
            </Typography>
            <Typography component='p' variant='h4'>
              {recovered}
            </Typography>
          </Paper>
        </Grid>
        <Grid container item xs={6} md={12}>
          <Paper className={classes.paper}>
            <Typography component='h2' variant='h6' color='primary' gutterBottom>
              Deaths 
            </Typography>
            <Typography component='p' variant='h4'>
              {deaths}
            </Typography>
          </Paper>
        </Grid>
        <Grid container item xs={6} md={12} spacing={1}>
          <Paper className={classes.paper}>
            <Grid container direction='row' alignItems='baseline' justify='space-between'>
              <Grid item xs={6}>
                <Typography component='h2' variant='subtitle2' color='primary' gutterBottom>
                  Recovery Rate: 
                </Typography>
                <Typography component='p' variant='h4'>
                  {Math.round((recovered / cases * 100) * 10) / 10}% 
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography component='h2' variant='subtitle2' color='primary' gutterBottom>
                  Fatality Rate: 
                </Typography>
                <Typography component='p' variant='h4'>
                  {Math.round((deaths / cases * 100) * 10) / 10}% 
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
