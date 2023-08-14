import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
} from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, {
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import TrackList from "../../components/TrackList";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import MainLayout from "../../layout/MainLayout";
import { wrapper } from "../../store/index";
import { NextThunkDispatch } from "../../store/reducers";
import {
  fetchTracks,
  searchTracks,
} from "../../store/tracks/thunks";
import { ITrack } from "../../types/track";

interface TracksPageProps {
  serverTracks: ITrack[];
}

const Index = ({
  // server props
  serverTracks,
}: TracksPageProps) => {
  console.log("serverTracks", serverTracks);
  const [query, setQuery] = useState<string>("");
  const { tracks } = useAppSelector((state) => state.tracks);
  const dispatch = useDispatch() as NextThunkDispatch;
  const { setTracks } = useActions();
  const router = useRouter();

  useEffect(() => {
    setTracks(serverTracks);
  }, []);

  function handleNavigateCreate() {
    router.push("/tracks/create");
  }

  async function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    await dispatch(await searchTracks(event.target.value));
  }

  return (
    <MainLayout title="Music Platform Tracks">
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
            </Grid>
          </Box>
          <TextField
            value={query}
            fullWidth
            onChange={handleSearch}
          />
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};


export const getServerSideProps: GetServerSideProps<{ serverTracks: ITrack[] }> = wrapper.getServerSideProps(
  (store) =>
    async () => {
      const dispatch = store.dispatch;
      await dispatch(await fetchTracks());
      await store.dispatch(await fetchTracks());

      return {
        props: {
          serverTracks: store.getState().tracks.tracks,
        },
      };
    },
);
export default Index;
