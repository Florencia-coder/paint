import React from "react";
import styles from "./column.module.css";

const Column = ({
  cell,
  rowIdx,
  colIdx,
  toggleCell,
  handleMouseEnter,
  cellSize,
}) => {
  return (
    <div
      className={styles.cell}
      style={{
        backgroundColor: cell.color,
        width: `${cellSize}px`,
        height: `${cellSize}px`,
        minHeight: `${cellSize}px`,
        maxHeight: `${cellSize}px`,
      }}
      onMouseEnter={() => handleMouseEnter(rowIdx, colIdx)}
      onMouseDown={() => toggleCell(rowIdx, colIdx, true)}
    />
  );
};

export default React.memo(Column, (prevProps, nextProps) => {
  return (
    prevProps.rowIdx === nextProps.rowIdx &&
    prevProps.colIdx === nextProps.colIdx &&
    prevProps.cell.color === nextProps.cell.color &&
    prevProps.cellSize === nextProps.cellSize &&
    prevProps.toggleCell === nextProps.toggleCell &&
    prevProps.handleMouseEnter === nextProps.handleMouseEnter
  );
});
