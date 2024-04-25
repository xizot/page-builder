import React from "react";
import { DEFAULT_CONFIG } from "../../config/default-config";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
const Image = ({
  src = DEFAULT_CONFIG.DEFAULT_IMAGE,
  ...props
}: ImageProps) => {
  console.log("props", props);
  return (
    <img
      src={src}
      {...props}
      style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }}
    />
  );
};

export default Image;
