import ReactGA from 'react-ga4';

export const initGA = (id: string) => {
  ReactGA.initialize(id);
  ReactGA.send('pageview');
};

export const enquireNowLocation = (page: string) => {
  ReactGA.event({
    category: 'engagement',
    action: 'Clicked enquire now',
    label: `from ${page}`,
  });
};

export const sendGetInTouch = () => {
  ReactGA.event({
    category: 'engagement',
    action: 'Enquiry Sent',
  });
};

export const handleAcceptCookie = () => {
  if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
    initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
  }
};
