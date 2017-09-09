export interface Station {
  name?: string;
  departures: Train[];
  arrivals: Train[];
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

export interface ApiTrainJson {
    stationShortCode: string;
    stationUICCode: number;
    countryCode: string;
    type: string;
    trainStopping: boolean;
    commercialTrack: string;
    cancelled: boolean;
    scheduledTime: Date;
    actualTime: Date;
    differenceInMinutes: number;
    causes: string[];
}

export interface ApiStationJson {
  stationName: string;
  stationShortCode: string;
}