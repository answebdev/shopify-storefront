import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';

// Repo: https://github.com/iskurbanov/shopify-react-headless
// Demo: https://shopify-headless.netlify.app/

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route path='/products/:handle'>
            <ProductPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
