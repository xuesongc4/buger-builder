import React from 'react'
import classes from './Burger.module.css'
import BurgerParts from "./BurgerParts/BurgerParts";

const burger = (props) =>{
    let transformedParts = Object.keys(props.parts)
        .map((partKey)=>{
            return [...Array(props.parts[partKey])].map((_,i)=>{
                return <BurgerParts key={partKey+i} type={partKey}/>
            });
        })
        .reduce((total,item)=>{
            return [...total,...item];
        })
        .sort(() => Math.random() - 0.5);
    if (transformedParts.length === 0){
        transformedParts = <p>Please start buildings your burger!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerParts type="bread-top"/>
            {transformedParts}
            <BurgerParts type="bread-bottom"/>
        </div>
    );
}

export default burger