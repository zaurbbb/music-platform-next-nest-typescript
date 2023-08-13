import { Container } from "@mui/material";
import React, {
  FC,
  ReactNode,
} from "react";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../hooks/useAppSelector";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({
  // component props
  children,
}) => {
  const { active } = useAppSelector((state) => state.player);
  return (
    <>
      <Sidebar />
      <Container style={{ marginTop: 40 }}>
        {children}
        {active && <Player />}
      </Container>
    </>
  );
};

export default MainLayout;
