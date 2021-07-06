// This is the top-level script that will be executed when bundle.js
// is loaded into index.html.
//
// Be sure that the webpack.config.js is pointing to index.tsx as the entry.
//
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { test1 } from 'hello-typescript-package';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  // NOTE: There is a <div/> in the HTML with this ID.
  document.getElementById('root')
);

// This demonstrates the ability to call a function from a package
console.info(test1())





