import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer/Footer';

it('renders without crashing', () => {
  const footer = document.createElement('footer');
  return(<Footer />, footer);
});
