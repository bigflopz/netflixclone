import React from "react";
import "./Button.css"

function Button({name ,onClick}) {
    return(
        
        <button onClick={onClick} className="button">{name}</button>
        
        )
}
export default Button;