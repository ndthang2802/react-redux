import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { UserReducer } from './reducers/user.reducer'
import { NotificationReducer } from './reducers/notification.reducer'

const rootReducers = combineReducers({
    User : UserReducer,
    Notification : NotificationReducer
})

const composedEnhancer = applyMiddleware(thunk)

const store = createStore(
    rootReducers,
    composedEnhancer
)

export default store