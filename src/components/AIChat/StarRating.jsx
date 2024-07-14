import PropTypes from 'prop-types';
import './StarRating.css';
import starFilled from './../../assets/star-filled.svg';
import starEmpty from './../../assets/star-empty.svg';

const StarRating = ({ totalStars = 5, filledStars = 3, filledState = 'filled', onStarClick }) => {

  const getStarImageURL = (index) => {
    if (filledState === 'filled' && index <= filledStars - 1) {
      return starFilled
    } else {
      return starEmpty;
    }
  };

  return (
    <div className="star-rating-container">
      <h4>Please provide your rating</h4>
      <div className="stars">
        {[...Array(totalStars)].map((_, index) => (
          <img
            key={index}
            src={getStarImageURL(index)}
            className="star"
            alt="star"
            onClick={() => onStarClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

StarRating.propTypes = {
  totalStars: PropTypes.number,
  filledStars: PropTypes.number,
  filledState: PropTypes.string,
  onStarClick: PropTypes.func.isRequired,
};

export default StarRating;
