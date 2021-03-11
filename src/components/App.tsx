import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import history from '../history';
import { Osasco } from './osasco';
import { SaoPaulo } from './SaoPaulo';
import { Landing } from './Landing';

interface AppProps {}

const trackingId = 'G-0C2EHD0206';
ReactGA.initialize(trackingId);

export const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/osasco">
          <Osasco />
        </Route>
        <Route path="/sao-paulo" exact component={SaoPaulo}></Route>
      </Router>
    </div>
  );
};

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});
