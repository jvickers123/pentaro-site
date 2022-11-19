import axios from 'axios';
import { UseToastOptions } from '@chakra-ui/react';
import { enquireNowLocation, sendGetInTouch } from './GA-Helper';
import type { ContactFormData } from '../pages/get-in-touch';
import type { EnquireFormData } from '../components/layout/EnquireNow';
import { getTextMessage } from './getTextMessage';

const API_URL = 'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message'

type axiosRequestProps = {
  formData: ContactFormData;
  setFormData: React.Dispatch<
    React.SetStateAction<EnquireFormData | ContactFormData>
  >;
  quickEnquiry?: boolean;
  toast: ({}: UseToastOptions) => {};
};

export const axiosRequest = async ({
  formData,
  setFormData,
  quickEnquiry = false,
  toast,
}: axiosRequestProps) => {
  const messageUrl = quickEnquiry ? 'send-enquiry' : 'send-email';
  try {
    const date = new Date();
    const dateString = date.toString();
    const { full_name, company_name, email, phone_number, message } = formData;

    if (!full_name) throw 'Please provide a name';
    if (!email) throw 'Please provide a contact email';
    if (!phone_number) throw 'Please provide a phone number';
    if (!quickEnquiry && !company_name) throw 'Please provide a company name';
    if (!quickEnquiry && !message)
      throw 'Looks like you forgot to fill in the message.';

    const textMessageData = {
      message: getTextMessage({ formData, dateString, quickEnquiry }),
    };

    await axios.post(`${API_URL}/${messageUrl}`, formData);
    await axios.post(
      `${API_URL}/send-sms-1`,
      textMessageData
    );
    await axios.post(
      `${API_URL}/send-sms-2`,
      textMessageData
    );
    await axios.post(
      `${API_URL}/send-sms-3`,
      textMessageData
    );

    toast({
      title: 'Enquiry Sent.',
      description:
        'Thank you for your enquiry. We will be in touch as soon as possible',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });

    if (quickEnquiry) {
      setFormData({
        full_name: '',
        email: '',
        phone_number: '',
      });
    } else {
      setFormData({
        full_name: '',
        email: '',
        phone_number: '',
        message: '',
        company_name: '',
      });
    }

    // GOOGLE ANALYTICS
    if (quickEnquiry) {
      const url = window.location.href.split('/');
      let path = url[url.length - 1];
      if (!path) {
        path = 'home';
      }
      enquireNowLocation(window.location.href.split('/')[-1]);
    } else {
      sendGetInTouch();
    }
  } catch (error) {
    toast({
      title: 'Enquiry failed to sent.',
      description: `Please try again. ${error}`,
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  }
};
