import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default function CountrySelector(props) {
  const handleChange = (e) => {
    props.handleCountryChange(e.target.value)
  }

  const menuItemsList = props.countries.map(item => 
      <MenuItem value={item.iso3} key={item.iso3}>{item.country}</MenuItem>
  )

  return(
    <React.Fragment>
      <InputLabel id='country'>Show results for</InputLabel>
      <Select
        labelId='country'
        value={props.value}
        onChange={handleChange}
      >
        {menuItemsList}
      </Select>
    </React.Fragment>
  )
}
