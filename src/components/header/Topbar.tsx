import { Box, Stack, Typography, IconButton, AppBar } from "@mui/material";
import React from "react";
import style from "@/style/header.module.scss";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Topbar = () => {
  const socialIcon = [
    <FacebookIcon className={style.topbarIcon} key="facebook" />,
    <TwitterIcon className={style.topbarIcon} key="twitter" />,
    <InstagramIcon className={style.topbarIcon} key="instagram" />,
    <PinterestIcon className={style.topbarIcon} key="pinterest" />,
  ];

  return (
    <AppBar position="static" className={style.appbarTop}>
      <Box className={style.topbar}>
        <Stack direction="row" spacing={6}>
          <Stack direction="row" spacing={2}>
            <LocalPhoneIcon />
            <Typography>+61 434 620 028</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <EmailIcon />
            <Typography>info@famouscare.com.au</Typography>
          </Stack>
        </Stack>

        <Stack direction="row">
          {socialIcon.map((icon: React.ReactNode, index: number) => (
            <IconButton
              key={`socialBtn${index}`}
              className={style.topbarSocialBtn}
            >
              {icon}
            </IconButton>
          ))}
        </Stack>
      </Box>
    </AppBar>
  );
};

export default Topbar;
