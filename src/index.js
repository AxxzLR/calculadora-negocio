import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducers'
import { loadState, saveState } from './utils/statePersist'
import config from './utils/config'
import App from './containers/App'
import './assets/styles/App.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = loadState() || config.INITIAL_STATE
const store = createStore(reducer, initialState, composeEnhancers())

store.subscribe(function () {
    saveState(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'))