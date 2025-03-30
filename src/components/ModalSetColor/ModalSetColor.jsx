import { CirclePicker } from "react-color";
import styles from "./modalSetColor.module.css";
import { memo } from "react";

const MODAL_DIMENSIONS = {
  width: 270,
  height: 150,
};

const ModalSetColor = ({
  isOpen,
  closeModal,
  position,
  updateColor,
  selectedColor,
  windowDimensions,
}) => {
  if (!isOpen) return null;

  const padding = 20;
  let x = position.x;
  let y = position.y;

  // If you go out of the window, adjust the position
  if (x + MODAL_DIMENSIONS.width > windowDimensions.width - padding) {
    x = x - MODAL_DIMENSIONS.width;
  }
  if (y + MODAL_DIMENSIONS.height > windowDimensions.height - padding) {
    y = y - MODAL_DIMENSIONS.height;
  }

  return (
    <div
      className={styles.modal}
      onMouseLeave={closeModal}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <CirclePicker
        color={selectedColor}
        onChange={(color) => {
          updateColor(color.hex);
        }}
      />
    </div>
  );
};

export default memo(ModalSetColor, (prevProps, nextProps) => {
  return (
    prevProps.isOpen === nextProps.isOpen &&
    prevProps.selectedColor === nextProps.selectedColor &&
    prevProps.position?.x === nextProps.position?.x &&
    prevProps.position?.y === nextProps.position?.y
  );
});
