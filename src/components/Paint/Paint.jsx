import { useMemo } from "react";
import { useWindowSize, useCanvas } from "../../hooks";
import ModalSetColor from "../ModalSetColor/ModalSetColor";
import Row from "../Row/Row";
import styles from "./paint.module.css";

const Paint = () => {
  const { cells, setCells, cellSize, windowDimensions } = useWindowSize();
  const {
    toggleCell,
    handleMouseEnter,
    handleMouseDown,
    handleMouseUp,
    handleRightClick,
    isOpen,
    closeModal,
    updateColor,
    position,
  } = useCanvas(setCells);

  const memoizedRows = useMemo(() => {
    return cells.map((columns, rowIdx) => (
      <Row
        key={rowIdx}
        columns={columns}
        rowIdx={rowIdx}
        cellSize={cellSize}
        toggleCell={toggleCell}
        handleMouseEnter={handleMouseEnter}
      />
    ));
  }, [cells, toggleCell, handleMouseEnter, cellSize]);

  return (
    <div
      className={styles.container}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onContextMenu={handleRightClick}
    >
      {memoizedRows}
      <ModalSetColor
        isOpen={isOpen}
        closeModal={closeModal}
        position={position}
        updateColor={updateColor}
        windowDimensions={windowDimensions}
      />
    </div>
  );
};

export default Paint;
