import {
  Button,
  Grid,
  TextField,
} from "@mui/material";
import React, {
  FC,
  useState,
} from "react";
import StepWrapper from "../../components/StepWrapper";
import MainLayout from "../../layout/MainLayout";
import FileUpload from "../../components/FileUpload";

const Create: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);


  function next() {
    setActiveStep((prev) => prev + 1);
  }

  function back() {
    setActiveStep((prev) => prev - 1);
  }

  return (
    <MainLayout>
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
            <TextField label={"Track's name"} />
            <TextField label={"Track's author"} />
            <TextField
              label={"Track's lyrics"}
              rows={3}
              multiline
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload
            setFile={setPicture}
            accept="image/*"
          >
            <Button>
              Upload poster
            </Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload
            setFile={setAudio}
            accept="audio/mp3"
          >
            <Button>
              Upload audio
            </Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid justifyContent="space-between">
        <Button
          disabled={activeStep === 0}
          onClick={back}
        >
          Back
        </Button>
        <Button
          disabled={activeStep === 2}
          onClick={next}
        >
          Next
        </Button>

      </Grid>
    </MainLayout>
  );
};

export default Create;

