import * as Redux from 'redux';
import { RootState } from '../';
import { StationMetadata } from './types';

export const fetchStationMetadataActions = {
  start: 'suggestions/FETCH_STATIONS_START',
  success: 'suggestions/FETCH_STATIONS_SUCCESS',
  failure: 'suggestions/FETCH_STATIONS_FAILURE',
};

export const fetchStationMetadata = () => (dispatch: (action: Redux.AnyAction) => Promise<void>, getState: () => RootState) => {
  dispatch({ type: fetchStationMetadataActions.start });
  const headers: Headers = new Headers();
  headers.append("Accept-Encoding", "gzip");
  fetch(`https://rata.digitraffic.fi/api/v1/metadata/stations`, { headers })
    .then(stationMetadata => stationMetadata.json())
    .then((metadata: StationMetadata) => dispatch({ type: fetchStationMetadataActions.success, payload: metadata }))
    .catch(err => dispatch({ type: fetchStationMetadataActions.failure }))
}

export const dispatchInitActions = (store: Redux.Store<any>) => {
  store.dispatch(fetchStationMetadata());
}