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

const Life = () => {
  return (
    <Box className={style.about}>
      <Box className={style.banner}>
        <Typography variant="h2" className={style.bannerTitle}>
          Assist-Life Stage, Transition
        </Typography>
      </Box>
      <Container>
        <Box className={style.homeAbout}>
          <Container maxWidth="lg">
            <Grid container alignItems="center">
              <Grid item md={6} xs={12} className={style.home__about__left}>
                <Image
                  className={style.home__about__image}
                  src={image10}
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
                  1. Life Transition Planning: Our experienced team assists you
                  in planning and navigating major life transitions. Whether
                  you&apos;re transitioning from school to work, moving to a new
                  living arrangement, or facing other significant life changes,
                  we&apos;ll help you create a well-defined plan.
                  <br />
                  <br /> 2. Mentoring: We provide personalized mentoring to
                  guide you through life&apos;s transitions. Our mentors offer
                  valuable insights, share their experiences, and provide advice
                  to help you make informed decisions. <br />
                  <br /> 3. Peer Support: Join our peer support groups, where
                  you can connect with individuals who have gone through similar
                  transitions. This creates a supportive community where you can
                  share experiences, learn from others, and build a strong
                  network. <br />
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
                  4. Individual Skill Development: We focus on enhancing your
                  individual skills to ensure you&apos;re well-prepared for the
                  journey ahead. This includes developing decision-making
                  skills, time management, and problem-solving abilities. <br />
                  <br /> 5. Daily Planning: Effective daily planning is
                  essential for a smooth transition. Our team will work with you
                  to create daily routines and schedules that align with your
                  goals and aspirations. <br /> <br />
                  6. Budgeting Assistance: Managing finances is a crucial aspect
                  of any transition. We provide guidance on budgeting, financial
                  planning, and accessing available resources to ensure
                  financial stability during your life stage changes.
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
                  src={image11}
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
                  1. Assessment: We start by conducting a thorough assessment of
                  your specific life stage transition needs. This assessment
                  helps us tailor our support to your unique circumstances.{" "}
                  <br /> <br />
                  2. Personalized Planning: Based on the assessment, we create a
                  personalized transition plan that outlines the steps, goals,
                  and timeline for your transition. <br /> <br />
                  3. Ongoing Support: Our team provides continuous support
                  throughout your transition journey. We are always available to
                  address your questions, concerns, and provide guidance. <br />{" "}
                  <br />
                  4. Peer Interaction: Participation in peer support groups and
                  interactions with mentors will be encouraged, fostering a
                  sense of community and shared experiences.
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

export default Life;
