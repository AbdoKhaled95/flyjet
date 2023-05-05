import React from "react";
import ContactForm from "../../components/Contact/ContactForm";
import { Container, Grid, Box } from "@mui/material";

const Contacts = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          padding: "2rem 0",
        }}
      ></Container>
      <Box sx={{ bg: "custom.main" }}>
        <Container
          maxWidth="xl"
          sx={{
            padding: "2rem 0",
          }}
        >
          <Grid container>
            <Grid item xl={6} xs={12}></Grid>

            <Grid item xl={6} xs={12}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contacts;
