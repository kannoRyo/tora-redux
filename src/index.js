import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import createStore from './reducks/store/store'
import {ConnectedRouter} from 'connected-react-router'
import * as History from 'history'
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles'
import {theme} from './assets/theme'

const history = History.createBrowserHistory()
export const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
