import api from '../api/api';
import { getFlowersList } from '../api/flowers.api';
import { FlowerAxiosResponse } from '../api/flowers.api';

jest.mock('../api/api');

it('should return a list of flowers response if the GET request was successful', async () => {
  const mockResponse: FlowerAxiosResponse = {
    flowers: [
      {
        id: 1,
        name: 'Balloon Flower',
        latin_name: 'Platycodon grandiflorus',
        profile_picture: 'rose.jpg',
        sightings: 127,
        favorite: false
      },
      {
        id: 2,
        name: 'Tulip Flower',
        latin_name: 'A tulip flower',
        profile_picture: 'tulip.jpg',
        sightings: 127,
        favorite: false
      }
    ]
  };

  (api.get as jest.Mock).mockResolvedValue({ data: mockResponse });

  const flowersData = await getFlowersList();

  expect(flowersData).toEqual(mockResponse);
});
