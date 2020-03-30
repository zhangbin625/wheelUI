import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';

export const history = createBrowserHistory()
const middleware = routerMiddleware(history)
export default function configureStore(preloadedState: any) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    process.env.NODE_ENV === 'development' ? composeWithDevTools(compose(
      applyMiddleware(
        thunkMiddleware,
        middleware,
         // for dispatching history actions
        // ... other middlewares ...
      ))) : compose(
        applyMiddleware(
          thunkMiddleware,
          middleware,
           // for dispatching history actions
          // ... other middlewares ...
        ),
      ),
  )

  return store
}