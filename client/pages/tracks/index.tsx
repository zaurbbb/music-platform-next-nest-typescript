import {
  Box,
  Button,
  Card,
  Grid,
} from "@mui/material";
import {
  GetServerSideProps,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import React, { FC } from "react";
import TrackList from "../../components/TrackList";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import MainLayout from "../../layout/MainLayout";
import { wrapper } from "../../store/index";
import { NextThunkDispatch } from "../../store/reducers";
import { fetchTracks } from "../../store/tracks/thunks";
// import {
//   NextThunkDispatch,
//   wrapper,
// } from "../../store/index";
// import { fetchTracks } from "../../store/tracks/thunks";

const Index: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    tracks,
    error,
  } = useAppSelector((state) => state.tracks);

  function handleNavigateCreate() {
    router.push("/tracks/create");
  }

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }
  console.log("tracks", tracks);
  return (
    <MainLayout>
      <Grid
        container
        justifyContent="center"
      >
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid
              container
              justifyContent="space-between"
            >
              <h1>Tracks list</h1>
              <Button onClick={handleNavigateCreate}>Upload</Button>
              <button onClick={() => dispatch(fetchTracks())}>
                Generate Kanye Quote
              </button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};


export default Index;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async () => {
      const dispatch = store.dispatch;
      await dispatch(fetchTracks());
      return {
        props: {},
      };
    }
);
