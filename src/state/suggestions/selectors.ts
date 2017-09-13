import { SuggestionData } from './types';
import { RootState } from '../';

export const getSuggestionData = (state: RootState): SuggestionData[] => 
  state.suggestions.stationMetadata
    .filter(data => data.passengerTraffic)
    .map(data => ({ stationName: data.stationName, stationShortCode: data.stationShortCode } as SuggestionData));