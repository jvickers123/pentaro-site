import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './_app';

// import { getCookieConsentValue } from 'react-cookie-consent';
import * as Helpers from '../helpers/GA-Helper';
// jest.mock('react-cookie-consent', () => ({
//   default: ({ onAccept }) => <div onClick={onAccept} />,
//   getCookieConsentValue: jest.fn(),
// }));

// jest.mock('../helpers/GA-Helper');
// const Cookiees = { getCookieConsentValue };

const TestComponent = () => <div>Test Component</div>;
const testProps = { children: 'test' };

const setUp = () =>
  render(<App Component={TestComponent} pageProps={testProps} router={null} />);
describe('_app', () => {
  it('Should render successfully', async () => {
    setUp();
    const testComponent = await screen.findByText('Test Component');
    expect(testComponent).toBeInTheDocument();
  });

  // it('call Google Analytics', async () => {
  //   jest.spyOn(Cookiees, 'getCookieConsentValue').mockReturnValue('true');
  //   const mock = jest.spyOn(Helpers, 'handleAcceptCookie');
  //   setUp();
  //   expect(mock).toBeCalledTimes(1);
  // });
});
