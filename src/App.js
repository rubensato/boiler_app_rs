import { useState } from 'react';

// componets
import Header from './components/Shared/Header';
import LeftBar from './components/Shared/LeftBar';
// import MainContent from './components/Shared/MainContent';
import Footer from './components/Shared/Footer';
import Boilers from './components/Boilers';

function App() {
  const [boilers, setBoilers] = useState([
    { id: 1, description: 'Zoolab', type: 'A' },
    { id: 3, description: 'Zoolab', type: 'C' },
    { id: 4, description: 'Gembucket', type: 'D' },
    { id: 5, description: 'Holdlamis', type: 'C' },
    { id: 6, description: 'Tampflex', type: 'A' },
    { id: 7, description: 'Bitwolf', type: 'A' },
    { id: 8, description: 'Tresom', type: 'D' },
    { id: 9, description: 'Opela', type: 'B' },
    { id: 10, description: 'Stringtough', type: 'C' },
    { id: 11, description: 'Konklab', type: 'A' },
    { id: 12, description: 'Sonair', type: 'B' },
  ]);

  const deleteBoiler = (id) => {
    setBoilers(boilers.filter((boiler) => boiler.id !== id));
  };

  return (
    <div>
      <Header />
      <div className='middle'>
        <LeftBar />
        <Boilers boilers={boilers} onDelete={deleteBoiler} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
