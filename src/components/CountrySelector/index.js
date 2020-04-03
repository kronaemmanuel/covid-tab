import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default function CountrySelector(props) {
  const handleChange = (e) => {
    props.handleCountryChange(e.target.value)
  }

  const menuItemsList = props.countries.map(country =>
    <MenuItem value={country.value}>{country.countryName}</MenuItem>
  )

  return(
    <React.Fragment>
      <InputLabel id='country'>Show result for</InputLabel>
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
