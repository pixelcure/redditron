import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';

it('renders without crashing', () => {
  const header = document.createElement('header');
  return(<Header />, header);
});
