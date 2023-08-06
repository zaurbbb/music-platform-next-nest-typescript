import {
  Delete,
  Pause,
  PlayArrow,
} from "@mui/icons-material";
import {
  Card,
  Grid,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { ITrack } from "../types/track";
import styles from "../styles/TrackItem.module.scss";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({
  // component props
  track,
  active = false,
}) => {
  const router = useRouter();
  const {
    name,
    artist,
    picture,
  } = track;
  const displayIcon = active ? <Pause /> : <PlayArrow />;
  const displayTime = active && <div>02:33 / 03:22</div>;

  function handleNavigateTrack() {
    router.push(`/tracks/${track._id}`);
  }
  return (
    <Card
      className={styles.track}
      onClick={handleNavigateTrack}
    >
      <IconButton>
        {displayIcon}
      </IconButton>
      <img
        width={70}
        height={70}
        src={picture}
        alt={`Picture of ${name}`}
      />
      <Grid
        container
        direction="column"
        style={{
          width: 200,
          margin: "0 20px",
        }}
      >
        <div>{name}</div>
        <div style={{fontSize: 12, color: 'gray'}}>{artist}</div>
      </Grid>
      {displayTime}
      <IconButton style={{margin: "auto"}}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
