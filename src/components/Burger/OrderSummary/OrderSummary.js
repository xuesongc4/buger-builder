import React from "react";
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Auxilery/Auxilery'

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map((key) => {
        return (<li key={key}>
            <span style={{textTransform: 'capitalize'}}>{key}: </span>{props.ingredients[key]}
        </li>)
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>
                A delicious burger with the following ingredients:
            </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>
                <strong>
                   Total Price: <u>${ props.totalPrice.toFixed(2)}</u>
                </strong>
            </p>
            <p>Continue to Checkout?</p>
            <Button type="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button type="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;