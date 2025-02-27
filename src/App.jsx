import { MyContextProvider } from './Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TooBig from './Pages/TooBig';
import Entry from './Pages/Entry'
import Home from './Pages/Home'

function App() {

  const innerWidth = window.innerWidth

  return (
    <>
    <MyContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={innerWidth <= 590 ? <Entry /> : <TooBig />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      </BrowserRouter> 
    </MyContextProvider>
    </>
  )
}

export default App
