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
  const usefulLink = ["Home", "About Us", "Services", "Contact Us"];
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
              <TwitterIcon className={style.footer__column1__social} />
              <FacebookIcon className={style.footer__column1__social} />
              <InstagramIcon className={style.footer__column1__social} />
              <PinterestIcon className={style.footer__column1__social} />
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
              {usefulLink.map((link: string, index: number) => (
                <Link
                  href="#"
                  key={`footer-useful-link-${index}`}
                  className={style.footer__column3__usefulLink}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <ArrowRightAltIcon />
                    <Typography variant="body1">{link}</Typography>
                  </Stack>
                </Link>
              ))}
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
            Copyright © famouscare | Powered by famouscare
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
