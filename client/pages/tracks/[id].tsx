import {
  Grid,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { API } from "../../api/index";
import { filePath } from "../../helpers/filePath";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useInput } from "../../hooks/useInput";
import MainLayout from "../../layout/MainLayout";
import { addComment } from "../../store/tracks/thunks";
import { ITrack } from "../../types/track";

interface TrackPageProps {
  serverTrack: ITrack;
}

const TrackPage = ({
  // next components
  serverTrack,
}: TrackPageProps) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const username = useInput("");
  const text = useInput("");
  const imagePath = filePath(track.picture);
  const router = useRouter();
  const dispatch = useAppDispatch();

  function handleNavigateBack() {
    router.push("/tracks");
  }

  async function handleAddComment() {
    const comment = {
      username: username.value,
      text: text.value,
      trackId: track._id,
    };
    dispatch(addComment(comment));
    setTrack({
      ...track,
      comments: [
        ...track.comments,
        comment,
      ],
    });

  }

  return (
    <MainLayout
      title={`Track ${track.name} by ${track.artist}`}
      description={`Track ${track.name} by ${track.artist}`}
    >
      <Button
        variant="outlined"
        style={{ fontSize: 20 }}
        onClick={handleNavigateBack}
      >
        Come back
      </Button>
      <Grid style={{ margin: '20px 0' }}>
        <img
          src={imagePath}
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
      <Grid
        container
        style={{
          gap: 20,
        }}
      >
        <TextField
          label="your name"
          {...username}
          fullWidth
        />
        <TextField
          label="your comment on the track?"
          {...text}
          fullWidth
          multiline
          rows={4}
        />
        <Button onClick={handleAddComment}>Send comment</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment.text}>
            <div>Author: {comment.username}</div>
            <div>Comment: {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{ serverTrack: ITrack }> = async ({ params }) => {
  const response = await API.get(`/tracks/${params.id}`);
  console.log(response.data.comments);
  return {
    props: {
      serverTrack: response.data,
    },
  };
};

export default TrackPage;

