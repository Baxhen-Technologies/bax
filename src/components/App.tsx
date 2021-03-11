import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';

import history from '../history';
import { App as AppState, setInitialLoad } from '../actions';
import { Osasco } from './osasco';
import { SaoPaulo } from './SaoPaulo';
import { Landing } from './Landing';
import { StoreState } from '../reducers';

interface AppProps {
  app: AppState;
  setInitialLoad: typeof setInitialLoad;
}

const trackingId = 'G-0C2EHD0206';
ReactGA.initialize(trackingId);

const _App: React.FC<AppProps> = ({ app, setInitialLoad }) => {
  useEffect(() => {
    if (!app.isInitialLoad) {
      ReactGA.pageview(window.location.pathname + window.location.search);
      setInitialLoad(true);
    }
  });
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

const mapStateToProps = ({ app }: StoreState): { app: AppState } => {
  return { app };
};

export const App = connect(mapStateToProps, { setInitialLoad })(_App);
