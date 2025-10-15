import React, { useState, useEffect, useRef } from "react";
import "./FloatingTool.css";

const FloatingTool = ({ tool, onRelease, onInteraction, onArrival }) => {
  const [isFlying, setIsFlying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: tool.startX, y: tool.startY });
  const offset = useRef({ x: 0, y: 0 });
  const toolRef = useRef(null);

  // Trigger the fly-in animation
  useEffect(() => {
    setPosition({ x: tool.startX, y: tool.startY });
    const flyInTimeout = setTimeout(() => setIsFlying(true), 50);
    return () => clearTimeout(flyInTimeout);
  }, [tool.startX, tool.startY, tool.endX]);

  // Listen for the end of the transition to trigger the next move
  useEffect(() => {
    const node = toolRef.current;
    if (!node) return;

    const handleTransitionEnd = () => {
      // Prevent this from firing when dragging stops
      if (!isDragging) {
        setIsFlying(false); // Briefly reset flying state
        onArrival(tool.id);
      }
    };

    node.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      node.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [tool.id, isDragging, onArrival]);

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsFlying(false);
    onInteraction(tool.id);
    const rect = toolRef.current.getBoundingClientRect();
    offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    onRelease(tool.id, position.x, position.y);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const getTransform = () => {
    if (isDragging) return `translate(${position.x}px, ${position.y}px)`;
    if (isFlying)
      return `translate(${tool.endX}px, ${tool.endY}px) rotate(${tool.rotation}deg)`;
    return `translate(${tool.startX}px, ${tool.startY}px)`;
  };

  return (
    <img
      ref={toolRef}
      src={tool.src}
      alt={tool.type}
      className={`floating-tool ${isDragging ? "dragging" : ""}`}
      style={{
        zIndex: isDragging ? 1000 : tool.zIndex,
        cursor: isDragging ? "grabbing" : "grab",
        transform: getTransform(),
      }}
      onMouseDown={handleMouseDown}
    />
  );
};

export default FloatingTool;
