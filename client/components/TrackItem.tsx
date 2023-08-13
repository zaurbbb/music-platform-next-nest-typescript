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
import PlayerIcon from "../UI/PlayerIcon";
import TrackInfo from "../UI/TrackInfo";

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

  const displayTime = active && <div>02:33 / 03:22</div>;

  function handleNavigateTrack() {
    router.push(`/tracks/${track._id}`);
  }

  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    <Card
      className={styles.track}
      onClick={handleNavigateTrack}
    >
      <PlayerIcon
        pause={true}
        onClick={() => {
        }}
      />
      <img
        width={70}
        height={70}
        src={picture}
        alt={`Picture of ${name}`}
      />
      <TrackInfo
        name={name}
        artist={artist}
      />
      <IconButton
        onClick={stopPropagation}
        style={{ margin: "auto" }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
