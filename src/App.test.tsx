import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import Discover from './Pages/Discover/Discover';
import AskMe from './Pages/AskMe/AskMe';

describe('Testing App', () => {
  test('renders app', () => {
    render(
      <BrowserRouter>
        <Home />
        <Search />
        <Discover />
        <AskMe />
      </BrowserRouter>
    )
  });
})

