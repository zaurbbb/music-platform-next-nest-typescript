import {
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import React, {
  FC,
  useState,
} from "react";
import StepWrapper from "../../components/StepWrapper";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useInput } from "../../hooks/useInput";
import MainLayout from "../../layout/MainLayout";
import FileUpload from "../../components/FileUpload";
import { createTrack } from "../../store/tracks/thunks";

const Create: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [picture, setPicture] = useState<File>();
  const [audio, setAudio] = useState<File>();
  const name = useInput("");
  const artist = useInput("");
  const text = useInput("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  function next() {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }

    if (
      activeStep === 2
      && name.value
      && artist.value
      && text.value
      && picture
      && audio
    ) {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("artist", artist.value);
      formData.append("text", text.value);
      formData.append("picture", picture);
      formData.append("audio", audio);
      dispatch(createTrack({
        formData,
        router,
      }));
    }
  }

  function back() {
    setActiveStep((prev) => prev - 1);
  }

  return (
    <MainLayout title="Create your own track">
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid
            container
            direction="column"
            style={{
              gap: 20,
              padding: 20,
            }}
          >
            <TextField
              label={"Track's name"}
              {...name}
            />
            <TextField
              label={"Track's author"}
              {...artist}
            />
            <TextField
              label={"Track's lyrics"}
              {...text}
              rows={3}
              multiline
            />
          </Grid>
        )}
        {activeStep === 1 &&
          <FileUpload
            setFile={setPicture}
            accept="image/*"
          >
            <Button>Upload poster</Button>
          </FileUpload>
        }
        {activeStep === 2 &&
          <FileUpload
            setFile={setAudio}
            accept="audio/*"
          >
            <Button>Upload audio</Button>
          </FileUpload>
        }
      </StepWrapper>
      <Grid justifyContent="space-between">
        <Button
          disabled={activeStep === 0}
          onClick={back}
        >
          Back
        </Button>
        <Button onClick={next}>
          Next
        </Button>

      </Grid>
    </MainLayout>
  );
};

export default Create;

