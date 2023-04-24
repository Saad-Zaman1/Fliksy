import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Trending.css";
import Pagination from "../../components/Pagination/Pagination";

const Trending = () => {
  const apiKey = process.env.REACT_APP_API_KEY; // Access the environment variable
  const [content, setContent] = useState("");
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=${page}`
      );
      // console.log(data);
      setContent(data.results); // Update to use data.results
    } catch (error) {
      console.error("Failed to fetch trending movies:", error);
      console.error("page no" + Number(page));
    }
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (
    <>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <Pagination setPage={setPage} />
    </>
  );
};

export default Trending;
