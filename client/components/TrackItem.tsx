import React, { FC } from "react";
import { useRouter } from "next/router";

import { Delete } from "@mui/icons-material";
import {
  Card,
  IconButton,
} from "@mui/material";
import { filePath } from "../helpers/filePath";

import { useActions } from "../hooks/useActions";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { removeTrack } from "../store/tracks/thunks";
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
    _id,
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
  const imagePath = filePath(picture);
  const dispatch = useAppDispatch();

  function handleNavigateTrack() {
    router.push(`/tracks/${track._id}`);
  }

  function handleRemoveTrack(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
    dispatch(removeTrack(_id));
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
        src={imagePath}
        alt={`Picture of ${name}`}
      />
      <TrackInfo
        name={name}
        artist={artist}
      />
      <IconButton
        onClick={handleRemoveTrack}
        style={{ margin: "auto" }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
