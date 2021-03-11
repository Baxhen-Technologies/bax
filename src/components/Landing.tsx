import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoogleAd } from './GoogleAd';
import ReactGA from 'react-ga';
import { App, setInitialLoad } from '../actions';
import { StoreState } from '../reducers';

interface LandingProps {
  app: App;
  setInitialLoad: typeof setInitialLoad;
  location: Location;
}

const _Landing: React.FC<LandingProps> = ({
  location,
  app,
  setInitialLoad,
}) => {
  useEffect(() => {
    if (!app.isInitialLoad) {
      ReactGA.pageview(location.pathname);
      setInitialLoad(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Município</h1>
      Informações e dados sobre o seu município
      <br />
      Municípios Disponíveis:
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/osasco">Osasco</Link>
        </li>
        <li className="list-group-item">
          <Link to="/sao-paulo">São Paulo</Link>
        </li>
      </ul>
      <br />
      <GoogleAd slot="7259870550" />
    </div>
  );
};

const mapStateToProps = ({ app }: StoreState): { app: App } => {
  return { app };
};

export const Landing = connect(mapStateToProps, { setInitialLoad })(_Landing);
