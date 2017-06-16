import React from 'react';
import ReactDOM from 'react-dom';
import NavButton from './NavButton/NavButton';

it('renders without crashing', () => {
  const ul = document.createElement('ul');
  return(<NavButton />, ul);
});
