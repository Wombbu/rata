import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Station } from './station/types';
import { Suggestions } from './suggestions/types';
import suggestionsReducer, { defaultState as suggestionsDefaultState } from './suggestions/reducer';
import { dispatchInitActions } from './suggestions/actions';
import stationReducer, { defaultState as stationDefaultState } from './station/reducer';

interface TrainTimeTable {
  name: string;
}

export interface RootState {
  loading: boolean,
  suggestions: Suggestions,
  station: Station,
  trainInfo?: TrainTimeTable,
}

const rootReducer = combineReducers<RootState>({
  station: stationReducer,
  suggestions: suggestionsReducer,
});

const initialState = {
  suggestions: suggestionsDefaultState, 
  station: stationDefaultState
} as RootState;

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )

dispatchInitActions(store);

export default store;