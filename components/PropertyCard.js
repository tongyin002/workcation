/* eslint-disable max-len */
import PropTypes from 'prop-types';

export default function PropertyCard({
  className,
  imgUrl,
  imgAlt,
  plus,
  beds,
  baths,
  title,
  price,
  rating,
  reviews,
}) {
  return (
    <div className={className}>
      <div className="pb-10/12 bg-red-500 relative rounded-lg overflow-hidden shadow-md">
        <img className="absolute w-full h-full object-cover" src={imgUrl} alt={imgAlt} />
      </div>
      <div className="w-11/12 mx-auto px-4 py-4 bg-white -mt-16 rounded-lg relative shadow-lg">
        <div className="flex items-baseline">
          <span
            className={`inline-block px-2 rounded-full text-xs 
            text-teal-800 bg-teal-200 uppercase font-medium tracking-wider ${plus ? '' : 'hidden'}`}
          >
            plus
          </span>
          <span
            className={`inline-block text-xs text-gray-600 uppercase tracking-wider ${
              plus ? 'ml-2' : ''
            }`}
          >
            {beds} beds &bull; {baths} baths
          </span>
        </div>
        <h4 className="mt-1 text-gray-900 font-semibold truncate">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h4>
        <p className="mt-1">
          ${price} <span className="text-sm text-gray-600">/wk</span>
        </p>
        <div className="mt-2 flex items-center">
          {[...Array(5).keys()].map((index) => {
            return (
              <svg
                key={index}
                className={`h-4 w-4 fill-current ${index < rating ? 'text-teal-500' : ''}`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
              </svg>
            );
          })}
          <span className="ml-2 text-gray-600"> {reviews} Reviews</span>
        </div>
      </div>
    </div>
  );
}

PropertyCard.propTypes = {
  className: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  beds: PropTypes.number.isRequired,
  baths: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  plus: PropTypes.bool.isRequired,
};
