import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReviews";
import SingleReview from "../Reviews/SingleReview";

const HomeReview = () => {
  // eslint-disable-next-line no-unused-vars
  const [reviews, setReviews] = useReview();
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-10">
        {reviews.slice(0, 3).map((review) => (
          <SingleReview key={review.id} review={review} />
        ))}
      </div>
      <div className="text-center mb-10">
        <button className="px-6 py-1 bg-purple-400 rounded-3xl text-white hover:ring-1 ring-offset-1 duration-200">
          {" "}
          <Link className="" to={"/reviews"}>
            Show all Reviews
          </Link>
        </button>
      </div>
    </>
  );
};

export default HomeReview;
