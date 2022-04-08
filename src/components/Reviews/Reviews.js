import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReviews";
import SingleReview from "./SingleReview";

const Reviews = () => {
  // eslint-disable-next-line no-unused-vars
  const [reviews, setReviews] = useReview();
  return (
    <div className="container grid grid-cols-3 gap-4 my-10">
      {reviews.slice(0,3).map((review) => (
        <SingleReview key={review.id} review={review} />
      ))}
      <Link to={'/reviews'}>Show all review</Link>
    </div>
  );
};

export default Reviews;
