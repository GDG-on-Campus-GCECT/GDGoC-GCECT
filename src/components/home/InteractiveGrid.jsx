import React, { useState, useEffect, useMemo, useCallback } from "react";
import GridSquare from "./GridSquare";

// Import your block images
import grassImg from "../../assets/images/blocks/grass.png";
import stoneImg from "../../assets/images/blocks/stone.png";
import diamondImg from "../../assets/images/blocks/diamond.png";
import coalImg from "../../assets/images/blocks/coal.png";
import creeperImg from "../../assets/images/blocks/creeper.png";
import goldImg from "../../assets/images/blocks/gold.png";
import lapisImg from "../../assets/images/blocks/lapis.png";
import obsidianImg from "../../assets/images/blocks/obsidian.png";
import purpurImg from "../../assets/images/blocks/purpur.png";
import quartzImg from "../../assets/images/blocks/quartz.png";
import sandstoneImg from "../../assets/images/blocks/sandstone.png";
import podzolImg from "../../assets/images/blocks/podzol.png";

const blockImages = [
  creeperImg,
  grassImg,
  stoneImg,
  diamondImg,
  coalImg,
  goldImg,
  lapisImg,
  obsidianImg,
  purpurImg,
  quartzImg,
  sandstoneImg,
  podzolImg,
];

function InteractiveGrid() {
  const [gridData, setGridData] = useState([]);
  const [gridSize, setGridSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const squareSize = 75;
  const padding = 4;

  const { numCols, totalSquares } = useMemo(() => {
    const cols = Math.ceil(gridSize.width / squareSize) + padding * 2;
    const rows = Math.ceil(gridSize.height / squareSize) + padding * 2;
    return {
      numCols: cols,
      totalSquares: cols * rows,
    };
  }, [gridSize, squareSize]);

  useEffect(() => {
    setGridData(
      Array.from({ length: totalSquares }).map((_, i) => ({
        id: i,
        image: null,
      }))
    );
  }, [totalSquares]);

  // Effect for updating grid size on window resize
  useEffect(() => {
    blockImages.forEach((src) => {
      new Image().src = src;
    });
    const updateGridSize = () => {
      setGridSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateGridSize);
    updateGridSize();
    return () => window.removeEventListener("resize", updateGridSize);
  }, []);

  // Effect for handling the animation
  useEffect(() => {
    const animationInterval = setInterval(() => {
      const maxOffset = padding * squareSize;
      const randomX = Math.random() * (maxOffset * 2) - maxOffset;
      const randomY = Math.random() * (maxOffset * 2) - maxOffset;
      setPosition({ x: randomX, y: randomY });
    }, 5000);
    return () => clearInterval(animationInterval);
  }, [squareSize]);

  // Main function to handle all click logic
  const handleSquareClick = useCallback(
    (clickedIndex) => {
      const newData = [...gridData];
      const clickedSquare = newData[clickedIndex];
      const isRevealed = clickedSquare.image !== null;
      const isCreeper = clickedSquare.image === creeperImg;

      const getRandomBlock = () => {
        return blockImages[Math.floor(Math.random() * blockImages.length)];
      };

      if (isCreeper) {
        // Creeper Explosion Logic: reset creeper to white, reveal neighbors
        newData[clickedIndex].image = null;
        const neighbors = [
          clickedIndex - numCols - 1,
          clickedIndex - numCols,
          clickedIndex - numCols + 1,
          clickedIndex - 1,
          clickedIndex + 1,
          clickedIndex + numCols - 1,
          clickedIndex + numCols,
          clickedIndex + numCols + 1,
        ];
        neighbors.forEach((i) => {
          if (i >= 0 && i < totalSquares) {
            const isLeftEdge = clickedIndex % numCols === 0;
            const isRightEdge = (clickedIndex + 1) % numCols === 0;
            if (isLeftEdge && i % numCols === numCols - 1) return;
            if (isRightEdge && i % numCols === 0) return;
            newData[i].image = getRandomBlock();
          }
        });
      } else if (isRevealed) {
        // If a block is revealed, turn it white
        newData[clickedIndex].image = null;
      } else {
        // If the square is white, reveal a random block
        newData[clickedIndex].image = getRandomBlock();
      }
      setGridData(newData);
    },
    [gridData, numCols, totalSquares]
  );

  // Render the squares based on the gridData state
  const squares = useMemo(() => {
    return gridData.map((square, index) => (
      <GridSquare
        key={square.id}
        image={square.image}
        onClick={() => handleSquareClick(index)}
      />
    ));
  }, [gridData, handleSquareClick]);

  return (
    <div
      className="interactive-grid-background"
      style={{
        "--square-size": `${squareSize}px`,
        width: `${numCols * squareSize}px`,
        height: `${Math.ceil(totalSquares / numCols) * squareSize}px`,
        top: `-${padding * squareSize}px`,
        left: `-${padding * squareSize}px`,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 20s ease-in-out",
      }}
    >
      {squares}
    </div>
  );
}

export default InteractiveGrid;
