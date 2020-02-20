import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) =>{
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label} {props.qty}</div>
            <button className={classes.Less} onClick={()=>props.addMinusClick(props.type,"-")} disabled={props.disabled}>Less</button>
            <button className={classes.More} onClick={()=>props.addMinusClick(props.type,"+")}>More</button>
        </div>
    );
};
export default buildControl;