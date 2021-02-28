import React from 'react';
import { Router, Route } from 'react-router-dom';

import { Header } from './Header';

import history from '../history';
import { Osasco } from './Osasco';
import { SaoPaulo } from './SaoPaulo';
import { Landing } from './Landing';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Router history={history}>
        <div className="container">
          <Header />
          <Route path="/" exact component={Landing}></Route>
          <Route path="/osasco" exact component={Osasco}></Route>
          <Route path="/sao-paulo" exact component={SaoPaulo}></Route>
        </div>
      </Router>
    </div>
  );
};
