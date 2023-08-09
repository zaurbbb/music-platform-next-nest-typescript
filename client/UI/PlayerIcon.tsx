import {
  Pause,
  PlayArrow,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { FC } from "react";

interface PlayerIconProps {
  active: boolean;
}

const PlayerIcon: FC<PlayerIconProps> = ({
  // component props
  active,
}) => {
  const displayIcon = active ? <Pause /> : <PlayArrow />;

  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    <IconButton onClick={stopPropagation}>
      {displayIcon}
    </IconButton>
  );
};

export default PlayerIcon;
