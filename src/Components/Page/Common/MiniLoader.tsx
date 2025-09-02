import React from "react";

function MiniLoader({ type = "Warning", size = 100 }) {
  return (
    <div
      className={`spinner-border text-${type}`}
      style={{ scale: `${size}%` }}
    >
      {""}
    </div>
  );
}

export default MiniLoader;