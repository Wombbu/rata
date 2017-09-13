import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Station } from './station/types';
import stationReducer from './station/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers<RootState>({
  station: stationReducer,
});

interface TrainTimeTable {
  name: string;
}

export interface RootState {
  loading: boolean,
  station?: Station,
  trainInfo?: TrainTimeTable,
}

const initialState = {} as RootState;

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )

export default store;