import type { ContactFormData } from '../pages/get-in-touch';

import { getTextMessage } from './getTextMessage';

const mockFormData: ContactFormData = {
  full_name: 'full-Name',
  email: 'email@email.com',
  company_name: 'company one',
  phone_number: '0123456789',
  message: 'Hello this is a mesage',
};

describe('getTextMessage', () => {
  it('returns correct message with wuick enquiry=true', () => {
    expect(
      getTextMessage({
        formData: mockFormData,
        quickEnquiry: true,
        dateString: '11/11/2022',
      })
    ).toEqual(`Quick enquiry from full-Name:

  on 11/11/2022

  reply to
  email@email.com

  or 0123456789`);
  });

  it('returns correct message with wuick enquiry=false', () => {
    expect(
      getTextMessage({
        formData: mockFormData,
        quickEnquiry: false,
        dateString: '11/11/2022',
      })
    ).toEqual(`New Message from

      full-Name

      Company: company one

        Hello this is a mesage

      on 11/11/2022

      reply to:
      email@email.com
      or
      0123456789.`);
  });
});
