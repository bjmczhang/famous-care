import { Box, Typography, Container, Grid, Divider } from "@mui/material";
import style from "@/style/home.module.scss";
import Link from "next/link";

type serviceItem = {
  image: string;
  title: string;
  body: string;
};

const Service = () => {
  const serviceItem: serviceItem[] = [
    {
      image: "images/service_01.jpg",
      title: "Assist Personal Activity High",
      body: "At Famous Care, we offer personalized assistance with activities of daily living, including personal hygiene, dressing, grooming, and feeding. We understand the challenges you face, and we're here to help.",
    },
    {
      image: "images/service_02.jpg",
      title: "Assist-Life Stage, Transition",
      body: "Our team provides life transition planning, mentoring, peer support, and individual skill development. We assist with decision-making, daily planning, and budgeting, ensuring you're prepared for the journey ahead.",
    },
    {
      image: "images/service_03.jpg",
      title: "Assist-Travel/Transport",
      body: "Our safe and convenient transport services make it easy for you to reach work, school, shopping centers, medical appointments, and social outings. Choose from weekly or daily trips for greater mobility and independence.",
    },
  ];

  return (
    <Box className={style.homeService}>
      <Container maxWidth="lg">
        <Divider sx={{ margin: "6rem 0" }} />
        <Typography variant="h4" className={style.home__service__heading}>
          Our Comprehensive Disability Services
        </Typography>
        <Typography variant="body1" className={style.home__service__subHeading}>
          At Famous Care, we are dedicated to providing a wide range of
          comprehensive disability services that empower individuals to live
          life to the fullest. We understand that each person has unique needs
          and aspirations, and our services are designed to cater to your
          specific requirements. Explore our diverse offerings below:
        </Typography>
        <Grid container className={style.home__service__list} spacing={5}>
          {serviceItem.map((item: serviceItem, index: number) => (
            <Grid
              item
              key={`home-service-item-${index}`}
              md={4}
              sm={6}
              xs={12}
              className={style.home__service__item}
            >
              <Box className={style.home__service__item__mediaBox}>
                <img src={item.image} />
              </Box>
              <Box className={style.home__service__item__infoBox}>
                <Typography
                  variant="h5"
                  className={style.home__service__item__infoBox__title}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  className={style.home__service__item__infoBox__body}
                >
                  {item.body}
                </Typography>
                <Link
                  href="#"
                  className={style.home__service__item__infoBox__link}
                >
                  <Typography variant="body1">Get Details</Typography>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;
