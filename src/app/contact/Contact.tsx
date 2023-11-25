import React from "react";
import style from "@/style/contact.module.scss";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Stack,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "next/link";
import Image from "next/image";

import contactImg from "/public/images/Image_20231030201956.jpg";

type contact = {
  icon: React.ReactNode;
  text: string;
};

const Contact = () => {
  const contacts: contact[] = [
    {
      icon: <LocationOnIcon className={style.footer__column4__icon} />,
      text: "famous care address",
    },
    {
      icon: <PhoneIcon className={style.footer__column4__icon} />,
      text: "(61) 401 234 567",
    },
    {
      icon: <EmailIcon className={style.footer__column4__icon} />,
      text: "info@famousecare.com.au",
    },
    {
      icon: <AccessTimeIcon className={style.footer__column4__icon} />,
      text: "Mon - Fri 09:00 - 17:00",
    },
  ];

  return (
    <Box className={style.contact}>
      <Box className={style.banner}>
        <Typography variant="h1" className={style.bannerTitle}>
          Contact us
        </Typography>
      </Box>
      <Container>
        <Grid container alignItems="center" className={style.contactGrid}>
          <Grid item md={6} xs={12}>
            <Image src={contactImg} alt="" />
          </Grid>
          <Grid item md={4} sm={6} xs={12} className={style.contactInfo}>
            <Typography variant="h5" className={style.contactInfoTitle}>
              Contact Info
            </Typography>
            <Divider className={style.contactInfoDiv} />
            <Stack spacing={3}>
              {contacts.map((contact: contact, index: number) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  key={`footer-contact-${index}`}
                >
                  {contact.icon}
                  <Typography variant="body1">{contact.text}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
