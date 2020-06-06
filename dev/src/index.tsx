import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
