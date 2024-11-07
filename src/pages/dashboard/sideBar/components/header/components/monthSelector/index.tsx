import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useMainContext } from "../../../../../../../contexts/contextHooks/useMainContext";
import { monthList } from "./data";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MonthSelector() {
  const { months, setMonths } = useMainContext();

  const handleChange = (event: SelectChangeEvent<typeof months>) => {
    const {
      target: { value },
    } = event;
    setMonths(typeof value === "string" ? value.split(",") : value);
  };
  console.log("months", months);
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }} size="small">
        <InputLabel id="demo-multiple-checkbox-label">Mes</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={months}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {monthList.map((name, index) => (
            <MenuItem key={index} value={name}>
              <Checkbox checked={months.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
