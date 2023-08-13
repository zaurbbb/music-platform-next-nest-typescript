import React, { FC } from "react";
import { useRouter } from "next/router";

import { Delete } from "@mui/icons-material";
import {
  Card,
  IconButton,
} from "@mui/material";

import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../hooks/useAppSelector";
import styles from "../styles/TrackItem.module.scss";
import { ITrack } from "../types/track";
import PlayerIcon from "../UI/PlayerIcon";
import TrackInfo from "../UI/TrackInfo";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({
  // component props
  track,
}) => {
  const router = useRouter();
  const {
    name,
    artist,
    picture,
  } = track;
  const {
    active,
    pause,
  } = useAppSelector((state) => state.player);
  const {
    setPlay,
    setPause,
    setActive,
  } = useActions();

  function handleNavigateTrack() {
    router.push(`/tracks/${track._id}`);
  }

  function stopPropagation(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
  }

  function play() {
    if (active) {
      setActive(null);
    }
    setActive(track);
    if (pause) {
      setPlay();
    } else {
      setPause();
    }
  }

  return (
    <Card
      className={styles.track}
      onClick={handleNavigateTrack}
    >
      <PlayerIcon
        pause={active?.name === name ? pause : true}
        onClick={play}
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
