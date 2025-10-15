import React from 'react';

// This component is now simpler. It receives its image and an onClick handler as props.
const GridSquare = React.memo(({ image, onClick }) => {
  return (
    <div className="grid-square" onClick={onClick}>
      {image && <img src={image} alt="Minecraft block" />}
    </div>
  );
});

export default GridSquare;