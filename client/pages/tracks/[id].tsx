import {
  Grid,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import React, { FC } from "react";
import MainLayout from "../../layout/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage: FC = () => {
  const track: ITrack =
    {
      _id: "64ca74fa70e707fa0c6abc48",
      name: "Diet Mountain Dew",
      artist: "Lana Del Ray",
      text: "You're no good for me\nBaby, you're no good for me",
      listens: 3,
      picture: "http://localhost:5000/image/fa369549-576b-40c8-aaf3-5ad20e2df230.png",
      audio: "http://localhost:5000/audio/b73e709b-ae02-4323-add9-1e7f786c02c6.mp3",
      comments: [],
    };
  const router = useRouter();

  function handleNavigateBack() {
    router.push("/tracks");
  }

  return (
    <MainLayout>
      <Button
        variant="outlined"
        style={{ fontSize: 20 }}
        onClick={handleNavigateBack}
      >
        Come back
      </Button>
      <Grid style={{ margin: '20px 0' }}>
        <img
          src={track.picture}
          alt="track"
          width={200}
          height={200}
        />
        <div>
          <h1>Track: {track.name}</h1>
          <h1>Artist: {track.artist}</h1>
          <h1>Listens: {track.listens}</h1>
        </div>
      </Grid>
      <h1>Text lyrics</h1>
      <p>{track.text}</p>
      <Grid container>
        <TextField
          label="your name"
          fullWidth
        />
        <TextField
          label="your comment on the track?"
          fullWidth
          multiline
          rows={4}
        />
        <Button>Send comment</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Author: {comment.username}</div>
            <div>Comment: {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
;

