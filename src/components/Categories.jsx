import "../Categories.css";
import PropTypes from "prop-types";

const Categories = ({ title, products }) => {
  return (
    <div className="Card">
      <h2>{title}</h2>
      <div className="images">
        {products.map((product, index) => (
          <div className="image-block" key={index}>
            <img src={product.image} alt={product.description} />
            <p>{product.description}</p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

Categories.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Categories;
