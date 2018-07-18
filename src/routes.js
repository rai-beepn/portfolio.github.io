import React from 'react';
// import {render} from 'react-dom';
import { IndexRoute, Router, Route } from 'react-router';
import {browserHistory, hashHistory} from 'react-router';
import Home from './container/Home/Home';
import App from './container/App/App';
import Projects from './container/Projects/Projects';
import AboutMe from './container/AboutMe/AboutMe';


// import Home from './container/Home';
// import App from './container/App';

// //yo navaye ni chalxa
// Router.prototype.componentWillReceiveProps = function(nextProps){
//         let components = [];
//         function grabComponents(element){
//          //this only works for JSX routes, adjust accordingly for plain JS config
//           if(element.props && element.props.component){
//                   components.push(element.props.component);
//           }      
//           if (element.props && element.props.children){
//                   React.Children.forEach(element.props.children, grabComponents);
//           }
//         }
//         grabComponents(nextProps.routes || nextProps.children);
//         components.forEach(React.createElement); //force patching
// };

export default(
    
            <Router history={hashHistory}>
            <Route path = "/" component = {App}>
            <IndexRoute component = {Home}/>
            <Route path ="/projects" component ={Projects}/>
            <Route path ="/aboutMe" component ={AboutMe}/>

            </Route>
            </Router>
      
    );
       
     