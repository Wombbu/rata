import * as Redux from 'redux';
//import * as Util from './util';
import { RootState } from '../';

export const fetchStationsActions = {
  start: 'suggestions/FETCH_STATIONS_START',
  success: 'suggestions/FETCH_STATIONS_SUCCESS',
  failure: 'suggestions/FETCH_STATIONS_FAILURE',
};

export const fetchStations = () => (dispatch: (action: Redux.AnyAction) => Promise<void>, getState: () => RootState) => {
  dispatch({ type: fetchStationsActions.start });
  const headers: Headers = new Headers();
  headers.append("Accept-Encoding", "gzip");
  fetch(`https://rata.digitraffic.fi/api/v1/metadata/stations`, {headers})
    .then(stations => stations.json())
    .then(parsed => dispatch({ type: fetchStationsActions.success, payload: parsed }))
    .catch(err => dispatch({ type: fetchStationsActions.failure }))
}