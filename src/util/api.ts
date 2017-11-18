
const fetchWithHeaders = (url: string) => fetch(url, {headers: new Headers({"Accept-Encoding": "gzip"})});

const buildStationFetchUrl = (stationShortCode: string) =>
  `https://rata.digitraffic.fi/api/v1/live-trains/station/${stationShortCode}?minutes_before_departure=15&minutes_after_departure=15&minutes_before_arrival=15&minutes_after_arrival=15`;


const fetchStation = (stationShortCode: string) => fetchWithHeaders(buildStationFetchUrl(stationShortCode));

export default {
  fetchStation
}