import React, { useState } from 'react';
import './style.css';
import Kayit from './Kayit';
import Adresler from './Adresler';
import MusteriSiparisInput from './MusteriSiparisInput';

function Panel() {
  const [activeTab, setActiveTab] = useState('Kayit');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Kayit':
        return <Kayit />;
      case 'Siparisler':
        return <MusteriSiparisInput />;
      case 'Adresler':
        return <Adresler />;
      default:
        return null;
    }
  };

  return (
    <div className="panel-container">
      <div className="left-panel">
        <ul>
          <li onClick={() => handleTabClick('Kayit')}>Kayıt</li>
          <li onClick={() => handleTabClick('Siparisler')}>Siparişler</li>
          <li onClick={() => handleTabClick('Adresler')}>Adresler</li>
        </ul>
      </div>
      <div className="right-panel">
        {renderContent()}
      </div>
      
    </div>
  );
}

export default Panel;
