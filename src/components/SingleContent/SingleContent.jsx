import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import { Badge } from "@mui/material";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  // Round vote_average to 1 decimal place
  const roundedVoteAverage = vote_average.toFixed(1);
  return (
    <div className="media">
      <Badge
        badgeContent={roundedVoteAverage}
        color={roundedVoteAverage < 6 ? "primary" : "secondary"}
      />

      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
      </span>
      <span className="subTitle">{date}</span>
    </div>
  );
};

export default SingleContent;
