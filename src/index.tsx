import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';

import App from './components/App/App';

import './style/style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
