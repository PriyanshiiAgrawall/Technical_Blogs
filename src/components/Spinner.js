import React from "react";
import "./Spinner.css"
function Spinner() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <div className="font-bold px-[7px]"> Loading...</div>
        </div>
    );
}

export default Spinner;