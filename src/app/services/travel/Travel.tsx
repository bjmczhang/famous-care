import React from "react";
import style from "@/style/about.module.scss";
import { Box, Container, Typography, Grid } from "@mui/material";
import image1 from "/public/images/Image_20231030201916.jpg";
import image2 from "/public/images/Image_20231030201948.jpg";
import image3 from "/public/images/Image_20231030201953.jpg";
import image4 from "/public/images/Image_20231030202001.jpg";
import image5 from "/public/images/black-man-wheelchair-riding-along-park-road_74855-22191.jpg";
import image6 from "/public/images/friend-helping-smiley-disabled-man-full-shot_23-2149392004.jpg";
import image7 from "/public/images/full-shot-couple-with-binoculars_23-2149094667.jpg";
import image8 from "/public/images/closeup-disabled-businessman-wearing-protective-gloves-while-pushing-himself-wheelchair_637285-6411.jpg";
import image9 from "/public/images/tourists-go-up-hill-sunrise_1150-19692.jpg";
import image10 from "/public/images/woman-nursing-home_23-2147788005.jpg";
import image11 from "/public/images/young-adult-helping-disabled-friend_23-2149433030.jpg";
import Image from "next/image";

const Travel = () => {
  return (
    <Box className={style.about}>
      <Box className={style.banner}>
        <Typography variant="h4" className={style.bannerTitle}>
          Assist-Travel/Transport
        </Typography>
      </Box>
      <Container>
        <Box className={style.homeAbout}>
          <Container maxWidth="lg">
            <Grid container alignItems="center">
              <Grid item md={6} xs={12} className={style.home__about__left}>
                <Image
                  className={style.home__about__image}
                  src={image5}
                  alt=""
                />
              </Grid>
              <Grid item md={6} xs={12} className={style.home__about__right}>
                <Typography
                  variant="h5"
                  className={style.home__about__right__subTitle}
                >
                  Our Services Include:
                </Typography>

                <Typography
                  variant="body1"
                  className={style.home__about__right__body}
                >
                  1. <b>Safe and Reliable Transportation </b>: Count on us for
                  safe and reliable transportation services. We prioritize your
                  safety and comfort, ensuring that you arrive at your
                  destination on time and with peace of mind.
                  <br /> <br />
                  2. <b>Work and School Commutes </b>: Our transportation
                  services make it hassle-free for you to get to work or school.
                  Say goodbye to transportation barriers and embrace your daily
                  routines with confidence.
                </Typography>

                {/* <Button
                endIcon={<SendIcon />}
                className={style.home__about__right__btn}
              >
                Get a Quote
              </Button> */}
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid
                item
                md={6}
                xs={12}
                className={style.home__about__right + " " + style.invert__left}
              >
                <Typography
                  variant="body1"
                  className={style.home__about__right__body}
                >
                  3. <b>Shopping and Social Outings</b>: Enjoy the freedom to
                  engage in shopping and social activities with ease. Our
                  service enables you to maintain an active and vibrant social
                  life. <br /> <br />
                  4. <b>Medical Appointments </b>: We understand the importance
                  of timely medical appointments. Our transport services ensure
                  you never miss an important healthcare visit. <br /> <br />
                  5. <b>Flexible Scheduling</b>: Choose from weekly or daily
                  trips based on your specific needs and preferences. Our
                  flexibility allows you to plan your outings and activities
                  conveniently.
                </Typography>

                {/* <Button
                endIcon={<SendIcon />}
                className={style.home__about__right__btn}
              >
                Get a Quote
              </Button> */}
              </Grid>
              <Grid item md={6} xs={12} className={style.home__about__left}>
                <Image
                  className={style.home__about__image}
                  src={image6}
                  alt=""
                />
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item md={6} xs={12} className={style.home__about__left}>
                <Image
                  className={style.home__about__image}
                  src={image3}
                  alt=""
                />
              </Grid>
              <Grid item md={6} xs={12} className={style.home__about__right}>
                <Typography
                  variant="h5"
                  className={style.home__about__right__subTitle}
                >
                  How It Works:
                </Typography>

                <Typography
                  variant="body1"
                  className={style.home__about__right__body}
                >
                  <b> Booking</b>: Simply book your transportation with us. You
                  can choose from weekly or daily trips, depending on your
                  schedule and requirements.
                  <br /> <br />
                  <b>Safe and Comfortable Vehicles</b>: Our vehicles are
                  well-maintained, safe, and comfortable, ensuring a pleasant
                  travel experience.
                  <br /> <br />
                  <b>Professional Drivers</b>: Our experienced and professional
                  drivers are dedicated to your safety and satisfaction.
                  <br /> <br />
                  <b>Punctuality</b>: We prioritize punctuality, ensuring that
                  you arrive at your destination on time.
                  <br /> <br />
                  <b>Independence</b>: Our &quot;Assist-Travel/Transport&quot;
                  service is not just about reaching your destination; it&apos;s
                  about gaining greater independence and control over your life.
                </Typography>

                {/* <Button
                endIcon={<SendIcon />}
                className={style.home__about__right__btn}
              >
                Get a Quote
              </Button> */}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Travel;
