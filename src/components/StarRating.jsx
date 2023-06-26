import React from 'react'

const StarRating = ({ rating }) => {
  const normalizedRating = Math.round(rating / 2); // Normalizing the rating
  let stars = "";

  for (let i = 0; i < 5; i++) {
    if (i < normalizedRating) {
      stars += "★"
    } else {
      stars += "☆"
    }
  }

  return (
    <div>{stars}</div>
  );
};


export default StarRating
