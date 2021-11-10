// componets
import Header from './components/Shared/Header';
import LeftBar from './components/Shared/LeftBar';
import MainContent from './components/Shared/MainContent';
import Footer from './components/Shared/Footer';
import Boilers from './components/Boilers';

function App() {
  return (
    <div>
      <Header />
      <div className='middle'>
        <LeftBar />
        <Boilers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
