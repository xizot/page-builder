import React from "react";
import { DEFAULT_CONFIG } from "../../config/default-config";

type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement>;

const Video = ({
  src = DEFAULT_CONFIG.DEFAULT_VIDEO,
  ...props
}: VideoProps) => {
  return (
    <video
      controls
      {...props}
      autoPlay
      muted
      style={{ height: "100%", width: "100%", objectFit: "cover" }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
