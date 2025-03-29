import "./ModalSetColor.css";

const ModalSetColor = ({ isOpen, closeModal, position, updateColor }) => {
  if (!isOpen) return null;
  const colors = [
    "#E50000",
    "#FF8D00",
    "#FFEE00",
    "#008121",
    "#004CFF",
    "#760188",
    "#FF006E",
  ];

  return (
    <div>
      <div
        className="modal"
        onMouseLeave={closeModal}
        style={{ left: position.x, top: position.y }}
      >
        <div className="container-colors">
          {colors.map((color) => (
            <div
              onClick={() => updateColor(color)}
              key={color}
              className="content-color"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalSetColor;
