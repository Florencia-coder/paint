import { useCallback } from "react";

const useToggleCell = (setCells, defaultColorRef) => {
  return useCallback(
    (rowIdx, colIdx, isClick = false) => {
      setCells((prevCells) => {
        const updatedRow = [...prevCells[rowIdx]];
        const currentCell = updatedRow[colIdx];

        // Si es un click y la celda ya tiene color, lo borra
        if (isClick && currentCell.color) {
          updatedRow[colIdx] = { ...currentCell, color: null };
        }
        // Si no, pinta la celda
        else {
          updatedRow[colIdx] = {
            ...currentCell,
            color: defaultColorRef.current,
          };
        }

        return [
          ...prevCells.slice(0, rowIdx),
          updatedRow,
          ...prevCells.slice(rowIdx + 1),
        ];
      });
    },
    [setCells]
  );
};

export default useToggleCell;
