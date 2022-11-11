import axios from 'axios';
import { ContactFormData } from '../pages/get-in-touch';
import { axiosRequest } from './axios-request';

jest.mock('./getTextMessage.ts', () => ({
  getTextMessage: jest.fn(),
}));

jest.mock('@chakra-ui/react', () => ({ useToast: () => jest.fn() }));

jest.mock('axios');

const mockFormData: ContactFormData = {
  full_name: 'full-Name',
  email: 'email@email.com',
  company_name: 'company one',
  phone_number: '0123456789',
  message: 'Hello this is a mesage',
};

const setFormData = jest.fn();

describe('axios-request', () => {
  const mockedAxios: any = axios;
  it('first one', async () => {
    mockedAxios.mockResolvedValueOnce({
      data: '',
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    });
    await axiosRequest({ formData: mockFormData, setFormData });
    expect(axios).toBeCalledWith(false);
  });
});
