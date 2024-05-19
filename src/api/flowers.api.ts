import { AxiosResponse } from 'axios';
import api from './api';
import Flower from '../models/Flower';

export interface FlowerAxiosResponse {
  flowers: Flower[];
}

const getFlowersList = async (): Promise<FlowerAxiosResponse> => {
  const response: AxiosResponse<FlowerAxiosResponse> = await api.get(
    '/flowers'
  );
  return response.data;
};

export { getFlowersList };
