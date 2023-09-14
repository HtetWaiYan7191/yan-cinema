import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailMovie } from "../redux/detailSlice";

const Detail = () => {
  const { id } = useParams();
  const detailMovie = useSelector((state) => state.detail.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!detailMovie || Object.keys(detailMovie).length === 0) {
      // Fetch detailMovie only if it's not already available or is an empty object
      dispatch(fetchDetailMovie(id));
    }
  }, [detailMovie, dispatch]);

  return (
    <section className="detail-section h-[100vh] relative">
      <div className="detail-container flex justify-center">
        {detailMovie && Object.keys(detailMovie).length !== 0 ? (
          <div className="detail-info flex justify-around w-[80%]">
            <figure className="">
              <img
                src={detailMovie?.image.medium}
                alt=""
                className=""
              />
            </figure>
            <h2 className="text-4xl text-red-500 font-semibold text-center">{detailMovie?.name}</h2>
            {/* Render other details here */}
          </div>
        ) : (
          <h2 className="text-4xl text-red-500">Loading...</h2>
        )}
      </div>
    </section>
  );
};

export default Detail;
