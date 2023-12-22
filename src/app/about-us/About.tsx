import React from "react";
import style from "@/style/about.module.scss";
import { Box, Container, Typography, Grid } from "@mui/material";
import image1 from "/public/images/Image_20231030201916.jpg";
import image2 from "/public/images/Image_20231030201948.jpg";
import image3 from "/public/images/Image_20231030201953.jpg";
import image4 from "/public/images/Image_20231030202001.jpg";
import Image from "next/image";

const About = () => {
  return (
    <Box className={style.about}>
      <Box className={style.banner}>
        <Typography variant="h4" className={style.bannerTitle}>
          About us
        </Typography>
      </Box>
      <Container>
        <Box className={style.homeAbout}>
          <Container maxWidth="lg">
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
                  variant="h5"
                  className={style.home__about__right__subTitle}
                >
                  Who We Are
                </Typography>
                <Typography
                  variant="h4"
                  className={style.home__about__right__title}
                >
                  Tailored disability support and empowerment.
                </Typography>

                <Typography
                  variant="body1"
                  className={style.home__about__right__body}
                >
                  At Famous Care, our unwavering dedication lies in making a
                  profound difference in the lives of individuals with
                  disabilities. We understand that each person is unique, and we
                  are committed to providing exceptional care and support that
                  is thoughtfully tailored to your individual needs.
                </Typography>
                <Typography
                  variant="body1"
                  className={style.home__about__right__body}
                >
                  Our team consists of highly experienced and passionate
                  individuals who share a common goal: to empower, enrich, and
                  enhance the lives of those we serve. We firmly believe that
                  disability should never be a barrier to leading a fulfilling
                  life, and it`&apos;`s this belief that drives our every
                  action.
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
                  variant="h5"
                  className={style.home__about__right__subTitle}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="h4"
                  className={style.home__about__right__title}
                >
                  Supporting independence with unwavering care.
                </Typography>

                <Typography
                  variant="body1"
                  className={style.home__about__right__body}
                >
                  Our mission is clear - to provide unwavering support,
                  encouragement, and care to individuals with disabilities,
                  fostering their independence, and enabling them to embrace
                  life`&apos;`s opportunities with confidence.
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
                  src={image3}
                  alt=""
                />
              </Grid>
              <Grid item md={6} xs={12} className={style.home__about__right}>
                <Typography
                  variant="h5"
                  className={style.home__about__right__subTitle}
                >
                  Our Values
                </Typography>
                <Typography
                  variant="h4"
                  className={style.home__about__right__title}
                >
                  Core values guiding our mission.
                </Typography>

                <Typography
                  variant="body1"
                  className={style.home__about__right__body}
                >
                  <span>• Empathy:</span> We approach our work with deep
                  empathy, understanding the unique challenges and triumphs of
                  each person we assist. <br />
                  <span>• Respect:</span> Respect is at the heart of everything
                  we do. We respect your choices, your aspirations, and your
                  individuality. <br />
                  <span>• Dedication:</span> Our team is dedicated to going the
                  extra mile, ensuring that you receive the best possible care
                  and support. <br />
                  <span>• Inclusivity:</span> We champion inclusivity, striving
                  to create a world where everyone has equal opportunities to
                  thrive. <br />
                  <span>• Quality:</span> We are committed to providing the
                  highest quality of service, ensuring your well-being and
                  satisfaction.
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
                  variant="h5"
                  className={style.home__about__right__subTitle}
                >
                  The People Behind Our Success
                </Typography>
                <Typography
                  variant="h4"
                  className={style.home__about__right__title}
                >
                  Passionate Professionals at Famous Care
                </Typography>

                <Typography
                  variant="body1"
                  className={style.home__about__right__body}
                >
                  Behind every successful endeavor at Famous Care is a team of
                  dedicated professionals who are not only experts in their
                  fields but also deeply passionate about their work. They bring
                  expertise, compassion, and a genuine desire to make a positive
                  impact in your life. We invite you to delve deeper into our
                  world, learn about our mission, values, and the incredible
                  individuals who make Famous Care what it is today.
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
                  src={image4}
                  alt=""
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
