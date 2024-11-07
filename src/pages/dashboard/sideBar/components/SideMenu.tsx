import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { caps } from "./data";
import { useMainContext } from "../../../../contexts/contextHooks/useMainContext";

const drawerWidth = 240;

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function SideMenu({ open, setOpen }: Props) {
  const theme = useTheme();

  const { healthCenter, setHealthCenter } = useMainContext();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleChooseHealthCenter(name: string) {
    setHealthCenter(name);
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        marginTop: "75px",

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: "75px",
          overflowY: "auto",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {[{ id: 1, name: "Hospital de Morón" }].map((el, index) => (
          <ListItem
            key={index}
            disablePadding
            dense
            onClick={() => handleChooseHealthCenter(el.name)}
          >
            <ListItemButton dense>
              <ListItemIcon>
                <LocalHospitalIcon sx={{ color: "#FF7999" }} />
              </ListItemIcon>
              <ListItemText primary={el.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {caps.map((el, index) => (
          <ListItem
            key={index}
            disablePadding
            dense
            onClick={() => handleChooseHealthCenter(el.name)}
          >
            <ListItemButton dense>
              <ListItemIcon>
                <LocalHospitalIcon sx={{ color: "#FF7999" }} />
              </ListItemIcon>
              <ListItemText primary={el.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
