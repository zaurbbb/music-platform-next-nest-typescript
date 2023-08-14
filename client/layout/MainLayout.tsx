import { Container } from "@mui/material";
import Head from "next/head";
import React, {
  FC,
  ReactNode,
} from "react";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../hooks/useAppSelector";

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({
  // component props
  title,
  description,
  keywords,
  children,
}) => {
  const { active } = useAppSelector((state) => state.player);
  const pageTitle = title || "Music Platform";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={`Music Platform. Here anyone can become popular ${description}`}
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <meta
          name="keywords"
          content={keywords || "music, tracks, artists, albums, comments"}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <Sidebar />
      <Container style={{ marginTop: 40 }}>
        {children}
        {active && <Player />}
      </Container>
    </>
);
};

export default MainLayout;
