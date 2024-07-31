//import React from "react";

const WatchDial = ({children}) => {
    console.log(children);
    return(
        <div className="watch-dial w-[200px] h-[200px]  top-2/4">
            <p>{children}</p>
        </div>
    );
};

export default WatchDial;