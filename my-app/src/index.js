import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import { SpeechProvider } from '@speechly/react-client';


ReactDOM.render(
    <SpeechProvider appId="952dab3a-efd7-463d-95b9-5b4d4cf26d96" language="en-US">
    <Provider store={store}>
      <App />
    </Provider>
    </SpeechProvider>,
  document.getElementById('root'),
);
