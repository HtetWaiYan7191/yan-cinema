import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailMovie, fetchDetailSeason } from "../redux/detailSlice";
import Episodes from "../components/Episodes";
import Casts from "../components/Casts";
import "../styles/Detail.css";
import { fetchCasts } from "../redux/castSlice";
import { setFavorite, removeFavorite, fetchMovies } from "../redux/movieSlice";
import Loading from "../components/Loading";
import DetailNavbar from "../components/DetailNavbar";
import {BsPlay, BsStar} from 'react-icons/bs'
import {GoDownload} from 'react-icons/go'
import {AiOutlineStar} from 'react-icons/ai'

const Detail = () => {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const allMovies = useSelector((state) => state.movie.value);
  const loading = useSelector((state) => state.detail.loading);
  const detailMovie = useSelector((state) => state.detail.value);
  const checkMovie = allMovies.filter((m) => m.id === detailMovie.id);
  const detailSeason = useSelector((state) => state.detail.seasons);
  const detailCasts = useSelector((state) => state.cast.casts);
  const defaultEpisode = detailSeason.filter((season) => season.number === 1 )
  const [episodes, setEpisodes] = useState(defaultEpisode.episodes);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(checkMovie[0].favorite);

  useEffect(() => {
    if (
      (!detailMovie || Object.keys(detailMovie).length === 0) &&
      detailSeason.length === 0
    ) {
      // Fetch detailMovie only if it's not already available or is an empty object
      dispatch(fetchDetailMovie(id));
      dispatch(fetchDetailSeason(id));
      dispatch(fetchCasts(id));
      dispatch(fetchMovies());
    }
  }, [detailMovie, detailSeason, dispatch]);

  const handleClick = () => {
    if(isFavorite) {
      dispatch(removeFavorite(id))
    } else {
      dispatch(setFavorite(id))
    }
  }


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
    !loading ? (
    <Loading />
   ) : (
    <section className="detail-section h-[100vh] bg-black">
      <DetailNavbar/>
    <div className="detail-container">
      {detailMovie && Object.keys(detailMovie).length !== 0 && (
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
            <div className="button-container mt-8 flex">
              <button className="me-4 border px-3 py-1 flex items-center"><BsPlay className="me-2"/>Play</button>
              <button className="me-4 border px-3 py-1 flex items-center"><GoDownload className="me-2"/>Download</button>
              <button className="me-4 border px-3 py-1 flex items-center" onClick={handleClick}><BsStar className="me-2"/>Favorite</button>
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
        </div>
      ) }
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
   )
  );
}

export default Detail;
