import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

interface GoogleAdProps {
  classNames?: string;
  slot: string;
  timeout?: number;
}
const googleAdId = 'ca-pub-7889035436506661';
const GoogleAd: React.FC<GoogleAdProps> = ({
  classNames = '',
  slot,
  timeout = 200,
}) => {
  const [googleInit, setGoogleInit] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const init = setTimeout(() => {
      if (typeof window !== 'undefined')
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);
    setGoogleInit(init);
    return () => {
      if (googleInit) clearTimeout(googleInit);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className={classNames}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={googleAdId}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export { GoogleAd };
