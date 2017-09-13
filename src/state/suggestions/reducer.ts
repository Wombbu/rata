import * as Redux from 'redux';
import { Suggestions } from './types';
import { fetchStationMetadataActions } from './actions';

export const defaultState: Suggestions = {
  stationMetadata: [],
  loading: false,
}

const suggestionsReducer = 
  (state: Suggestions = defaultState, action: Redux.AnyAction) => {
    switch(action.type) {
      case fetchStationMetadataActions.start:
        return { ...state, loading: true } as Suggestions;
      case fetchStationMetadataActions.success:
        return { ...state, stationMetadata: action.payload, loading: false } as Suggestions;
      case fetchStationMetadataActions.failure:
        return { ...state, loading: false } as Suggestions;
      default: return state;
    }
};

export default suggestionsReducer;