import { Container } from "@mui/material";
import React, {
  FC,
  ReactNode,
} from "react";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({
  // component props
  children,
}) => {
  return (
    <>
      <Sidebar />
      <Container style={{ marginTop: 40  }}>
        {children}
      </Container>
      <Player active={false} />
    </>
  );
};

export default MainLayout;
