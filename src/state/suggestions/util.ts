import {Train, ApiTrain, ApiTimeTableRow, ApiStationJson} from './types';
import * as moment from 'moment';
import * as _ from 'lodash';

const isPassengerTrain = (trainType: string) => ["VET", "VLI", "T", "TYO", "MUV", "SAA", "LIV", "PAI"].indexOf(trainType) === -1;
const onlyThisStation = (stationCode: string) => (row: ApiTimeTableRow) =>
    row.stationShortCode.toUpperCase() === stationCode.toUpperCase();
const onlyPassengerStops = (row: ApiTimeTableRow) => row.trainStopping && row.commercialStop && row.commercialTrack;
const createMostAccurateMomentFromTimeTableRow = (row: ApiTimeTableRow) => moment(row.actualTime || row.liveEstimateTime || row.scheduledTime);
const hasPassed = (currentMoment: moment.Moment) => (row: ApiTimeTableRow) => 
  createMostAccurateMomentFromTimeTableRow(row).isBefore(currentMoment);
const onlyArrivals = (row: ApiTimeTableRow) => row.type === 'ARRIVAL'
const onlyDeparture = (row: ApiTimeTableRow) => row.type === 'DEPARTURE'

// TODO create a interface for station
const stationShortCodeToStationName = (stations: {stationName: string, stationShortCode: string}[]) => (shortCode: string) => {
    const matchingStation = stations.find(station => shortCode.toUpperCase() == station.stationShortCode.toUpperCase());
    return matchingStation ? matchingStation.stationName : shortCode
  }

export const parseTimetable = (forStationCode: string, trainsStoppingInStation: ApiTrain[], stationNames: ApiStationJson[]): Train[] => {
  console.log(trainsStoppingInStation, forStationCode, stationNames);
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
          .filter(onlyPassengerStops)
          .filter(hasPassed(moment()));

        // At this point we have only the departure / arrival / both timetable rows

        const arrivalTimes =
          ttRowsWithStation
          .filter(onlyArrivals);
        
        const departureTimes =
          ttRowsWithStation
          .filter(onlyDeparture);

        const estimatedArrivalMoment: moment.Moment = createMostAccurateMomentFromTimeTableRow(arrivalTimes[0]);
        const estimatedDepartureMoment: moment.Moment = createMostAccurateMomentFromTimeTableRow(departureTimes[0]);

        const scheduledArrivalMoment: moment.Moment = arrivalTimes[0] ? moment(arrivalTimes[0].scheduledTime) : moment.invalid();
        const scheduledDepartureMoment: moment.Moment = departureTimes[0] ? moment(departureTimes[0].scheduledTime) : moment.invalid();

        const arrivalTimeDiff = (estimatedArrivalMoment.isValid() && scheduledArrivalMoment.isValid())
          ? scheduledArrivalMoment.diff(estimatedArrivalMoment) : 0;
        const departureTimeDiff = (estimatedDepartureMoment.isValid() && scheduledDepartureMoment.isValid()) 
          ? scheduledDepartureMoment.diff(estimatedDepartureMoment) : 0;

        return {
          name: `${train.trainType}-${train.trainNumber}`,
          firstStation: firstStation,
          lastStation: lastStation,

          arrivalTimeDiff,
          scheduledArrival: scheduledArrivalMoment.format('HH:mm'),
          estimatedArrival: estimatedArrivalMoment.format('HH:mm'),
          arrivalTrack: _.get(arrivalTimes[0], 'commercialTrack'),

          departureTimeDiff,
          scheduledDeparture: scheduledDepartureMoment.format('HH:mm'),
          estimatedDeparture: estimatedDepartureMoment.format('HH:mm'),
          departureTrack: _.get(departureTimes[0], 'commercialTrack'),
        } as Train
      })
}