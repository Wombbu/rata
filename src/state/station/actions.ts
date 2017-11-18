import * as Redux from 'redux';
import * as Util from './util';
import { RootState } from '../';
import { ApiTrain, Train} from './types';
import scrollToBottom from '../../util/scroll-util';
import Api from '../../util/api';

export const actionTypes = {
  start: 'station/FETCH_STATION_START',
  success: 'station/FETCH_STATION_SUCCESS',
  failure: 'station/FETCH_STATION_FAILURE',
};

const fetchStationStart = () => ({type: actionTypes.start});
const fetchStationSuccess = (payload: {trains: Train[], stationName: string}) => ({ type: actionTypes.success, payload });
const fetchStationFailure = () => ({type: actionTypes.failure});

export const fetchStationData = (stationShortCode: string, stationName: string) =>
  (dispatch: (action: Redux.AnyAction) => Promise<void>, getState: () => RootState) => {
    dispatch(fetchStationStart());

    Api.fetchStation(stationShortCode)
      .then(trainsStoppingInStation => trainsStoppingInStation.json())
      .then((trainsStoppingInStation: ApiTrain[]) =>
        // Since the response can be over 10 000 rows of JSON, we parse it here to lighten the load on selectors
        Util.parseTimetable(stationShortCode, trainsStoppingInStation, [] )) // TODO add a real value for that empty array
      .then(trains => {
        dispatch(fetchStationSuccess({trains, stationName}));
        return scrollToBottom(500);
      })
      .then(() => console.log('Scrolled to bottom.')) // TODO websocket start
      .catch(err => {
        console.error(err);
        dispatch(fetchStationFailure())
      });
    }