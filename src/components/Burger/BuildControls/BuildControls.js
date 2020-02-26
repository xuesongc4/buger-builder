import React from "react";
import classes from './BuildControlls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) =>{
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {
                controls.map((control)=> (
                    <BuildControl
                        addMinusClick={props.addMinusClick}
                        key={control.label}
                        label={control.label}
                        type={control.type}
                        qty={props.qty[control.type]}
                        disabled={props.disabled[control.type]}
                    />
                    ))
            }
            <button
                onClick={props.ordered}
                disabled={!props.purchase}
                className={classes.OrderButton}
            >ORDER NOW</button>
        </div>
    )
}

export default buildControls