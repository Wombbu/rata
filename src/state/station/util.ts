import {Train, ApiTrain, ApiTimeTableRow, ApiStationJson} from './types';
import * as moment from 'moment';
import * as _ from 'lodash';

const isPassengerTrain = (trainType: string) => ["VET", "VLI", "T", "TYO", "MUV", "SAA", "LIV", "PAI"].indexOf(trainType) === -1;
const onlyThisStation = (stationCode: string) => (row: ApiTimeTableRow) =>
    row.stationShortCode.toUpperCase() === stationCode.toUpperCase();
const onlyPassengerStops = (row: ApiTimeTableRow) => row.trainStopping && row.commercialStop && row.commercialTrack;
const createMostAccurateMomentFromTimeTableRow = (row: ApiTimeTableRow) => moment(row.actualTime || row.liveEstimateTime || row.scheduledTime);
//const notPassed = (currentMoment: moment.Moment) => (row: ApiTimeTableRow) => 
//  createMostAccurateMomentFromTimeTableRow(row).isAfter(currentMoment);
// const onlyArrivals = (row: ApiTimeTableRow) => row.type === 'ARRIVAL'
// const onlyDeparture = (row: ApiTimeTableRow) => row.type === 'DEPARTURE'

// TODO create a interface for station
const stationShortCodeToStationName = (stations: {stationName: string, stationShortCode: string}[]) => (shortCode: string) => {
    const matchingStation = stations.find(station => shortCode.toUpperCase() == station.stationShortCode.toUpperCase());
    return matchingStation ? matchingStation.stationName : shortCode
  }

export const parseTimetable = (forStationCode: string, trainsStoppingInStation: ApiTrain[], stationNames: ApiStationJson[]): Train[] => {
  return trainsStoppingInStation
      .filter((train: ApiTrain) => isPassengerTrain(train.trainType))
      .map((train: ApiTrain) => {
        const ttRows: ApiTimeTableRow[] = train.timeTableRows;
        const getStationName = stationShortCodeToStationName(stationNames);
        const firstStation = getStationName(_.get(ttRows, '[0].stationShortCode', ''))
        const lastStation = getStationName(ttRows[ttRows.length -1].stationShortCode);

        const ttRowsWithStation: ApiTimeTableRow[] =
          train.timeTableRows
          .filter(onlyThisStation(forStationCode))
          .filter(onlyPassengerStops);

        const arrival = ttRowsWithStation
            .find((row: ApiTimeTableRow) => row.type === 'ARRIVAL');
        
        const departure = ttRowsWithStation
            .find((row: ApiTimeTableRow) => row.type === 'DEPARTURE');

        const estimatedArrivalMoment: moment.Moment = arrival ? createMostAccurateMomentFromTimeTableRow(arrival) : moment.invalid(); 
        const estimatedDepartureMoment: moment.Moment = departure ? createMostAccurateMomentFromTimeTableRow(departure) : moment.invalid();

        const scheduledArrivalMoment: moment.Moment = arrival ? moment(arrival.scheduledTime) : moment.invalid();
        const scheduledDepartureMoment: moment.Moment = departure ? moment(departure.scheduledTime) : moment.invalid();

        const arrivalTimeDiff = (estimatedArrivalMoment.isValid() && scheduledArrivalMoment.isValid())
          ? scheduledArrivalMoment.diff(estimatedArrivalMoment, 'minutes') 
          : 0;
        const departureTimeDiff = (estimatedDepartureMoment.isValid() && scheduledDepartureMoment.isValid()) 
          ? scheduledDepartureMoment.diff(estimatedDepartureMoment, 'minutes') 
          : 0;

        return {
          name: `${train.trainType}-${train.trainNumber}`,
          firstStation: firstStation,
          lastStation: lastStation,

          arrivalTimeDiff,
          scheduledArrival: scheduledArrivalMoment.format('HH:mm'),
          estimatedArrival: estimatedArrivalMoment.format('HH:mm'),
          arrivalTrack: _.get(arrival, 'commercialTrack', -1),

          departureTimeDiff,
          scheduledDeparture: scheduledDepartureMoment.format('HH:mm'),
          estimatedDeparture: estimatedDepartureMoment.format('HH:mm'),
          departureTrack: _.get(departure, 'commercialTrack', -1),
        } as Train
      })
}