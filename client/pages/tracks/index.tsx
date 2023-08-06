import {
  Box,
  Button,
  Card,
  Grid,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";
import MainLayout from "../../layouts/MainLayout";

const Index: FC = () => {
  const router = useRouter();
  const tracks = [
    {},
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
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;

