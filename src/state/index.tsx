import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers<RootState>({
  
});

interface StationInfo {
  name: string;
}

interface TrainTimeTable {
  name: string;
}

interface TrainDetails {
  name: string;
}

interface RootState {
  loading: boolean,
  stationInfo?: StationInfo,
  trainTimeTable?: TrainTimeTable,
  trainDetails?: TrainDetails,

}

const initialState = {loading: false} as RootState;


export default createStore<RootState>(rootReducer, initialState);