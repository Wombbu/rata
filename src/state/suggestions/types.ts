export interface StationMetadata {
    passengerTraffic: boolean;
    type: string;
    stationName: string;
    stationShortCode: string;
    stationUICCode: number;
    countryCode: string;
    longitude: number;
    latitude: number;
}

export interface Suggestions {
  stationMetadata: StationMetadata[];
  loading: boolean;
}

export interface SuggestionData {
  stationName: string;
  stationShortCode: string;
}