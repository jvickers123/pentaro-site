import ReactGA from 'react-ga4';

export const initGA = (id) => {
  ReactGA.initialize(id);
  ReactGA.send('pageview');
};

export const enquireNowLocation = (page) => {
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
