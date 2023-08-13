import {
  Pause,
  PlayArrow,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { FC } from "react";

interface PlayerIconProps {
  pause: boolean;
  onClick: Function;
}

const PlayerIcon: FC<PlayerIconProps> = ({
  // component props
  pause,
  onClick,
}) => {
  const displayIcon = !pause ? <Pause /> : <PlayArrow />;

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    onClick();
  }

  return (
    <IconButton onClick={handleClick}>
      {displayIcon}
    </IconButton>
  );
};

export default PlayerIcon;
