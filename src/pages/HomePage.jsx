import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <Categories title="Featured Categories" />
      <Link to="/products">View All Products</Link>
    </div>
  );
};

export default HomePage; 