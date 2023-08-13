import React, {
  ChangeEvent,
  FC,
} from "react";

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TrackProgress: FC<TrackProgressProps> = ({
  // component props
  left,
  right,
  onChange,
}) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "0 20px",
      }}
    >
      <input
        type="range"
        min={0}
        max={right}
        // value={left}
        onChange={onChange}
      />
      <p>{left} / {right}</p>
    </div>
  );
};

export default TrackProgress;
