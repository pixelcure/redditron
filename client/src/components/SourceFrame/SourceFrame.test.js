import React from 'react';
import ReactDOM from 'react-dom';
import SourceFrame from './SourceFrame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SourceFrame />, div);
});
