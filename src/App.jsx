import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entry from './Pages/Entry'
import Home from './Pages/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Entry />}/>
      <Route path='/Home' element={<Home />} />
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
