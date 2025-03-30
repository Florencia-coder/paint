import { useCallback } from "react";

const useToggleCell = (setCells, defaultColorRef) => {
  return useCallback(
    (rowIdx, colIdx, isClick = false) => {
      setCells((prevCells) => {
        const currentCell = prevCells[rowIdx][colIdx];
        const isColorChange = isClick && currentCell.color;
        const newColor = isColorChange ? null : defaultColorRef.current;

        if (currentCell.color === newColor) {
          return prevCells;
        }

        const updatedRow = [...prevCells[rowIdx]];

        updatedRow[colIdx] = { ...currentCell, color: newColor };

        const newCells = [...prevCells];
        newCells[rowIdx] = updatedRow;
        return newCells;
      });
    },
    [setCells]
  );
};

export default useToggleCell;
