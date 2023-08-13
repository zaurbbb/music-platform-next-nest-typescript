import {
  Box,
  Grid,
} from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { ITrack } from "../types/track";
import TrackItem from "./TrackItem";

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: FC<TrackListProps> = ({
  // component props
  tracks,
}) => {
  return (
    <Grid
      container
      direction="column"
    >
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem
            key={track._id}
            track={track}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
