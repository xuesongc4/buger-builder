import React from 'react';
import Aux from '../../hoc/Auxilery'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const PART_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

class BurgerBuilder extends React.Component {
    state={
        parts:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4,
        purchase: false
    };

    updatePurchaseState = (parts) => {
        const sum = Object.keys(parts).map((key)=>parts[key]).reduce((sum,el)=>sum+el,0);
        console.log(sum, parts);
        this.setState({purchase: sum>0})
    };

    managePartsClick = (type,action) => {
        let updatedState = {};

        if(action==="+"){
            this.setState((prevState) => {
                const newState = {...prevState.parts};
                newState[type] = newState[type]+1;
                updatedState = newState;
                return { parts:{...prevState.parts, ...newState},
                    totalPrice:  prevState.totalPrice + PART_PRICES[type]
                }
            },()=>{
                this.updatePurchaseState(updatedState);
            });

        }
        else{
            if(this.state.parts[type] === 0){
                return false
            }
            this.setState((prevState) => {
                const newState = {...prevState.parts};
                this.updatePurchaseState(newState);
                newState[type] = newState[type]-1;
                updatedState = newState;
                return { parts:{...prevState.parts, ...newState},
                    totalPrice:  prevState.totalPrice - PART_PRICES[type]
                }
            },()=>{
                this.updatePurchaseState(updatedState);
            });
        }
    };

    render(){
        const disableButton = {
            ...this.state.parts
        }
        for (let key in disableButton){
            disableButton[key] = disableButton[key] === 0;
        }
        return (
            <Aux>
               <Burger parts={this.state.parts}/>
                <BuildControls
                    price={this.state.totalPrice}
                    disabled={disableButton}
                    qty={this.state.parts}
                    addMinusClick={this.managePartsClick}
                    updatePurchaseState={this.updatePurchaseState}
                    purchase={this.state.purchase}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;