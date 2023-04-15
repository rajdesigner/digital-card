import React from "react";

export default function Button({title, classname}){
    return(
        <button className={classname}>{title}</button>
    )
}