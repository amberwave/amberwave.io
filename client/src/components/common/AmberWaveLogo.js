import React from 'react';
import amberWaveLogo from './amber-wave-mark.svg';
import amberWaveText from './amber-wave-text-white.svg';

const AmberWaveLogo = () => {
  return (
    <div className="align-middle">
      <img src={amberWaveLogo} alt="Logo" style={{ height: 25 }} />
      <img
        src={amberWaveText}
        alt="Text"
        style={{ height: 18, marginLeft: '8px' }}
      />
    </div>
  );
};

export default AmberWaveLogo;
