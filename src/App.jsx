import { useCallback, useRef, useState } from "react";
import { useToggleCell, useWindowSize } from "./hooks";
import ModalSetColor from "./components/ModalSetColor/ModalSetColor";
import Row from "./components/Row/Row";

import "./App.css";

function App() {
  const { cells, setCells } = useWindowSize();
  const isPaintingRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const defaultColorRef = useRef("black");
  const toggleCell = useToggleCell(setCells, defaultColorRef);

  const updateColor = (newColor) => {
    console.log("Nuevo color seleccionado:", newColor);
    defaultColorRef.current = newColor;
    setIsOpen(false);
  };

  const handleMouseDown = () => {
    console.log("Mouse Down: Pintar activado");
    isPaintingRef.current = true;
  };

  const handleMouseUp = () => {
    console.log("Mouse Up: Pintar desactivado");
    isPaintingRef.current = false;
  };

  const handleMouseEnter = useCallback(
    (rowIndex, columnIndex) => {
      console.log(
        `🎨 Hover sobre celda [${rowIndex}, ${columnIndex}] - isPaintingRef:`,
        isPaintingRef.current
      );
      if (isPaintingRef.current) {
        toggleCell(rowIndex, columnIndex, false);
      }
    },
    [toggleCell]
  );

  const handleRightClick = useCallback((event) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onContextMenu={handleRightClick}
    >
      {cells.map((columns, rowIdx) => (
        <Row
          key={rowIdx}
          columns={columns}
          rowIdx={rowIdx}
          toggleCell={toggleCell}
          handleMouseEnter={handleMouseEnter}
        />
      ))}
      <ModalSetColor
        isOpen={isOpen}
        closeModal={closeModal}
        position={position}
        updateColor={updateColor}
      />
    </div>
  );
}

export default App;
