import { Fragment } from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './styles';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Home />
  </Fragment>
);

export default App;
