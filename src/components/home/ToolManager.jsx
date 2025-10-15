import React, { useState, useEffect, useRef, useCallback } from "react";
import FloatingTool from "./FloatingTool";

// --- (Keep your image imports) ---
import swordImg from "../../assets/gifs/tools/sword.gif";
import pickaxeImg from "../../assets/gifs/tools/picaxe.gif";
import axeImg from "../../assets/gifs/tools/axe.gif";
import shovelImg from "../../assets/gifs/tools/shovel.gif";
import hoeImg from "../../assets/gifs/tools/hoe.gif";

const availableTools = [
  { type: "sword", src: swordImg },
  { type: "pickaxe", src: pickaxeImg },
  { type: "axe", src: axeImg },
  { type: "shovel", src: shovelImg },
  { type: "hoe", src: hoeImg },
];

const MAX_TOOLS = 3;
const TOOL_LIFETIME_SECONDS = 10;

function ToolManager() {
  const [activeTools, setActiveTools] = useState([]);
  const toolIdCounter = useRef(0);
  const lifetimeTimeouts = useRef({});

  // Memoize all helper functions for performance
  const startToolLifetime = useCallback((toolId) => {
    if (lifetimeTimeouts.current[toolId]) {
      clearTimeout(lifetimeTimeouts.current[toolId]);
    }
    lifetimeTimeouts.current[toolId] = setTimeout(() => {
      setActiveTools((prev) => prev.filter((tool) => tool.id !== toolId));
      delete lifetimeTimeouts.current[toolId];
    }, TOOL_LIFETIME_SECONDS * 1000);
  }, []);

  const spawnTool = useCallback(() => {
    setActiveTools((prevTools) => {
      // Return early if the max number of tools is already on screen
      if (prevTools.length >= MAX_TOOLS) return prevTools;

      // 1. Get a set of the tool types that are currently active.
      const activeToolTypes = new Set(prevTools.map((tool) => tool.type));

      // 2. Filter the available tools to get a list of tools that are NOT currently active.
      const spawnableTools = availableTools.filter(
        (tool) => !activeToolTypes.has(tool.type)
      );

      // 3. If there are no spawnable tools left, do nothing.
      if (spawnableTools.length === 0) {
        return prevTools;
      }

      // 4. Pick a random tool from the filtered list of spawnable tools.
      const randomToolType =
        spawnableTools[Math.floor(Math.random() * spawnableTools.length)];

      // Get on-screen target position
      const endX = Math.random() * (window.innerWidth - 150) + 75;
      const endY = Math.random() * (window.innerHeight - 150) + 75;

      // Determine random off-screen starting position
      let startX, startY;
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0) {
        // Top
        startX = Math.random() * window.innerWidth;
        startY = -100;
      } else if (edge === 1) {
        // Right
        startX = window.innerWidth + 100;
        startY = Math.random() * window.innerHeight;
      } else if (edge === 2) {
        // Bottom
        startX = Math.random() * window.innerWidth;
        startY = window.innerHeight + 100;
      } else {
        // Left
        startX = -100;
        startY = Math.random() * window.innerHeight;
      }

      const newTool = {
        id: toolIdCounter.current++,
        ...randomToolType,
        startX,
        startY, // Initial off-screen position
        endX,
        endY, // Target on-screen position
        rotation: (Math.random() - 0.5) * 720, // Random rotation between -360 and 360
        zIndex: 10 + Math.floor(Math.random() * 10),
      };

      startToolLifetime(newTool.id);
      return [...prevTools, newTool];
    });
  }, [startToolLifetime]);

  const handleToolRelease = useCallback(
    (toolId, currentX, currentY) => {
      // When released, give it a new target to fly to
      const newEndX = Math.random() * (window.innerWidth - 150) + 75;
      const newEndY = Math.random() * (window.innerHeight - 150) + 75;
      const newRotation = (Math.random() - 0.5) * 720;

      setActiveTools((prevTools) =>
        prevTools.map((tool) =>
          tool.id === toolId
            ? {
                ...tool,
                startX: currentX,
                startY: currentY,
                endX: newEndX,
                endY: newEndY,
                rotation: newRotation,
              }
            : tool
        )
      );
      startToolLifetime(toolId);
    },
    [startToolLifetime]
  );

  const handleToolInteraction = useCallback(
    (toolId) => {
      startToolLifetime(toolId);
    },
    [startToolLifetime]
  );

  // ✅ NEW: This function gives a tool a new destination when it arrives.
  const handleToolArrival = useCallback((toolId) => {
    setActiveTools((prevTools) =>
      prevTools.map((tool) => {
        if (tool.id !== toolId) return tool;

        // The old destination becomes the new starting point
        const newStartX = tool.endX;
        const newStartY = tool.endY;

        // Calculate a new random destination
        const newEndX = Math.random() * (window.innerWidth - 150) + 75;
        const newEndY = Math.random() * (window.innerHeight - 150) + 75;
        const newRotation = tool.rotation + (Math.random() - 0.5) * 360; // Continue rotating

        return {
          ...tool,
          startX: newStartX,
          startY: newStartY,
          endX: newEndX,
          endY: newEndY,
          rotation: newRotation,
        };
      })
    );
    // Note: We DO NOT reset the lifetime here, as it's not a user interaction.
  }, []);

  // Stable useEffect for spawning
  useEffect(() => {
    // The interval will now handle both initial and subsequent spawns.
    const spawnInterval = setInterval(() => {
      // Directly call spawnTool. It's safe because it checks the tool limit internally.
      spawnTool();
    }, 2000); // Try to spawn every 2 seconds

    return () => {
      clearInterval(spawnInterval);
      Object.values(lifetimeTimeouts.current).forEach(clearTimeout);
    };
  }, [spawnTool]);

  return (
    <div className="tool-manager-container">
      {activeTools.map((tool) => (
        <FloatingTool
          key={tool.id}
          tool={tool}
          onRelease={handleToolRelease}
          onInteraction={handleToolInteraction}
          onArrival={handleToolArrival}
        />
      ))}
    </div>
  );
}

export default ToolManager;
