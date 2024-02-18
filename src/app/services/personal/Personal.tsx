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

const Personal = () => {
  return (
    <Box className={style.about}>
      <Box className={style.banner}>
        <Typography variant="h4" className={style.bannerTitle}>
          Assist Personal Activity High
        </Typography>
      </Box>
      <Container>
        <Box className={style.homeAbout}>
          <Container maxWidth="lg">
            <Grid container alignItems="center">
              <Grid item md={6} xs={12} className={style.home__about__left}>
                <Image
                  className={style.home__about__image}
                  src={image7}
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
                  1. Personal Hygiene Assistance: Our trained caregivers are
                  here to assist with tasks such as bathing, grooming, and
                  maintaining personal hygiene, ensuring your comfort and
                  well-being. <br /> <br />
                  2. Dressing and Clothing Assistance: We understand the
                  importance of feeling confident in your appearance. Our team
                  can help with dressing and choosing outfits that suit your
                  style and preferences.
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
                  3. Feeding Assistance: Enjoying a balanced meal is essential
                  for your health. We provide feeding assistance to ensure you
                  receive proper nutrition while accommodating your dietary
                  needs.
                  <br /> <br />
                  4. Mobility Support: If you face mobility challenges,
                  we&apos;re here to assist you in moving around safely, whether
                  it&apos;s transferring from a bed to a wheelchair or moving
                  within your home.
                  <br /> <br />
                  5. Compassionate Care: Our caregivers not only assist with
                  physical tasks but also offer emotional support,
                  companionship, and a friendly face to brighten your day.
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
                  src={image8}
                  alt=""
                />
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item md={6} xs={12} className={style.home__about__left}>
                <Image
                  className={style.home__about__image}
                  src={image1}
                  alt=""
                />
              </Grid>
              <Grid item md={6} xs={12} className={style.home__about__right}>
                <Typography
                  variant="body1"
                  className={style.home__about__right__body}
                >
                  7. Community Nursing Care Registered and trained nurses
                  deliver top-notch care in the comfort of your home. We
                  collaborate closely with your healthcare team and offer
                  support for complex issues like continence assessment,
                  catheter care, medication management, and wound care. <br />{" "}
                  <br />
                  <br /> <br />
                  8. Daily Task/Shared Living Let us assist with daily tasks
                  such as cooking, cleaning, shopping, and household
                  maintenance. Customize this service to your NDIS plan by
                  discussing your needs with our support coordinator or NDIS
                  planner. <br /> <br />
                  <br /> <br />
                  9. Innovative Community Participation Join our Innovative
                  Community Participation Program, designed to enhance your
                  community engagement and employment opportunities. Our skilled
                  practitioners will help you expand your horizons.
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
                  10. Development Life Skills Gain valuable life skills through
                  our specialized training programs. We focus on personal
                  development, independence, and community involvement. Learn to
                  use public transport, develop community skills, and master
                  day-to-day living activities. <br /> <br />
                  11. Household Tasks If daily responsibilities like cooking,
                  gardening, and cleaning pose challenges, our team is here to
                  assist. These services are often included in NDIS support
                  plans to ensure your home runs smoothly. <br /> <br />
                  12. Group/Centre Activities Join us for center-based and group
                  activities that promote socialization and skill development.
                  Our dedicated support workers facilitate workshops and group
                  activities, encouraging you to engage and participate.
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
                  src={image2}
                  alt=""
                />
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item md={6} xs={12} className={style.home__about__left}>
                <Image
                  className={style.home__about__image}
                  src={image9}
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
                  <span className={style.boldText}>Assessment: </span>We begin
                  with a thorough assessment of your needs. Our team works
                  closely with you and your healthcare professionals to create a
                  personalized care plan.
                  <br /> <br />
                  <span className={style.boldText}>Flexible Scheduling: </span>
                  You can schedule assistance according to your convenience.
                  Whether it&apos;s daily, weekly, or as needed, we&apos;re here
                  to accommodate your schedule.
                  <br /> <br />
                  <span className={style.boldText}>
                    The commencement of the services as per the care plan.
                  </span>{" "}
                  Our expert staff will meet you at your place for your
                  assistance.
                  <br /> <br />
                  <span className={style.boldText}>
                    Continuous Communication:{" "}
                  </span>
                  We maintain open communication with you and your support
                  network to ensure your needs are met and any adjustments to
                  the care plan are made promptly.
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

export default Personal;
