import React from 'react';

interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Município</h1>
      Informações e dados sobre o seu município
      <label htmlFor="search">Ache seu Município</label>
      <input id="search" type="text" />
    </div>
  );
};
