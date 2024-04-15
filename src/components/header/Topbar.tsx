import { Box, Stack, Typography, IconButton, AppBar } from "@mui/material";
import React from "react";
import style from "@/style/header.module.scss";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const Topbar = () => {
  const socialIcon = [
    <Link
      href="https://www.facebook.com/profile.php?id=61558048636344&mibextid=ZbWKwL"
      key="fb"
    >
      <FacebookIcon className={style.topbarIcon} />
    </Link>,
    <Link
      href="https://www.instagram.com/famouscare_?igsh=dDl3dTUycXpnaXJh"
      key="ig"
    >
      <InstagramIcon className={style.topbarIcon} />
    </Link>,
  ];

  return (
    <AppBar position="static" className={style.appbarTop}>
      <Box className={style.topbar}>
        <Stack direction="row" spacing={6}>
          <Stack direction="row" spacing={2}>
            <LocalPhoneIcon />
            <Typography>0466274838 or 0434620028</Typography>
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
