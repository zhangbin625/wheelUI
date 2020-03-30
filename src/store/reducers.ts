import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import home from "../page/home/home.reducer"
type Router = ReturnType<typeof connectRouter>;
export interface IRootState {
  readonly router: Router;
  readonly home: any
}
const createRootReducer = (history:any) => combineReducers({
  router: connectRouter(history),
  home
})
export default createRootReducer