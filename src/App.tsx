import React, { Suspense, lazy } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

const LazyDiscover = lazy(() => import('./Pages/Discover/Discover'))
const LazySearch = lazy(() => import('./Pages/Search/Search'))
const LazyAskMe = lazy(() => import('./Pages/AskMe/AskMe'))
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='discover' element={
        <Suspense fallback='loading...'>
          <LazyDiscover />
        </Suspense>
      } />
      <Route path='search' element={
        <Suspense fallback='loading...'>
          <LazySearch />
        </Suspense>
      }/>
      <Route path='askme' element={
      <Suspense fallback='loading...'>
        <LazyAskMe />
      </Suspense>
      } />
     </Routes>
    </>
  );
}

export default App;
