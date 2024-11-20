import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { rosa } from "../../utils/colors";

const MainSpinner = () => {

    const override = {
      display: 'block',
      margin: '0 auto',
    };

  return (
    <div>
      <ClipLoader
        color={rosa}
        cssOverride={override}
        // size={30}
        // width={300}
        aria-label="Loading Spinner"
        data-testid="loader"
        loading={true}
      />
    </div>  
  );
}

export default MainSpinner