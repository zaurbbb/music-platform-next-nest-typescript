import React, { FC } from "react";

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (event) => void;
}

const TrackProgress: FC<TrackProgressProps> = ({
  // component props
  left,
  right,
  onChange,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={left}
        max={right}
        value={left}
        onChange={onChange}
      />
      <p>{left} / {right}</p>
    </div>
  );
};

export default TrackProgress;
