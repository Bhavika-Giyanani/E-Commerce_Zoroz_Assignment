import PropTypes from "prop-types";

const ExampleCarouselImage = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
