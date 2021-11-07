import {createStore, combineReducers} from 'redux';
import countReducer from '../Reducer/reducer';

const rootReducer = combineReducers({
  countReducer: countReducer,
});
const configureStore = () => createStore(rootReducer);

export default configureStore;
