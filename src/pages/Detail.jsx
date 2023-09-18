import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailMovie, fetchDetailSeason } from "../redux/detailSlice";
import Episodes from "../components/Episodes";
import Casts from "../components/Casts";
import "../styles/Detail.css";
import { fetchCasts } from "../redux/castSlice";

const Detail = () => {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const detailMovie = useSelector((state) => state.detail.value);
  const detailSeason = useSelector((state) => state.detail.seasons);
  const detailCasts = useSelector((state) => state.cast.casts);
  const defaultEpisode = detailSeason.filter((season) => season.number === 1 )
  const [episodes, setEpisodes] = useState(defaultEpisode.episodes);
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      (!detailMovie || Object.keys(detailMovie).length === 0) &&
      detailSeason.length === 0
    ) {
      // Fetch detailMovie only if it's not already available or is an empty object
      dispatch(fetchDetailMovie(id));
      dispatch(fetchDetailSeason(id));
      dispatch(fetchCasts(id));
    }
  }, [detailMovie, dispatch]);

  const handleEpisode = (id) => {
    setShowCast(false);
    const totalEpisodes = detailSeason.filter((season) => {
      if (season.number === id) {
        setEpisodes(season.episodes);
      }
    });

    return totalEpisodes;
  };

  const handleCast = () => {
    setShowCast(!showCast);
  };
  return (
    <section className="detail-section h-[100vh] bg-black">
      <div className="detail-container">
        {detailMovie && Object.keys(detailMovie).length !== 0 ? (
          <div className="detail-info flex justify-between w-[80%] mx-auto  h-[60vh] flex-row-reverse mt-20">
            <figure className=" w-[30%] flex justify-center">
              <img
                src={detailMovie?.image.medium}
                alt=""
                className=" border border-red-2 border-red-300 rounded-md"
              />
            </figure>
            <div className="detail-movie-data w-[70%]">
              <h2 className="text-4xl text-red-500 font-semibold detail-title">
                {detailMovie?.name}
              </h2>
              <ul className=" flex mt-5">
                <li className=" me-4">{detailMovie.language}</li>
                <li className=" me-4">
                  {detailMovie.premiered.substring(0, 4)}
                </li>
                <li className=" me-4">{detailMovie.category[0]}</li>
                <li className=" me-4">{detailMovie.status}</li>
                <li className=" me-4">
                  <span className="font-semibold">Seasons:</span>
                  {`${detailSeason.length}`}
                </li>
              </ul>
              <div className="button-container mt-8">
                <button className="me-4 border p-3">Play</button>
                <button className="me-4 border p-3">Download</button>
                <button className="me-4 border p-3">Favorite</button>
              </div>
              <p className=" leading-wider text-white/80 mt-6 w-[80%]">
                {showMore
                  ? detailMovie.summary?.replace(/<\/?p>/g, "")
                  : detailMovie.summary
                      ?.replace(/<\/?p>/g, "")
                      .substring(0, 450) + "..."}
                {""}
                <button
                  className=" font-semibold text-white"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? `See Less` : ` See More`}
                </button>
                {""}
              </p>
            </div>

            {/* Render other details here */}
          </div>
        ) : (
          <h2 className="text-4xl text-red-500">Loading...</h2>
        )}
      </div>
      <div className="w-[100%] mx-auto">
        <div className="detail-seasonn-container mt-20  w-[80%] mx-auto  flex justify-between">
          {detailSeason.length !== 0 && (
            <ul className="w-[70%]">
              {detailSeason.map((season, index) => (
                <button
                  className={`p-4 me-4 hover:border-b-2 border-b-red-500`}
                  key={season.id}
                  onClick={() => handleEpisode(season.number)}
                >{`Season ${index + 1}`}</button>
              ))}
            </ul>
          )}
          <div className="cast-container w-[20%]">
            <button
              onClick={() => handleCast()}
              className={`p-4 ${showCast ? "border-b-2 border-b-red-500" : ``}`}
            >
              Cast & Crew
            </button>
          </div>
        </div>
        {showCast ? <Casts casts={detailCasts}></Casts> : <Episodes episodes={episodes}></Episodes>}

      </div>

    </section>
  );
};

export default Detail;
