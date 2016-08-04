import { createStore, applyMiddleware } from 'redux'

import { logger } from '../middleware'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import rootReducer from '../reducers'

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    logger,
    thunk,
    promiseMiddleware
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  // if (module.hot) {
  //   module.hot.accept(require('../reducers'), () => {
  //     const nextReducer = require('../reducers')
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store
}
