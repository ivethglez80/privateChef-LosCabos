import React from "react";
import wpplogo  from "./../../img/wpp-logo.png"

const SendWpp = () =>{
    return (
        <>
        <div className="bg-green-300 absolute">                
                <a href="https://api.whatsapp.com/send?phone=05491134318192&text=Hello, I would like to know more about the chef services!" target="_blank">
                <img src={wpplogo} className=""/>
                </a>
        </div>
        </>
    )
};

export default SendWpp;