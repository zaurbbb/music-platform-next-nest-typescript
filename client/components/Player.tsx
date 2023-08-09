import { VolumeUp } from "@mui/icons-material";
import React, { FC } from "react";
import PlayerIcon from "../UI/PlayerIcon";
import styles from "../styles/Player.module.scss";
import TrackInfo from "../UI/TrackInfo";
import TrackProgress from "../UI/TrackProgress";

interface PlayerProps {
  active: boolean;
}

const Player: FC<PlayerProps> = ({
  // component props
  active,
}) => {
  return (
    <div className={styles.player}>
      <PlayerIcon active={active} />
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
