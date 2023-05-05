import React from "react";
import { Container, Grid, Box, Stack } from "@mui/material";
import aboutUsImage from "../../assets/images/aboutUs.jpg";
import Typography from "@mui/material/Typography";
import AboutCard from "../../components/Card/AboutCard";

const About = () => {
  return (
    <>
      <Box>
        <Container
          maxWidth="xl"
          sx={{
            padding: "2rem 0",
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              img: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              },
            }}
          >
            <Grid item xs={8} lg={6}>
              <img src={aboutUsImage} alt="about-us image" />
            </Grid>
            <Grid item xs={8} lg={6}>
              <Typography
                variant="h3"
                color={"custom.secondary"}
                fontWeight={500}
                marginY={2}
              >
                About Us
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                quia soluta dolor voluptatem quos possimus dignissimos odio
                culpa cumque fugit quae, voluptatibus fuga, perspiciatis illum
                perferendis reiciendis maiores aliquam numquam laudantium a
                minus autem nobis unde distinctio! Rerum non possimus obcaecati
                voluptatem ut quos reprehenderit, ipsam laborum! Error libero,
                voluptatibus eveniet pariatur perspiciatis unde numquam porro
                quisquam quia adipisci hic saepe nihil, inventore sint nisi,
                reprehenderit repellat! Molestias, totam dolor.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "custom.light" }}>
        <Container
          maxWidth="xl"
          sx={{
            padding: "2rem 0",
          }}
        >
          <Stack
            direction="row"
            gap={1}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            <AboutCard
              num="01"
              title="The study and training"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ratione sint nemo veniam perspiciatis unde."
            />
            <AboutCard
              num="02"
              title="Loaction"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ratione sint nemo veniam perspiciatis unde."
            />
            <AboutCard
              num="03"
              title="accommodation"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ratione sint nemo veniam perspiciatis unde."
            />
            <AboutCard
              num="04"
              title="Transportation"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ratione sint nemo veniam perspiciatis unde."
            />
            <AboutCard
              num="05"
              title="Cost of studying aviation"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ratione sint nemo veniam perspiciatis unde."
            />
            <AboutCard
              num="06"
              title="Theoretical study of Egypt"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ratione sint nemo veniam perspiciatis unde."
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default About;