import React, {Component} from 'react';
import {NavigationContainer, NavItem} from './NavigationBar.style';

class Navigation extends Component {
    render(){
        return(
                <NavigationContainer>
                  <NavItem to="/">Home</NavItem>
                  <NavItem to="/projects">Projects</NavItem>
                  <NavItem to="/aboutMe">About Me</NavItem>
                </NavigationContainer>
               
        )
    }
}

export default Navigation;