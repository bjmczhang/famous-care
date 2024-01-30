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

const Nursing = () => {
  return (
    <Box className={style.about}>
      <Box className={style.banner}>
        <Typography variant="h4" className={style.bannerTitle}>
          Nursing Services
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
                  Welcome to our comprehensive nursing care services, where we
                  prioritize your health and well-being. Our dedicated team of
                  highly skilled nurses is committed to providing exceptional
                  care tailored to your unique need 24/7 Nursing Services
                  Experience peace of mind with our round-the-clock nursing
                  services. Our team is available 24/7, ensuring you receive
                  professional and compassionate care whenever you need it.
                  <br />
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
                  Medication Administration Trust our experienced nursing team
                  for precise medication administration. We cover various
                  routes, including oral, subcutaneous, intravenous, and
                  intramuscular, to guarantee safe and accurate delivery of
                  medications. <br />
                  <br />
                  Complex Wound Care Management Our expertise extends to complex
                  wound care, including advanced techniques At-Home Ventilator
                  and BIPAP Management
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
                  Our expertise extends to complex wound care, including
                  advanced techniques such as Negative Pressure Wound Therapy
                  (NPWT). We are dedicated to promoting efficient healing and
                  optimal recovery. <br />
                  <br />
                  Diabetes Management Count on us for specialized diabetes
                  management. Our nurses provide comprehensive care, including
                  blood sugar monitoring, insulin administration, and
                  educational support to empower patients in managing their
                  condition. Stoma Care and Continence Management Experience
                  compassionate care in stoma and continence management.
                  <br />
                  <br /> Our skilled nurses prioritize your comfort and dignity,
                  addressing specific needs in these areas with expertise and
                  sensitivity. Tube Feeding Assistance and Management Our
                  experienced nursing team offers dedicated assistance and
                  management for tube feeding. <br />
                  <br />
                  We ensure patients receive proper nutrition tailored to their
                  individual requirements, promoting overall health and
                  well-being. Contact us today to learn more about how our
                  nursing services can meet your specific needs. Your health is
                  our priority, and we are here to provide the highest quality
                  care.
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

export default Nursing;
