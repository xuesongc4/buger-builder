import React from 'react'
import PropTypes from 'prop-types'

import classes from './BurgerParts.module.css'

class BurgerParts extends React.Component{
    render(){
        let part = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                part = <div className={classes.BreadBottom}/>;
                break;
            case ('bread-top'):
                part = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}/>
                        <div className={classes.Seeds2}/>
                    </div>
                );
                break;
            case ('meat'):
                part = <div className={classes.Meat}/>;
                break;
            case ('cheese'):
                part = <div className={classes.Cheese}/>;
                break;
            case ('salad'):
                part = <div className={classes.Salad}/>;
                break;
            case ('bacon'):
                part = <div className={classes.Bacon}/>;
                break;
            default:
                part = null;
        }
        return part;
    }
}

export default BurgerParts;

BurgerParts.propTypes = {
    type: PropTypes.string.isRequired
};