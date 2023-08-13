import { VolumeUp } from "@mui/icons-material";
import React, {
  ChangeEvent,
  FC,
  useEffect,
  useState,
} from "react";
import { API_URL } from "../api/index";
import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../hooks/useAppSelector";
import styles from "../styles/Player.module.scss";
import PlayerIcon from "../UI/PlayerIcon";
import TrackInfo from "../UI/TrackInfo";
import TrackProgress from "../UI/TrackProgress";

const Player: FC = () => {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement>();

  const {
    pause,
    volume,
    active,
    duration,
    currentTime,
  } = useAppSelector((state) => state.player);
  const {
    setPause,
    setPlay,
    setVolume,
    setCurrentTime,
    setDuration,
  } = useActions();

  useEffect(() => {
    audioElement?.pause();
    if (active) {
      const audio = new Audio();
      console.log(active.audio);
      audio.src = API_URL + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
      audio.play();
      setAudioElement(audio);
    }

    return () => {
      audioElement?.pause();
      setAudioElement(undefined);
    };
  }, [active]);

  function play() {
    if (!audioElement) {
      return;
    }

    if (pause) {
      setPlay();
      audioElement.play();
    } else {
      setPause();
      audioElement.pause();
    }
  }

  function handleVolume(event: ChangeEvent<HTMLInputElement>) {
    if (!audioElement) return;

    const value = Number(event.target.value);
    audioElement.volume = value / 100;
    setVolume(value);
  }

  function handleCurrentTime(event: ChangeEvent<HTMLInputElement>) {
    if (!audioElement) return;

    const value = Number(event.target.value);
    audioElement.currentTime = value;
    setCurrentTime(value);
  }

  return (
    <div className={styles.player}>
      <PlayerIcon
        pause={pause}
        onClick={play}
      />
      {/*<button onClick={play}>shalom mazafaka</button>*/}
      <TrackInfo
        name={active?.name}
        artist={active?.artist}
      />
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={handleCurrentTime}
      />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress
        left={volume}
        right={100}
        onChange={handleVolume}
      />
    </div>
  );
};

export default Player;
