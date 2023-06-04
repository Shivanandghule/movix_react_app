import { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadingImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

export const HeroBanner = () => {
  const navigate = useNavigate();
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { urls } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  console.log(data);
  useEffect(() => {
    const bg =
      urls?.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  console.log(background);
  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <Img src={background} />
      </div>}
      <div className="opacity-layer">

      </div>
        <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome,</span>
          <span className="subTitle">
            Millions of movies, Tv Shows and people to discover, Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for movies, Tv Shows..."
              onChange={(event) => setQuery(event.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button onClick={searchQueryHandler}>Search</button>
          </div>
        </div>
        </ContentWrapper>
      </div>
  );
};
