import React from "react";
import "./ButtonIcon.css"


function ButtonIcon({text ,icon}){
    return (
            <button className="buttonicon">
                {icon && <span className="button-icon"><img src={icon}/></span>}
            </button>
        )
}
export default ButtonIcon;