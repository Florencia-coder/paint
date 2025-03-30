import React from "react";
import Column from "../Column/Column";
import styles from "./row.module.css";

const Row = ({ columns, rowIdx, toggleCell, handleMouseEnter, cellSize }) => {
  return (
    <div className={styles.row}>
      {columns.map((cell, colIdx) => (
        <Column
          key={`${colIdx}-${rowIdx}`}
          cell={cell}
          rowIdx={rowIdx}
          colIdx={colIdx}
          cellSize={cellSize}
          toggleCell={toggleCell}
          handleMouseEnter={handleMouseEnter}
        />
      ))}
    </div>
  );
};

export default React.memo(Row, (prevProps, nextProps) => {
  return (
    prevProps.rowIdx === nextProps.rowIdx &&
    prevProps.cellSize === nextProps.cellSize &&
    prevProps.toggleCell === nextProps.toggleCell &&
    prevProps.handleMouseEnter === nextProps.handleMouseEnter &&
    JSON.stringify(prevProps.columns) === JSON.stringify(nextProps.columns)
  );
});
