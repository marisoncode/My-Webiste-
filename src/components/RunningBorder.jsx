import React from 'react';

/**
 * Crisp corner-to-corner running border overlay on hover (solid teal, no gradients).
 * Parent element must have `run-border-card` class.
 */
export default function RunningBorder({ rx = 16 }) {
  return (
    <svg
      className="run-border-svg z-20"
      aria-hidden="true"
    >
      <rect
        className="run-border-rect"
        x="1.5"
        y="1.5"
        width="calc(100% - 3px)"
        height="calc(100% - 3px)"
        rx={rx}
        pathLength="100"
      />
    </svg>
  );
}
