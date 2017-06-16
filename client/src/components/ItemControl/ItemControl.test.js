import React from 'react';
import ReactDOM from 'react-dom';
import ItemControl from './ItemControl';

it('renders without crashing', () => {
  const ul = document.createElement('ul');
  ReactDOM.render(<ItemControl />, ul);
});
