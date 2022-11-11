import type { ContactFormData } from '../pages/get-in-touch';

export const getTextMessage = ({
  quickEnquiry,
  formData,
  dateString,
}: {
  quickEnquiry: boolean;
  formData: ContactFormData;
  dateString: string;
}) => {
  const { full_name, company_name, email, phone_number, message } = formData;
  if (quickEnquiry) {
    return `Quick enquiry from ${full_name}:

  on ${dateString}

  reply to
  ${email}

  or ${phone_number}`;
  }

  return `New Message from

      ${full_name}

      Company: ${company_name}

        ${message}

      on ${dateString}

      reply to:
      ${email}
      or
      ${phone_number}.`;
};
