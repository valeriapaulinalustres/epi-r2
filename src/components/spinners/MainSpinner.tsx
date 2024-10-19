import { useState } from "react";
import { ClipLoader } from "react-spinners";

interface Props {
  preview:any
}


const MainSpinner = () => {

    const [color, setColor] = useState<string>('#ffffff');

    const override = {
      display: 'block',
      margin: '0 auto',
    };


  return (
    <>
    {/* {preview} */}
    <div>
      <ClipLoader
        color={color}
        cssOverride={override}
        // size={30}
        // width={300}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </>
  );
}

export default MainSpinner