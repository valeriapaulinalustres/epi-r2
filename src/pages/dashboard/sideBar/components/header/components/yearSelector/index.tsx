import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useMainContext } from '../../../../../../../contexts/contextHooks/useMainContext';
import { yearsList } from './data';

export default function YearSelector() {

  const {year, setYear} = useMainContext()

  const handleChange = (event: SelectChangeEvent) => {
    setYear(parseInt(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Año</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={year.toString()}
        label="Age"
        onChange={handleChange}
      > 
      {
        yearsList.map((el, index)=>{
          return  <MenuItem key={index} value={el}>{el}</MenuItem>
        })
      }
       
      </Select>
    </FormControl>
  );
}
