"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface GridBackgroundProps {
  className?: string;
}

interface LitCell {
  id: number;
  x: number;
  y: number;
  animationDuration: number;
}

export default function GridBackground({ className }: GridBackgroundProps) {
  const cellSize = 58;
  const [litCells, setLitCells] = useState<LitCell[]>([]);
  const [offsetX, setOffsetX] = useState(0);
  const nextIdRef = useRef(0);
  const gridInfoRef = useRef({ cols: 0, rows: 0 });

  const createCell = useCallback((): LitCell => {
    const { cols, rows } = gridInfoRef.current;
    return {
      id: nextIdRef.current++,
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows),
      animationDuration: 2500 + Math.random() * 2000, // 2.5-4.5 seconds
    };
  }, []);

  useEffect(() => {
    const updateGrid = () => {
      // Calculate horizontal offset to align with "center top" background position
      const horizontalOffset = (window.innerWidth % cellSize) / 2;
      setOffsetX(horizontalOffset);

      const cols = Math.ceil(window.innerWidth / cellSize) + 2;
      const rows = Math.ceil(document.documentElement.scrollHeight / cellSize) + 2;
      gridInfoRef.current = { cols, rows };
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);

    // Initialize with random 10-20 cells
    const initialCount = 10 + Math.floor(Math.random() * 11);
    const initialCells: LitCell[] = [];
    for (let i = 0; i < initialCount; i++) {
      initialCells.push(createCell());
    }
    setLitCells(initialCells);

    return () => window.removeEventListener("resize", updateGrid);
  }, [createCell]);

  const handleAnimationEnd = useCallback((cellId: number) => {
    setLitCells(prev => {
      const filtered = prev.filter(c => c.id !== cellId);
      const targetCount = 10 + Math.floor(Math.random() * 11); // 10-20
      if (filtered.length < targetCount) {
        return [...filtered, createCell()];
      }
      return [...filtered, createCell()];
    });
  }, [createCell]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className || ""}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(59, 107, 168, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 107, 168, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: `${cellSize}px ${cellSize}px`,
        backgroundPosition: "center top",
      }}
    >
      {litCells.map(cell => (
        <div
          key={cell.id}
          className="absolute animate-cell-pulse"
          style={{
            left: offsetX + cell.x * cellSize + 1,
            top: cell.y * cellSize + 1,
            width: cellSize - 2,
            height: cellSize - 2,
            backgroundColor: "rgba(0, 60, 255, 0.09)",
            animationDuration: `${cell.animationDuration}ms`,
          }}
          onAnimationEnd={() => handleAnimationEnd(cell.id)}
        />
      ))}
    </div>
  );
}
