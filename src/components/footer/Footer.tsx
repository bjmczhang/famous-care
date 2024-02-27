import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Divider,
  MenuItem,
} from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import style from "@/style/footer.module.scss";
import Link from "next/link";
import Image from "next/image";

import logoWhite from "/public/images/logo-white.svg";

type contact = {
  icon: React.ReactNode;
  text: string;
};

const Footer = () => {
  const usefulLink = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about-us" },
    { text: "Services", url: "/services" },
    { text: "Contact Us", url: "/contact" },
  ];
  const contacts: contact[] = [
    {
      icon: <LocationOnIcon className={style.footer__column4__icon} />,
      text: "8 Palma court frankston south,Vic 3199",
    },
    {
      icon: <PhoneIcon className={style.footer__column4__icon} />,
      text: "0466274838 or 0434620028",
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
    <Box className={style.footer}>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={4} sm={6} xs={12} className={style.footer__column1}>
            <Image src={logoWhite} alt="Logo Brand" />
            <Typography className={style.footer__column1__paragraph}>
              At <span>Famous Care</span>, we firmly believe that every
              individual, regardless of their abilities, deserves the
              opportunity to lead a fulfilling life.
            </Typography>
            <Stack direction="row" spacing={3}>
              {/* <TwitterIcon className={style.footer__column1__social} /> */}
              <Link href="https://www.facebook.com/profile.php?id=61555811183841">
                <FacebookIcon className={style.footer__column1__social} />
              </Link>
              <Link href="https://www.instagram.com/famouscare_?igsh=dDl3dTUycXpnaXJh">
                <InstagramIcon className={style.footer__column1__social} />
              </Link>
              {/* <PinterestIcon className={style.footer__column1__social} /> */}
            </Stack>
          </Grid>
          {/* <Grid item md={3} sm={6} xs={12} className={style.footer__column2}>
            <Typography variant="h5">Latest News</Typography>
            <Divider className={style.footer__divider} />
            <Box className={style.footer__column2__news}>
              <Link href="#" className={style.footer__column2__news__title}>
                The Best in dolor sit amet consectetur adipisicing elit sed
              </Link>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className={style.footer__column2__news__date}
              >
                <AccessTimeIcon />
                <Typography variant="body2">June 16, 2017</Typography>
              </Stack>
            </Box>
            <Box className={style.footer__column2__news}>
              <Link href="#" className={style.footer__column2__news__title}>
                The Best in dolor sit amet consectetur adipisicing elit sed
              </Link>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className={style.footer__column2__news__date}
              >
                <AccessTimeIcon />
                <Typography variant="body2">June 16, 2017</Typography>
              </Stack>
            </Box>
          </Grid> */}
          <Grid item md={4} sm={6} xs={12} className={style.footer__column3}>
            <Typography variant="h5">Useful Links</Typography>
            <Divider className={style.footer__divider} />
            <Stack spacing={3}>
              {usefulLink.map(
                (link: { text: string; url: string }, index: number) => (
                  <Link
                    href={link.url}
                    key={`footer-useful-link-${index}`}
                    className={style.footer__column3__usefulLink}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <ArrowRightAltIcon />
                      <Typography variant="body1">{link.text}</Typography>
                    </Stack>
                  </Link>
                )
              )}
            </Stack>
          </Grid>
          <Grid item md={4} sm={6} xs={12} className={style.footer__column4}>
            <Typography variant="h5">Contact Info</Typography>
            <Divider className={style.footer__divider} />
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
        <Grid container className={style.copyright}>
          <Typography>
            Copyright © famouscare | Designed by Leebak Design
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
