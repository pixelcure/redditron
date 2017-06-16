import React from 'react';
import ReactDOM from 'react-dom';
import FormControl from './FormControl';

it('renders without crashing', () => {
  const ul = document.createElement('ul');
  ReactDOM.render(<FormControl />, ul);
});
