import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Resources from './pages/Resources';
import Prompts from './pages/Prompts';
import './styles/global.css';
import './styles/responsive.css';

function App() {
  const [activeTab, setActiveTab] = useState('resources');

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container">
        {activeTab === 'resources' ? <Resources /> : <Prompts />}
      </main>
      <Footer />
    </>
  );
}

export default App;
