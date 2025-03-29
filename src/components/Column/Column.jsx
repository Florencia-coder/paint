import React from "react";
import "./Column.css";

const Column = ({ cell, rowIdx, colIdx, toggleCell, handleMouseEnter }) => {
  console.log(`Columna ${colIdx} reenderizada`);

  return (
    <div
      key={colIdx}
      className="cell"
      style={{ backgroundColor: cell.color }}
      onMouseEnter={() => handleMouseEnter(rowIdx, colIdx)}
      onMouseDown={() => toggleCell(rowIdx, colIdx, true)}
    />
  );
};
export default React.memo(Column);
