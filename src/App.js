import './App.css';
import { useState } from 'react';
import Greetings from './elements/Greetings';
import BoasVindas from './elements/BoasVindas';

function App() {
  const ptBR = 'pt_BR';
  const enUS = 'en_US';
  const [language, setLanguage] = useState(enUS);

  const toggleLanguage = () => {
    if (language === enUS) {
      return setLanguage(ptBR);
    }
    if (language === ptBR) {
      return setLanguage(enUS);
    }
    return setLanguage(enUS);
  };

  return (
    <div className="App">
      <button
        onClick={toggleLanguage}
      >
        {
          language === enUS ? 'Português' : 'English'
        }
      </button>
      {
        language === enUS ? <Greetings /> : <BoasVindas />
      }
    </div>
  );
}

export default App;
