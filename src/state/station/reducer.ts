import * as Redux from 'redux';
import { Station } from './types';
import { fetchStationActions } from './actions';

export const defaultState: Station = {
  name: "",
  trains: [],
  loading: false,
}

const stationInfoReducer = 
  (state: Station = defaultState, action: Redux.AnyAction) => {
    switch(action.type) {
      case fetchStationActions.start:
        return { ...state, loading: true};
      case fetchStationActions.success:
        return { ...state, 
          trains: action.payload.trains, 
          name: action.payload.stationName,
          loading: false 
        }
      case fetchStationActions.failure:
        return { ...state, loading: false };
      default: return state;
    }
};

export default stationInfoReducer;