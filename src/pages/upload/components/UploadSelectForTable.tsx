import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { services } from '../data';

// interface Props {
//   state: any;
//   setState: any;
//   index: any
// }

// export default function UploadSelectForTable ({state, setState, index}:Props) {


//   const handleChange = (event: SelectChangeEvent) => {
//     const newState = [...state];
//     newState[index] = event.target.value; // Actualiza solo el índice correspondiente
//     setState(newState);
//   };
  

//   return (
//     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">

//       <Select
//         labelId="demo-select-small-label"
//         id="demo-select-small"
//         value={state[index]}
    
//         onChange={handleChange}
//         sx={{width: '300px', height:'30px'}}
//       >{
//       ( services.map((el:any, index:any)=>{
//             return (
//               <MenuItem value={el} key={index}>{el}</MenuItem>
//             )
//           }))
        
//         }

//       </Select>
//     </FormControl>
//   );
// }

interface Props {
  state: string[];
  setState: (newState: string[]) => void;
  index: number;
  onServiceChange: (newService: string, index: number) => void; // Nueva función
}

export default function UploadSelectForTable({
  state,
  setState,
  index,
  onServiceChange,
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    const newService = event.target.value;

    // Actualizar la lista de servicios seleccionados
    const newState = [...state];
    newState[index] = newService;
    setState(newState);

    // Informar al componente padre sobre el cambio
    onServiceChange(newService, index);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={state[index] || ""}
        onChange={handleChange}
        sx={{ width: "300px", height: "30px" }}
      >
        {services.map((el: any, idx: any) => (
          <MenuItem value={el} key={idx}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
