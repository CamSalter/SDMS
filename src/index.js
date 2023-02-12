import React from 'react';
import Root from './Root';
import App from './App.jsx';

let root = Root;

if (!root.hasRendered) {
  root.render(<App />);
} else {
  root.update(<App />);
}
