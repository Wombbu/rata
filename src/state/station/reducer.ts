import * as Redux from 'redux';

export interface Station {
  name?: string;
  departures: Train[];
  arrivals: Train[];
}

export interface Train {
  name: string;
  firstStation: string;
  lastStation: string;
  estimatedTime: string;
  adjustedEstimate: string;
  track: number;
}

export const defaultState: Station = {
  name: "",
  departures: [],
  arrivals: [],
}

const stationInfoReducer = 
  (state: Station = defaultState, action: Redux.Action) => {
    switch(action.type) {
      
    }
};

export default stationInfoReducer;