import React, { useEffect } from "react";
import Column from "../Column/Column";
import "./Row.css";

const Row = ({ columns, rowIdx, toggleCell, handleMouseEnter }) => {
  console.log(`Fila ${rowIdx} reenderizada`);

  return (
    <div key={rowIdx} className="row">
      {columns.map((cell, colIdx) => (
        <Column
          key={`${colIdx}- ${rowIdx}`}
          cell={cell}
          rowIdx={rowIdx}
          colIdx={colIdx}
          toggleCell={toggleCell}
          handleMouseEnter={handleMouseEnter}
        />
      ))}
    </div>
  );
};

export default React.memo(Row);
