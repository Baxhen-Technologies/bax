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
      <div className="App-header">
        Em um mês marcado pela volatilidade dos mercados financeiros, a Bolsa
        teve desempenho negativo, impactada pelo desempenho das ações da
        Petrobras, assim como o ouro, que recuou. No lado positivo do mercado, o
        dólar e os fundos imobiliários com cotas negociadas em Bolsa fecharam o
        período com variações positivas. O aumento dos casos de covid-19 levou
        governos estaduais e municipais a novas medidas de restrição, enquanto o
        ritmo da vacinação no país segue prejudicado pela falta de doses. Esse
        problema já seria suficiente para reduzir o apetite dos investidores por
        aplicações de risco, dizem profissionais de mercado. Mas para piorar o
        quadro, a Bolsa ainda teve que enfrentar a desvalorização dos papéis da
        Petrobras, empresa que representa quase 9% do Ibovespa
      </div>
    </div>
  );
}

export default App;
