import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Header } from '../Header';
import { Health } from './Health';
import { Home } from './Home';
import { Politics } from './Politics';
import { Security } from './Security';
import { Economics } from './Economics';
import { Demography } from './Demography';

interface OsascoProps {}

const Osasco: React.FC<OsascoProps> = () => {
  const { path } = useRouteMatch();
  const links = [
    { label: 'Saúde', to: '/osasco/health' },
    { label: 'Política', to: '/osasco/politics' },
    { label: 'Economia', to: '/osasco/economics' },
    { label: 'Segurança', to: '/osasco/security' },
    { label: 'População', to: '/osasco/demography' },
  ];

  const nested = [
    { path: `${path}/health`, Component: Health },
    { path: `${path}/politics`, Component: Politics },
    { path: `${path}/security`, Component: Security },
    { path: `${path}/economics`, Component: Economics },
    { path: `${path}/demography`, Component: Demography },
    // { path: `${path}/education`, Component: Education },
    // { path: `${path}/curiosities`, Component: Curiosities },
    // { path: `${path}/tourism`, Component: Tourism },
    // { path: `${path}/taxes`, Component: Taxes },
  ].map(({ path, Component }) => (
    <Route key={path} path={path}>
      <Component />
    </Route>
  ));

  return (
    <>
      <Header home="/osasco" links={links} />
      <Switch>
        <Route key="home" exact path={path}>
          <Home />
        </Route>
        {nested}
      </Switch>
    </>
  );
};

export { Osasco };
