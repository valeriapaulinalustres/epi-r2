import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  label: string;
  state: any;
  setState: any;
  options:any
}

export default function UploadSelect ({label, state, setState, options}:Props) {


  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={state}
        label={label}
        onChange={handleChange}
        sx={{width: '300px'}}
      >
        {label === "Centro de Salud"
         ? ( options.map((el:any, index:any)=>{
            return (
              <MenuItem value={el.id} key={index}>{el.name}</MenuItem>
            )
          }))
          : ( options.map((el:any, index:any)=>{
            return (
              <MenuItem value={el} key={index}>{el}</MenuItem>
            )
          }))
        }

      </Select>
    </FormControl>
  );
}