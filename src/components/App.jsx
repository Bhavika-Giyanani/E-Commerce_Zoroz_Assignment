import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={ProductListingPage} />
        <Route path="/products/:id" component={ProductDetailPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App; 