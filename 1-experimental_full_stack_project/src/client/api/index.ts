import axios from 'axios';

const API_PATH: string = 'http://localhost:5350/api/v1';

export const getCityForecastByName = async (cityName: string):Promise<IGetCityForecastByName> => {
  const response: IAPIResponse = await axios.get(`${API_PATH}/current/${cityName}`);
  return response.data as IGetCityForecastByName;
}

export const getCityForecastByCoords = async (coords: CoordsType):Promise<IGetCityForecastByCoords> => {
  const response: IAPIResponse = await axios
    .get(`${API_PATH}/forecast`, {
      params: {
        lat: coords.lat,
        lon: coords.lon,
      }
    });
  return response.data as IGetCityForecastByCoords;
}

export const getCityWeatherByCoords = async (coords: CoordsType):Promise<IAPIResponse> => {
  const response: IAPIResponse = await axios
    .get(`${API_PATH}/location`, {
      params: {
        lat: coords.lat,
        lon: coords.lon,
      }
    });
  return response.data as IAPIResponse;
}
