import * as Redux from 'redux';
import * as Util from './util';
import { RootState } from '../';
import { ApiTrain } from './types';
import scrollToBottom from '../../util/scroll-util';

export const fetchStationActions = {
  start: 'station/FETCH_STATION_START',
  success: 'station/FETCH_STATION_SUCCESS',
  failure: 'station/FETCH_STATION_FAILURE',
};

export const fetchStationData = (stationShortCode: string, stationName: string) =>
  (dispatch: (action: Redux.AnyAction) => Promise<void>, getState: () => RootState) => {
    dispatch({ type: fetchStationActions.start });

    const headers: Headers = new Headers();
    headers.append("Accept-Encoding", "gzip");
    fetch(
      `https://rata.digitraffic.fi/api/v1/live-trains/station/${stationShortCode}?minutes_before_departure=15&minutes_after_departure=15&minutes_before_arrival=15&minutes_after_arrival=15`,
      {headers}
    )
      .then(trainsStoppingInStation => {
        return trainsStoppingInStation.json();
      })
      // Since the response can be over 10 000 rows of JSON, we parse it here to lighten the load on selectors
      .then((trainsStoppingInStation: ApiTrain[]) => Util.parseTimetable(stationShortCode, trainsStoppingInStation, [] ))
      .then(trains => {
        dispatch({ type: fetchStationActions.success, payload: {trains, stationName} });
        return scrollToBottom(500);
      })
      .then(() => console.log("mitä helv"))
      .catch(err => {
        console.error(err);
        dispatch({ type: fetchStationActions.failure })
      });
    }

  // TODO subscribe to websocket action