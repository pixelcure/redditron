import React from 'react';
import ReactDOM from 'react-dom';
import NavMenu from './NavMenu/NavMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  return(<NavMenu />, div);
});
