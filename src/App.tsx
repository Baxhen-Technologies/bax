import React from 'react';
import './App.css';
import { GoogleAd } from './components/GoogleAd';

function App() {
  return (
    <div>
      <GoogleAd slot="989038934" classNames="page-top" />
      <div>Minha Pagina Hospedada no GitHub Pages Com Anúncios do Google</div>
      <GoogleAd slot="394738798" timeout={1000} classNames="page-bottom" />
      <div>Page Content...</div>
    </div>
  );
}

export default App;
