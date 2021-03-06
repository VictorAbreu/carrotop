import Navbar from 'components/Navbar';
import Catalogo from 'pages/Catalogo';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/catalog">
        <Catalogo />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
