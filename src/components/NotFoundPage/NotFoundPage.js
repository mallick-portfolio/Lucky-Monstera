import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center flex justify-center items-center h-screen">
      <div>
        <h1 className=" text-6xl text-slate-300 mb-4">404 Not Found</h1>
        <Link to={"/"} className="px-5 mt-3 py-1 rounded-md ring-1 ">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
