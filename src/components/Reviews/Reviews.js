import React from "react";
import useReview from "../../hooks/useReviews";
import SingleReview from "./SingleReview";

const Reviews = () => {
  // eslint-disable-next-line no-unused-vars
  const [reviews, setReviews] = useReview();
  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
      {reviews.map((review) => (
        <SingleReview key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
