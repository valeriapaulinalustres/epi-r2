
import { Outlet } from "react-router-dom";
import NavBar from ".";
import styled from "styled-components";


const PrivateLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet /> {/* Esto renderizará el contenido de las rutas hijas */}
    </>
  );
};

export default PrivateLayout;
