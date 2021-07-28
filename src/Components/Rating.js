import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IconBase } from "react-icons/lib";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const stars = [...Array(5)];
  return (
    <div>
      {stars.map((star, i) => {
        const ratingValue = i;
        return (
          <label key={i}>
            <FaStar
              key={i}
              className="star"
              color={ratingValue < rating ? "#000" : "e0e0e0"}
              size={30}
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
              }}
              //   style={{ width: "20%" }}
            />
          </label>
        );
      })}
    </div>
  );
};
export default Rating;
