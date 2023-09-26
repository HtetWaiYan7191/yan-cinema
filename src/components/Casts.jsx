import React from "react";
import '../styles/Casts.css';

const Casts = ({ casts }) => {
  return (
    <div className="w-[80%] mx-auto mt-10 ps-4 grid grid-cols-2 md:grid-cols-5 gap-10">
      {casts.map((cast, id) => (
        <div className="cast-card" key={id}>
          <img
            src={cast.image}
            alt=""
            className="rounded-md overflow-hidden cast-img"
          />
          <button className="mt-5 neon-button">
            {cast.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Casts;
