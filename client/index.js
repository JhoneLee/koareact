/*
* @Author: liyunjiao
* @Date:   2017-06-08 10:40:46
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-06-08 10:45:50
*/

import React from 'react';
import {render} from 'react-dom';
import {Router,match,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import configureStore from './common/store/configureStore';
// 全局store
const store = configureStore(window.REDUX_STATE);
match({history:browserHistory,routes},(error,redirectLocation,renderProps)=>{
    render(
        <Provider store={store}>
            <Router {...renderProps}/>
        </Provider>
    );
});
