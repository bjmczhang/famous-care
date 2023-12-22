import { Box, Button, Stack, Typography } from "@mui/material";

import style from "@/style/home.module.scss";
import HeroBg from "@/components/videoBg/VideoBg";

const Hero = () => {
  return (
    <Box className={style.homeHero}>
      <HeroBg />
      <Box>
        <Typography variant="h4" className={style.homeHeroTitle}>
          Welcome to Famous Care - Empowering Lives
        </Typography>
        <Typography variant="body1" className={style.homeHeroBody}>
          At Famous Care, we firmly believe that every individual, regardless of
          their abilities, deserves the opportunity to lead a fulfilling life.
          Our core mission is to deliver outstanding disability services that
          empower individuals to live meaningful and enriching lives. We invite
          you to explore our comprehensive range of services, all carefully
          designed to cater to your unique needs.
        </Typography>
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Button className={style.homeHeroBtn1} href="/contact">
            Contact us
          </Button>
          <Button className={style.homeHeroBtn2} href="/services">
            Discover
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
