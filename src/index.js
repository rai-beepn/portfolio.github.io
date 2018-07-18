import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import './theme/font'

import routes from './routes';

import {AppContainer} from 'react-hot-loader';


ReactDOM.render (
    <AppContainer>
    {routes}
</AppContainer>,
    document.getElementById('root')
)

registerServiceWorker();


//Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./routes', () => {
      const routes = require('./routes').default;
     ReactDOM.render(
         <AppContainer>
             {routes}
         </AppContainer>,
         document.getElementById('root')
         
     );
    });
  }