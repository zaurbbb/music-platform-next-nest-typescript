import {
  Box,
  Button,
  Card,
  Grid,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";
import TrackList from "../../components/TrackList";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const Index: FC = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "64ca74fa70e707fa0c6abc48",
      name: "Diet Mountain Dew",
      artist: "Lana Del Ray",
      text: "You're no good for me\nBaby, you're no good for me",
      listens: 3,
      picture: "http://localhost:5000/image/fa369549-576b-40c8-aaf3-5ad20e2df230.png",
      audio: "http://localhost:5000/audio/b73e709b-ae02-4323-add9-1e7f786c02c6.mp3",
      comments: [],
    },
    {
      _id: "64c929b069d3a73f6195fab2",
      name: "Born to Die",
      artist: "Lana Del Ray",
      text: "Feet don't fail me now\nTake me to the finish line",
      listens: 0,
      picture: "http://localhost:5000/image/73e1adb6-a84a-42ab-b9e9-ec79fb374a71.png",
      audio: "http://localhost:5000/audio/83bcf1ce-5451-499c-a304-e3fe417c291b.mp3",
      comments: [],
    },
    {
      _id: "64cfd938b12fe66317c82901",
      name: "Summertime Sadness",
      artist: "Lana Del Ray",
      text: "Kiss me hard before you go,\nSummertime sadness",
      listens: 0,
      picture: "http://localhost:5000/image/c1724fcf-6b6d-4e68-a908-1e6be00ab49e.png",
      audio: "http://localhost:5000/audio/20b9949b-f1da-481d-ac2b-7a126c1d6284.mp3",
      comments: [],
    }
  ];

  function handleNavigateCreate() {
    router.push("/tracks/create");
  }
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
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;

