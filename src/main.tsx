import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistor from '../src/redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <ToastContainer
        position="bottom-right"
        theme="colored"
        autoClose={3000}
      />
    </PersistGate>
  </Provider>
  /* </React.StrictMode> */
);
