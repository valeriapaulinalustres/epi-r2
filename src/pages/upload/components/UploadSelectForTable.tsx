import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { services } from '../data';

interface Props {
  state: any;
  setState: any;
  index: any
}

export default function UploadSelectForTable ({state, setState, index}:Props) {


  const handleChange = (event: SelectChangeEvent) => {
    const prevState = [...state]
    prevState.splice(index, 0, event.target.value)
    setState(prevState);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">

      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={state[index]}
    
        onChange={handleChange}
        sx={{width: '300px', height:'30px'}}
      >{
      ( services.map((el:any, index:any)=>{
            return (
              <MenuItem value={el} key={index}>{el}</MenuItem>
            )
          }))
        
        }

      </Select>
    </FormControl>
  );
}