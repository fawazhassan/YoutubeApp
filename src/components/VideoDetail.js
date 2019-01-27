import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading</div>;
  }

  const Src = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={Src} frameBorder="0" title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
