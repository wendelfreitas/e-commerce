import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './styles/components';
import './config/reactotron';
import Routes from './routes';
import Header from './components/Header';
import Menu from './components/Menu';
import store from './store';
import './styles/global';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <Header />
        <Menu />
        <Routes />
      </Container>
    </BrowserRouter>
  </Provider>
);
export default App;
