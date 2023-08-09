import {
  Card,
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import React, { FC } from "react";

interface StepWrapperProps {
  activeStep: number;
  children: React.ReactNode;
}

const steps = [
  "Track's info",
  "Upload a poster",
  "Upload a track",
];
const StepWrapper: FC<StepWrapperProps> = ({
  // component props
  activeStep,
  children,
}) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step
            key={step}
            completed={activeStep > index}
          >
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent="center"
        style={{
          margin: "70px 0",
          height: 270,
        }}
      >
        <Card style={{width: 600}}>
          {children}
        </Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
