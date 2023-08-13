import { Grid } from "@mui/material";
import React, { FC } from "react";

interface TrackInfoProps {
  name: string | null;
  artist: string | null;
}

const TrackInfo: FC<TrackInfoProps> = ({
  // component props
  name,
  artist,
}) => {
  return (
    <Grid
      container
      direction="column"
      style={{
        width: 200,
        margin: "0 20px",
        cursor: "pointer",
      }}
    >
      <div>{name}</div>
      <div
        style={{
          fontSize: 12,
          color: 'gray',
        }}
      >{artist}</div>
    </Grid>
  );
};

export default TrackInfo;
