import React from "react";

export default function StaticContent({title, text}){
    return(
        <div className="static--container"> 
            <h2 className="static--title">{title}</h2>
            <h2 className="static--text">{text}</h2>
        </div>
    )
}