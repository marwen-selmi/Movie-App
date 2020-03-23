import React from "react";

function Rating(props) {
  const stars = rate => {
    let starArray = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        starArray.push(
          <span
            key={i}
            onClick={() =>
              props.starindex ? props.starindex(i + 1) : () => {}
            }
          >
            ★
          </span>
        );
      } else
        starArray.push(
          <span
            key={i}
            onClick={() =>
              props.starindex ? props.starindex(i + 1) : () => {}
            }
          >
            ☆
          </span>
        );
    }
    return starArray;
  };
  return <div>{stars(props.minRating)}</div>;
}

export default Rating;
