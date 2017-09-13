export interface Station {
  name?: string;
  trains: Train[];
  loading: boolean;
}

export interface Train {
  name: string;
  firstStation: string;
  lastStation: string;

  arrivalTimeDiff: number;
  scheduledArrival: string;
  estimatedArrival: string;
  arrivalTrack: number;

  departureTimeDiff: number;
  scheduledDeparture: string;
  estimatedDeparture: string;
  departureTrack: number;
};

export interface ApiTrain {
    trainNumber: number;
    departureDate: string;
    operatorUICCode: number;
    operatorShortCode: string;
    trainType: string;
    trainCategory: string;
    commuterLineID: string;
    runningCurrently: boolean;
    cancelled: boolean;
    version: number;
    timetableType: string;
    timetableAcceptanceDate: Date;
    timeTableRows: ApiTimeTableRow[];
}

export interface ApiTimeTableRow {
    stationShortCode: string;
    stationUICCode: number;
    countryCode: string;
    type: string;
    trainStopping: boolean;
    commercialStop: boolean;
    commercialTrack: string;
    cancelled: boolean;
    scheduledTime: Date;
    actualTime: Date;
    differenceInMinutes: number;
    causes: any[];
    liveEstimateTime?: Date;
    estimateSource: string;
}

export interface ApiStationJson {
  stationName: string;
  stationShortCode: string;
}