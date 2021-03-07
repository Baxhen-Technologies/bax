import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

const trackingId = 'G-Y7W1J25DH6';
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

export default history;
