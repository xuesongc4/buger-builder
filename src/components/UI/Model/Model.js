import React from 'react';
import classes from './Model.module.css';
import Aux from '../../../hoc/Auxilery/Auxilery'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Model] Did update');
    }

    render(){
        return (
            <Aux>
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)':'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    {this.props.children}
                </div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
            </Aux>

        )
    }
}

export default Modal;