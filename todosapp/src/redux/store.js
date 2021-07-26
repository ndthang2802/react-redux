import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { UserReducer } from './reducers/user.reducer'
import { NotificationReducer } from './reducers/notification.reducer'
import { TodoReducer } from './reducers/todo.reducer'

const rootReducers = combineReducers({
    User : UserReducer,
    Notification : NotificationReducer,
    Todo : TodoReducer
})

const composedEnhancer = applyMiddleware(thunk)

const store = createStore(
    rootReducers,
    composedEnhancer
)

export default store