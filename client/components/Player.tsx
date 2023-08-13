import { VolumeUp } from "@mui/icons-material";
import React, { FC } from "react";
import { useActions } from "../hooks/useActions";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import {
  setPause,
  setPlay,
} from "../store/player/slice";
import styles from "../styles/Player.module.scss";
import PlayerIcon from "../UI/PlayerIcon";
import TrackInfo from "../UI/TrackInfo";
import TrackProgress from "../UI/TrackProgress";

const Player: FC = () => {
  const track = {
    _id: "64cfd938b12fe66317c82901",
    name: "Summertime Sadness",
    artist: "Lana Del Ray",
    text: "Kiss me hard before you go,\nSummertime sadness",
    listens: 0,
    picture: "http://localhost:5000/image/c1724fcf-6b6d-4e68-a908-1e6be00ab49e.png",
    audio: "http://localhost:5000/audio/20b9949b-f1da-481d-ac2b-7a126c1d6284.mp3",
    comments: [],
  };
  const {
    active,
    duration,
    volume,
    currentTime,
    pause,
  } = useAppSelector((state) => state.player);


  // const { setPlay, setPause } = playerSlice.actions;
  const {
    setPause,
    setPlay,
  } = useActions();
  
  function play() {
    if (pause) {
      setPlay();
      // setPlay();
      //   // audio?.play();
      //   // audio?.src = track.audio;
    } else {
      setPause();
      //   // audio?.pause();
    }
  }

  return (
    <div className={styles.player}>
      <PlayerIcon
        pause={pause}
        onClick={play}
      />
      <TrackInfo
        name="who"
        artist="ami"
      />
      <TrackProgress
        left={0}
        right={100}
        onChange={() => {
        }}
      />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress
        left={0}
        right={100}
        onChange={() => {
        }}
      />
    </div>
  );
};

export default Player;
