import React from "react";
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import {Demo} from "./page/demo"
import Home from "./page/home/home"
import configureStore, { history } from './store'
const store = configureStore({})
export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */}
      <> { /* your usual react-router v4/v5 routing */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/demo" component={Demo} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>
)