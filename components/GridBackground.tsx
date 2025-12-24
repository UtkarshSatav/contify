"use client";

// Percentage-based Grid Coordinates
// Total vertical lines: 21 intervals across 100% width
const V_LINES_PCT = [
    4.87, 9.40, 13.92, 18.45, 22.97, 27.50, 32.02, 36.54, 41.07, 45.59,
    50.12, 54.64, 59.17, 63.69, 68.21, 72.74, 77.26, 81.79, 86.31, 90.83, 95.36
];

const H_LINES_PCT = [
    5.21, 12.81, 20.41, 28.01, 35.61, 43.21, 50.81, 58.41, 66.01, 73.61, 81.21, 88.81, 96.41
];

interface GridBackgroundProps {
    className?: string;
}

export default function GridBackground({ className }: GridBackgroundProps) {
    // Pure static grid background that extends the full page.
    // Active connection lines are in Hero.tsx for perfect alignment with content.

    return (
        <div className={`pointer-events-none absolute inset-0 ${className || ""}`}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Base Grid - Vertical Lines - extend to 100% */}
                {V_LINES_PCT.map((x, i) => (
                    <line
                        key={`v-${i}`}
                        id={`v-line-${i}`}
                        x1={`${x}`}
                        y1="0"
                        x2={`${x}`}
                        y2="100"
                        stroke="#3B6BA8"
                        strokeOpacity="0.25"
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
                        stroke="#3B6BA8"
                        strokeOpacity="0.25"
                        strokeWidth="0.5"
                        vectorEffect="non-scaling-stroke"
                    />
                ))}
            </svg>
        </div>
    );
}
