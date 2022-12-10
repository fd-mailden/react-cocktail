import React, { useEffect } from "react";
import ContentLoader from "react-content-loader";

function Skeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={300}
      viewBox="0 0 315 300"
      backgroundColor="#e1e0e0"
      foregroundColor="#f6f4f4"
      {...props}
    >
      <rect x="23" y="5" rx="3" ry="3" width="300" height="290" />
    </ContentLoader>
  );
}

export default Skeleton;
