import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default function RegionSelector(props) {
  const handleChange = (e) => {
    props.handleRegionChange(e.target.value)
  }

  const menuItemsList = props.regions.map(item => 
      <MenuItem value={item.iso3} key={item.iso3}>{item.name}</MenuItem>
  )

  return(
    <React.Fragment>
      <InputLabel id='region'>Show results for</InputLabel>
      <Select
        labelId='region'
        value={props.value}
        onChange={handleChange}
      >
        {menuItemsList}
      </Select>
    </React.Fragment>
  )
}
