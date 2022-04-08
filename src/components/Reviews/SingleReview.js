import React from "react";
import StarRatingComponent from "react-star-rating-component";
const SingleReview = ({ review }) => {
  const { img, name, email, rating, userReview } = review;
  return (
    <div className=" px-4 py-5 shadow-2xl bg-white rounded-lg">
      <div className="flex items-center justify-center">
        <img
          className="w-20 ring-2 ring-offset-2 rounded-full"
          src={img}
          alt=""
        />
      </div>
      <div className="py-4">
        <p className="text-2xl font-bold text-center">{name}</p>
        <p className="text-slate-600 text-center">Email: {email}</p>
      </div>
      <div className="">
        <p className="text-center">
          <span className="text-normal">{userReview}</span>
          {}
        </p>
      </div>
      <div className="ratings">
        <div className="text-center text-indigo-900 font-bold text-xl">
          <StarRatingComponent name="userReview" starCount={5} value={rating} />
          <br />
          {rating + "/5"}
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
