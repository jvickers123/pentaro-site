import ReactGA from 'react-ga4';

import {
  initGA,
  enquireNowLocation,
  sendGetInTouch,
  handleAcceptCookie,
} from './GA-Helper';

jest.mock('react-ga4', () => ({
  initialize: jest.fn(),
  send: jest.fn(),
  event: jest.fn(),
}));
const mockEnv = process.env;

describe('CA-Helpers', () => {
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...mockEnv };
    jest.clearAllMocks();
  });

  afterAll(() => {
    process.env = mockEnv;
  });

  it('initGA - calls ReactGA.initialize with id', () => {
    initGA('id');
    expect(ReactGA.initialize).toHaveBeenCalledWith('id');
  });

  it('initGA - calls ReactGA.send pageview', () => {
    initGA('id');
    expect(ReactGA.send).toHaveBeenCalledWith('pageview');
  });

  it('enquireNowLocation - calls ReactGA.event with enquire now event', () => {
    enquireNowLocation('telemarketing');
    expect(ReactGA.event).toHaveBeenCalledWith({
      category: 'engagement',
      action: 'Clicked enquire now',
      label: 'from telemarketing',
    });
  });

  it('sendGetInTouch - calls ReactGA.event with Enquiry Sent', () => {
    sendGetInTouch();
    expect(ReactGA.event).toHaveBeenCalledWith({
      category: 'engagement',
      action: 'Enquiry Sent',
    });
  });

  it('handleAcceptCookie - calls initGA if ENV id there', () => {
    process.env.REACT_APP_GOOGLE_ANALYTICS_ID = 'id';
    handleAcceptCookie();
    expect(ReactGA.initialize).toHaveBeenCalledWith('id');
  });

  it('handleAcceptCookie - calls initGA if ENV id not there', () => {
    process.env.REACT_APP_GOOGLE_ANALYTICS_ID = '';
    handleAcceptCookie();
    expect(ReactGA.initialize).not.toHaveBeenCalled();
  });
});
