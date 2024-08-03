//import React from "react";

const Zflip = ({children}) => {
    console.log(children);
    return(
        <div className="z-flip w-[200px] h-[200px]  top-2/4">
            <p>{children}</p>
        </div>
    );
};

export default Zflip;