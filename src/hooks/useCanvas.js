import { useCallback, useRef, useState } from "react";
import { useToggleCell } from ".";

const useCanvas = (setCells) => {
  const isPaintingRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const defaultColorRef = useRef("black");
  const toggleCell = useToggleCell(setCells, defaultColorRef);

  const updateColor = useCallback((newColor) => {
    defaultColorRef.current = newColor;
    setIsOpen(false);
  }, []);

  const handleMouseDown = useCallback(() => {
    isPaintingRef.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isPaintingRef.current = false;
  }, []);

  const handleMouseEnter = useCallback(
    (rowIndex, columnIndex) => {
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

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    toggleCell,
    handleMouseEnter,
    isOpen,
    position,
    updateColor,
    closeModal,
    handleMouseDown,
    handleMouseUp,
    handleRightClick,
  };
};

export default useCanvas;
