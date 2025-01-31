import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ComplaintForm from './pages/ComplaintForm';
import Navbar from './components/navbar';
import SOSPage from './pages/SOSPage';
import LoginPage from './pages/LoginPage';
import VolunteershipForm from './pages/VolunteerForms';
import LegalAdviceForm from './pages/LegalAid';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) setIsLoggedIn(true);
    
    // Get initial language from cookie
    const cookie = document.cookie.split('; ').find(row => row.startsWith('googtrans='));
    const initialLang = cookie ? cookie.split('/')[2] || 'en' : 'en';
    setLang(initialLang);

    // Initialize Google Translate
    const loadGoogleTranslate = () => {
      if (!window.google?.translate) {
        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };

    loadGoogleTranslate();
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'hi' : 'en';
    document.cookie = `googtrans=/en/${newLang}; path=/; max-age=31536000`;
    setLang(newLang);
    window.location.reload();
  };

  return (
    <Router>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn}
        lang={lang}
        toggleLanguage={toggleLanguage}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file-complaint" element={<ComplaintForm />} />
        <Route path="/live-sos" element={<SOSPage />} />
        <Route path="/volunteer" element={<VolunteershipForm />} />
        <Route path="/legal-aid" element={<LegalAdviceForm />} />
        <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
      </Routes>
    </Router>
  );
}

export default App;