import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import ListClimateReducer from '../reducers/listReducer'

const middleware = applyMiddleware(logger, thunk)
const store = createStore(ListClimateReducer, middleware)

export default store
