"use client";

// Percentage-based Grid Coordinates
// Total vertical lines: 21 intervals across 100% width
const V_LINES_PCT = [
    4.87, 9.40, 13.92, 18.45, 22.97, 27.50, 32.02, 36.54, 41.07, 45.59,
    50.12, 54.64, 59.17, 63.69, 68.21, 72.74, 77.26, 81.79, 86.31, 90.83, 95.36
];

const H_LINES_PCT = [
    5.21, 12.81, 20.41, 28.01, 35.61, 43.21, 50.81, 58.41, 66.01
];

const V_LENGTHS_PCT = [
    63.9, 67.9, 72.6, 76.3, 79.8, 82.9, 86.2, 90.2, 92.6, 96.3,
    100, 96.3, 92.6, 90.2, 86.2, 82.9, 79.8, 76.3, 72.6, 67.9, 63.9
];

interface GridBackgroundProps {
    className?: string;
}

export default function GridBackground({ className }: GridBackgroundProps) {
    // Pure static grid background. 
    // Active connection lines have been moved to Hero.tsx to ensure perfect vertical alignment with content.

    return (
        <div className={`pointer-events-none absolute inset-0 ${className}`}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Base Grid - Vertical Lines */}
                {V_LINES_PCT.map((x, i) => (
                    <line
                        key={`v-${i}`}
                        id={`v-line-${i}`}
                        x1={`${x}`}
                        y1="0"
                        x2={`${x}`}
                        y2={`${V_LENGTHS_PCT[i]}`}
                        stroke="#093929"
                        strokeOpacity="0.3"
                        strokeWidth="0.5"
                        vectorEffect="non-scaling-stroke"
                    />
                ))}

                {/* Base Grid - Horizontal Lines */}
                {H_LINES_PCT.map((y, i) => (
                    <line
                        key={`h-${i}`}
                        id={`h-line-${i}`}
                        x1="100"
                        y1={`${y}`}
                        x2="0"
                        y2={`${y}`}
                        stroke="#093929"
                        strokeOpacity="0.3"
                        strokeWidth="0.5"
                        vectorEffect="non-scaling-stroke"
                    />
                ))}
            </svg>
        </div>
    );
}
