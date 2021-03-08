import React from 'react';

interface InfoSectionProps {
  title: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, children }) => {
  return (
    <>
      <h4>{title}</h4>
      {children}
    </>
  );
};

export { InfoSection };
