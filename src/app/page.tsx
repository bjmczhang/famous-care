import { Box, Container } from "@mui/material";

import style from "@/style/home.module.scss";
import Hero from "./home/Hero";
import Service from "./home/Service";
import About from "./home/About";

export default function Home() {
  return (
    <Box className={style.home}>
      <Hero />
      <About />
      <Service />
    </Box>
  );
}
