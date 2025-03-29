import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [cells, setCells] = useState([]);
  const CELL_SIZE = 10;
  const ROWS = 100;

  useEffect(() => {
    const updatecells = () => {
      const cols = Math.floor(window.innerWidth / CELL_SIZE);
      setCells(
        Array.from({ length: ROWS }, () => Array(cols).fill({ color: "" }))
      );
      // setCells(Array.from({ length: 10 }, () => Array(10).fill({ color: "" })));
    };

    updatecells();
    window.addEventListener("resize", updatecells);

    return () => window.removeEventListener("resize", updatecells);
  }, []);
  return { cells, setCells };
};

export default useWindowSize;
