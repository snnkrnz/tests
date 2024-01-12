import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Panel from './Test/Panel';
import Kayit from './Test/Kayit';
import MusteriSiparisInput from './Test/MusteriSiparisInput';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Panel />} />
        <Route path="/kayit" element={<Kayit />} />
        <Route exact path="/urun-getir" element={<MusteriSiparisInput />} />
      </Routes>
    </Router>
  );
}
export default App;
