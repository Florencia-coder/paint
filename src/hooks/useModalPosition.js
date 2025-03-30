import { useState, useCallback, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";

const useModalPosition = (isOpen, clickPosition, modalDimensions) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const calculatePosition = useCallback(() => {
    if (!clickPosition) return { x: 0, y: 0 };

    const { width: modalWidth, height: modalHeight } = modalDimensions;
    const padding = 20;

    // Calcular posición inicial
    let x = clickPosition.x;
    let y = clickPosition.y;

    // Si no hay espacio a la derecha, colocar a la izquierda del clic
    const spaceRight = windowWidth - x - modalWidth - padding;
    if (spaceRight < 0) {
      x = Math.max(padding, x - modalWidth);
    }

    // Si no hay espacio abajo, colocar arriba del clic
    const spaceBottom = windowHeight - y - modalHeight - padding;
    if (spaceBottom < 0) {
      y = Math.max(padding, y - modalHeight);
    }

    return { x, y };
  }, [clickPosition, modalDimensions, windowWidth, windowHeight]);

  useEffect(() => {
    if (isOpen && clickPosition) {
      setModalPosition(calculatePosition());
    }
  }, [isOpen, clickPosition, calculatePosition]);

  return modalPosition;
};

export default useModalPosition;
