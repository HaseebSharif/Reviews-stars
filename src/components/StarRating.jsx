import React from "react";
import "../styles/main.css";

const StarRating = ({ Rating }) => {
  let StarRating = Rating;

  const Stars = Array.from({ length: StarRating }, (_, index) => (
    <span class="fa fa-star checked" key={index}></span>
  ));
  let EmptyStar = 10 - StarRating;
  const EmptyStars = Array.from({ length: EmptyStar }, (_, index) => (
    <span class="fa fa-star " key={index}></span>
  ));

  return (
    <>
      {Stars}
      {EmptyStars}
    </>
  );
};

export default StarRating;
