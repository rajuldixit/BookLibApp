import React, { Suspense, lazy } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Authorization from './Pages/Authorization/Authorization';

const LazyDiscover = lazy(() => import('./Pages/Discover/Discover'))
const LazyHome = lazy(() => import('./Pages/Home/Home'))
const LazySearch = lazy(() => import('./Pages/Search/Search'))
const LazyAskMe = lazy(() => import('./Pages/AskMe/AskMe'))
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Authorization />} />
      <Route path='home' element={
        <Suspense fallback='loading...'>
          <LazyHome />
        </Suspense>
      } />
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
