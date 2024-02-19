import { useEffect, useRef } from "react";

import { Dimensions, getDimensions } from "../helpers/dimensions";

export const useDimensions = () => {
  const dimensions = useRef<Dimensions>(getDimensions());

  useEffect(() => {
    const handleResize = () => {
      dimensions.current = getDimensions();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dimensions.current]);

  return dimensions.current;
};
