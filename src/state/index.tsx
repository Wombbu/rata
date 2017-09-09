import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers<RootState>({
  
});

interface StationInfo {
  name: string;
}

interface TrainTimeTable {
  name: string;
}

export interface RootState {
  loading: boolean,
  stationInfo: StationInfo,
  trainInfo: TrainTimeTable,
}

const initialState = {loading: false} as RootState;


export default createStore<RootState>(rootReducer, initialState);