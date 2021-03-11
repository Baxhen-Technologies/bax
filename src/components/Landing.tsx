import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleAd } from './GoogleAd';

interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
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
