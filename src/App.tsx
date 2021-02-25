import React from 'react';
import './App.css';
import { GoogleAd } from './components/GoogleAd';

function App() {
  return (
    <div>
      <GoogleAd slot="989038934" classNames="page-top" />
      <div className="App-header">
        Minha Pagina Hospedada no GitHub Pages Com Anúncios do Google
      </div>
      <GoogleAd slot="394738798" timeout={1000} classNames="page-bottom" />
      <div>Meu conteúdo</div>
    </div>
  );
}

export default App;
