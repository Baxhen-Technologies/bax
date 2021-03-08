import React from 'react';
import { Link } from 'react-router-dom';

interface ILink {
  label: string;
  to: string;
}

interface HomeProps {
  home: string;
  links: ILink[];
}

const Header: React.FC<HomeProps> = ({ home, links }) => {
  const renderLinks = links.map(({ label, to }) => (
    <li className="nav-item" key={to}>
      <Link className="nav-link" to={to}>
        {label}
      </Link>
    </li>
  ));
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to={home} className="navbar-brand">
        Meu Município
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{renderLinks}</ul>
      </div>
    </nav>
  );
};

export { Header };
