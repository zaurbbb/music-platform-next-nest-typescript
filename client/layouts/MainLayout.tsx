import { Container } from "@mui/material";
import React, {
  FC,
  ReactNode,
} from "react";
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
      <Container style={{ margin: "40px 0" }}>
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
