import * as Redux from 'redux';
import * as Util from './util';
import { RootState } from '../';
import { ApiTrain } from './types';

export const fetchStationActions = {
  start: 'station/FETCH_STATION_START',
  success: 'station/FETCH_STATION_SUCCESS',
  failure: 'station/FETCH_STATION_FAILURE',
};

export const fetchStationData = (stationShortCode: string) => (dispatch: (action: Redux.AnyAction) => Promise<void>, getState: () => RootState) => {
  dispatch({ type: fetchStationActions.start });
  const headers: Headers = new Headers();
  headers.append("Accept-Encoding", "gzip");
  console.log(stationShortCode);
  fetch(`https://rata.digitraffic.fi/api/v1/live-trains/station/${stationShortCode}?minutes_before_departure=15&minutes_after_departure=15&minutes_before_arrival=15&minutes_after_arrival=15`
    , {headers}
  )
    .then(trainsStoppingInStation => {
      console.log(trainsStoppingInStation.url);
      return trainsStoppingInStation.json();
    })
    .then((trainsStoppingInStation: ApiTrain[]) => {
      console.log(trainsStoppingInStation);  
      return Util.parseTimetable(stationShortCode, trainsStoppingInStation, [] )}
    )
    .then(parsed => dispatch({ type: fetchStationActions.success, payload: parsed }))
    .catch(err => dispatch({ type: fetchStationActions.failure }))
}

  // TODO subscribe to websocket action