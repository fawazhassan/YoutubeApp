import React from "react";
import "./VideoItem.css";

const VideoItem = props => {
  const { video, onVideoSelect } = props;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={
          video.snippet.thumbnails
            ? video.snippet.thumbnails.medium.url
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUBZGrQuov95qwZ0zEelZvsS5KQngdtzpv9ys9TrD6TKSbxy-"
        }
        alt={video.snippet.description}
      />{" "}
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
