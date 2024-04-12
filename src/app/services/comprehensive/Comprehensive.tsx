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

const Comprehensive = () => {
  return (
    <Box className={style.about}>
      <Box className={style.banner}>
        <Typography variant="h4" className={style.bannerTitle}>
          Tracheotomy/Laryngectomy
          <br />
          Care Services
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
                  At Famouscare, we understand the unique needs of individuals
                  requiring tracheotomy or laryngectomy care. Our dedicated
                  nursing services go beyond standard care to ensure the
                  well-being and comfort of our clients. Here&apos;s a glimpse
                  into our specialized services:
                  <br />
                  <br />•{" "}
                  <span className={style.boldText}>
                    Expert Tracheostomy Care:{" "}
                  </span>
                  <br />
                  <br />• Our skilled nurses are trained to provide meticulous
                  tracheostomy care, managing the tracheostomy tube, maintaining
                  cleanliness, and ensuring optimal ventilation for improved
                  respiratory function. • Laryngectomy Support: For those who
                  have undergone laryngectomy, our compassionate team offers
                  comprehensive support, addressing speech and communication
                  needs, as well as managing the stoma with expertise.
                  <br />
                  <br />•{" "}
                  <span className={style.boldText}>
                    Respiratory Assistance:{" "}
                  </span>
                  We excel in at-home ventilator and BIPAP management, ensuring
                  seamless respiratory support tailored to individual
                  requirements.
                </Typography>

                {/* <Button
                endIcon={<SendIcon />}
                className={style.home__about__right__btn}
              >
                Get a Quote
              </Button> */}
              </Grid>
            </Grid>
            {/* <Grid container alignItems="center">
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
                  • <span className={style.boldText}>Administration:</span> Our
                  experienced nurses handle various medication administration
                  methods, including oral, subcutaneous, intravenous, and
                  intramuscular Wound Care Excellence: Beyond basic wound care,
                  our services extend to complex wound management, incorporating
                  advanced techniques such as negative pressure wound therapy
                  for optimal healing.
                </Typography>
              </Grid>
              <Grid item md={6} xs={12} className={style.home__about__left}>
                <Image
                  className={style.home__about__image}
                  src={image8}
                  alt=""
                />
              </Grid>
            </Grid> */}
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Comprehensive;
