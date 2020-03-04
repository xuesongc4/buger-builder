import React from 'react';
import Aux from '../Auxilery/Auxilery'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends React.Component{
    state = {
        showSideDrawer: false
    };

    sideDrawerToggleHandler = () =>{
        this.setState( prevState => ({showSideDrawer:!prevState.showSideDrawer}));
    }

    render(){
      return (
            <Aux>
                <Toolbar toggle={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggleHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout