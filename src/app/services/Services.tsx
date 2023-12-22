import React from "react";
import Service from "../home/Service";
import style from "@/style/home.module.scss";
import { Box, Typography } from "@mui/material";

const Services = () => {
  return (
    <Box className={style.home}>
      <Box className={style.banner}>
        <Typography variant="h4" className={style.bannerTitle}>
          Services
        </Typography>
      </Box>
      <Service />
    </Box>
  );
};

export default Services;
