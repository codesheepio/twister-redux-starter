import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import './styles/custom.scss'
import './styles/main.scss'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle,comma-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
  module.hot.accept('./reducers', () => {
    store.replaceReducer(rootReducer)
  })
}
