import { MyContextProvider } from './Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// 📌 Code splitting (Lazy Loading)
const TooBig = lazy(() => import('./Pages/TooBig'));
const Entry = lazy(() => import('./Pages/Entry'));
const Home = lazy(() => import('./Pages/Home'));

function App() {
  const innerWidth = window.innerWidth;

  return (
    <MyContextProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            <Route path='/' element={innerWidth <= 590 ? <Entry /> : <TooBig />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;