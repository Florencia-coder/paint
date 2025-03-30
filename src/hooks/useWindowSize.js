import { useState, useMemo, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";

const ROWS = 100; // Ruler

const useWindowSize = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  // Calculate the cell size based on the window height
  const cellSize = useMemo(() => {
    return Math.ceil(windowHeight / ROWS);
  }, [windowHeight]);

  // Calculate the number of columns based on the window width and cell size
  const columns = useMemo(() => {
    return Math.floor(windowWidth / cellSize);
  }, [windowWidth, cellSize]);

  // Create the initial cell array
  const [cells, setCells] = useState(() =>
    Array.from({ length: ROWS }, () =>
      Array(columns)
        .fill()
        .map(() => ({ color: "" }))
    )
  );

  // Update cells when the number of columns changes
  useEffect(() => {
    setCells(
      Array.from({ length: ROWS }, () =>
        Array(columns)
          .fill()
          .map(() => ({ color: "" }))
      )
    );
  }, [columns]);

  return { 
    cells, 
    setCells, 
    cellSize,
    windowDimensions: { width: windowWidth, height: windowHeight }
  };
};

export default useWindowSize;
