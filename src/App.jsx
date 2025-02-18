import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entry from './Pages/Entry'
import Home from './Pages/Home'
import Chabat from './Pages/Chabat'

function App() {

  const [activeLanguage, setActiveLanguage] = useState("francais"); 

  const handleLanguage = (language) => {
    setActiveLanguage(language); 
  };

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Entry setActiveLanguage={activeLanguage} handleLanguage={handleLanguage} />}/>
      <Route path='/Home' element={<Home setActiveLanguage={activeLanguage} handleLanguage={handleLanguage} />} />
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
