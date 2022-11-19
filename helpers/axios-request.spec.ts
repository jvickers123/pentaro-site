import axios from 'axios';
import { ContactFormData } from '../pages/get-in-touch';
import { axiosRequest } from './axios-request';
import { UseToastOptions } from '@chakra-ui/react';
import { enquireNowLocation, sendGetInTouch } from './GA-Helper';

jest.mock('./getTextMessage.ts', () => ({
  getTextMessage: () => 'text message',
}));


jest.mock('./GA-Helper.ts', () => ({
  enquireNowLocation: jest.fn(),
  sendGetInTouch: jest.fn(),
}));

const mockToast = jest.fn();
jest.mock('@chakra-ui/react', () => ({ useToast: () => mockToast }));

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockFormData: ContactFormData = {
  full_name: 'full-Name',
  email: 'email@email.com',
  company_name: 'company one',
  phone_number: '0123456789',
  message: 'Hello this is a mesage',
};

const mockEmptyFormData: ContactFormData = {
  full_name: '',
  email: '',
  company_name: '',
  phone_number: '',
  message: '',
};

const mockEnquiryData: ContactFormData = {
  full_name: 'full-Name',
  email: 'email@email.com',
  phone_number: '0123456789',
};

const mockEmptyEnquiryData: ContactFormData = {
  full_name: '',
  email: '',
  phone_number: '',
};

const successfulToast: UseToastOptions = {
  title: 'Enquiry Sent.',
  description:
    'Thank you for your enquiry. We will be in touch as soon as possible',
  status: 'success',
  duration: 9000,
  isClosable: true,
};

const failedToast: (description: string) => UseToastOptions = (
  description
) => ({
  description: `Please try again. ${description}`,
  duration: 9000,
  isClosable: true,
  status: 'error',
  title: 'Enquiry failed to sent.',
});

const setFormData = jest.fn();

describe('axios-request', () => {
  beforeEach(jest.clearAllMocks);
  it('Happy path calls correct axios calls for quickenquiry = false', async () => {
    await axiosRequest({ formData: mockFormData, setFormData });
    expect(mockedAxios.post).toHaveBeenNthCalledWith(
      1,
      'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message/send-email',
      mockFormData
    );
    expect(mockedAxios.post).toHaveBeenNthCalledWith(
      2,
      'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message/send-sms-1',
      { message: 'text message' }
    );
    expect(mockedAxios.post).toHaveBeenNthCalledWith(
      3,
      'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message/send-sms-2',
      { message: 'text message' }
    );
    expect(mockedAxios.post).toHaveBeenNthCalledWith(
      4,
      'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message/send-sms-3',
      { message: 'text message' }
    );
  });

  it('Happy path calls correct axios calls for quickenquiry = true', async () => {
    await axiosRequest({
      formData: mockEnquiryData,
      setFormData,
      quickEnquiry: true,
    });
    expect(mockedAxios.post).toHaveBeenNthCalledWith(
      1,
      'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message/send-enquiry',
      mockEnquiryData
    );
    expect(mockedAxios.post).toHaveBeenNthCalledWith(
      2,
      'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message/send-sms-1',
      { message: 'text message' }
    );
    expect(mockedAxios.post).toHaveBeenNthCalledWith(
      3,
      'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message/send-sms-2',
      { message: 'text message' }
    );
    expect(mockedAxios.post).toHaveBeenNthCalledWith(
      4,
      'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message/send-sms-3',
      { message: 'text message' }
    );
  });

  it('happy path - reset form data with enquiry= false', async () => {
    await axiosRequest({ formData: mockFormData, setFormData });

    expect(setFormData).toHaveBeenCalledWith(mockEmptyFormData);
  });

  it('happy path - reset form data with enquiry= true', async () => {
    await axiosRequest({
      formData: mockEnquiryData,
      setFormData,
      quickEnquiry: true,
    });

    expect(setFormData).toHaveBeenCalledWith(mockEmptyEnquiryData);
  });

  it('Happy path - calls toast on success', async () => {
    await axiosRequest({
      formData: mockFormData,
      setFormData,
    });
    expect(mockToast).toHaveBeenCalledWith(successfulToast);
  });

  it('Happy path - calls sendGetInTouch when quickEnquiry=false', async () => {
    await axiosRequest({
      formData: mockFormData,
      setFormData,
    });
    expect(enquireNowLocation).not.toBeCalled();
    expect(sendGetInTouch).toHaveBeenCalledTimes(1);
  });

  it('Happy path - calls Enquire Now Location when quickEnquiry=true', async () => {
    await axiosRequest({
      formData: mockEnquiryData,
      setFormData,
      quickEnquiry: true,
    });
    expect(sendGetInTouch).not.toBeCalled();
    expect(enquireNowLocation).toHaveBeenCalledTimes(1);
  });

  it('unHappy path - throws error if full name not provided', async () => {
    await axiosRequest({
      formData: { ...mockFormData, full_name: '' },
      setFormData,
    });
    expect(mockToast).toHaveBeenCalledWith(
      failedToast('Please provide a name')
    );
  });

  it('unHappy path - throws error if email not provided', async () => {
    await axiosRequest({
      formData: { ...mockFormData, email: '' },
      setFormData,
    });
    expect(mockToast).toHaveBeenCalledWith(
      failedToast('Please provide a contact email')
    );
  });

  it('unHappy path - throws error if phone number not provided', async () => {
    await axiosRequest({
      formData: { ...mockFormData, phone_number: '' },
      setFormData,
    });
    expect(mockToast).toHaveBeenCalledWith(
      failedToast('Please provide a phone number')
    );
  });

  it('unHappy path - throws error if quickEnquiry=false and company name not provided', async () => {
    await axiosRequest({
      formData: { ...mockFormData, company_name: '' },
      setFormData,
    });
    expect(mockToast).toHaveBeenCalledWith(
      failedToast('Please provide a company name')
    );
  });

  it('unHappy path - throws error if quickEnquiry=false and message not provided', async () => {
    await axiosRequest({
      formData: { ...mockFormData, message: '' },
      setFormData,
    });
    expect(mockToast).toHaveBeenCalledWith(
      failedToast('Looks like you forgot to fill in the message.')
    );
  });
});
