import React from 'react';
import './test1.css';

export function headerinner({address,title,num,children}){
    return(
        <div className="headInfo">
            <div className="title">
                <div className="addr">
                    <span></span>
                    <p>{address}</p>
                </div>
                <div className="enrich">
                    <h3>title</h3>
                </div>
                <div className="num">
                    <span></span>
                    <i>num</i>
                </div>
            </div>
            {children}
        </div>      
    )    
};
export function headericon({imgIcon,titleIcon}){
    return(
        <li>
            <img src={imgIcon} alt=""/>
            <p>{titleIcon}</p>
        </li>
    )
};

