import React from "react";

/**
 * Reusable grid pattern background component
 * Used across multiple sections for consistent visual styling
 * 
 * @param {string} className - Additional classes for the container
 * @param {number} primaryOpacity - Opacity for the primary grid (default: 0.25)
 * @param {number} secondaryOpacity - Opacity for the secondary grid (default: 0.15)
 * @param {string} primarySize - Size of primary grid cells (default: "60px")
 * @param {string} secondarySize - Size of secondary grid cells (default: "120px")
 */
export default function GridPattern({
  className = "",
  primaryOpacity = 0.25,
  secondaryOpacity = 0.15,
  primarySize = "60px",
  secondarySize = "120px",
}) {
  return (
    <>
      {/* Primary grid pattern */}
      <div
        className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] ${className}`}
        style={{
          opacity: primaryOpacity,
          backgroundSize: `${primarySize} ${primarySize}`,
        }}
      />
      
      {/* Secondary grid pattern for depth */}
      <div
        className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] ${className}`}
        style={{
          opacity: secondaryOpacity,
          backgroundSize: `${secondarySize} ${secondarySize}`,
        }}
      />
    </>
  );
}
