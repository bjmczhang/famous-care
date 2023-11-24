"use client";
import {
  AppBar,
  IconButton,
  Typography,
  Box,
  useScrollTrigger,
  Fade,
  Fab,
  Stack,
  useMediaQuery,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SearchIcon from "@mui/icons-material/Search";

import Link from "next/link";
import { useState, cloneElement, ReactElement } from "react";
import DrawerNav from "./Drawer";

import style from "@/style/header.module.scss";
import theme from "@/mui_theme/theme";
import Image from "next/image";
import logo from "/public/images/logo.svg";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
}

function ScrollToTopHandle(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        className={style.scrollToTop}
      >
        {children}
      </Box>
    </Fade>
  );
}

/* function ScrollNavbarHandle(props: Props) {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
    target: window ? window() : undefined,
  });

  return cloneElement(children as ReactElement, {
    elevation: trigger ? 10 : 0,
    style: {
      position: trigger ? "fixed" : "absolute",
      animation: trigger
        ? `${
            matches ? style.slideFromTopMd : style.slideFromTop
          } 200ms 1 forwards`
        : "",
    },
  });
} */

const Navbar = (props: Props) => {
  const navLink = ["home", "about us", "services", "contact"];

  const [openDrawer, setOpenDrawer] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  return (
    <Box>
      <Box id="back-to-top-anchor" />
      <DrawerNav
        navLink={navLink}
        drawerOpen={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
      {/* <ScrollNavbarHandle {...props}> */}

      <AppBar className={style.appbar} position="static">
        <Box className={style.navbar}>
          <Link href="/" className={style.navbarLogoBrand}>
            <Image src={logo} alt="Logo Brand" />
          </Link>
          <Box className={style.navbarLinks}>
            {navLink.map((link: string, index: number) => (
              <Link
                key={`navbarLink${index}`}
                href={`/${link === "home" ? "" : link.replace(" ", "-")}`}
                onClick={() => {
                  if (link.toLowerCase() === "services") {
                    setServicesMenuOpen(!servicesMenuOpen);
                  } else {
                    setServicesMenuOpen(false);
                  }
                }}
              >
                <Typography className={style.navbarLink} variant="body2">
                  {link.charAt(0).toUpperCase() + link.slice(1).toLowerCase()}
                </Typography>
              </Link>
            ))}
          </Box>
          <Button className={style.navbarBtn}>Consultant</Button>

          <IconButton
            onClick={() => {
              setOpenDrawer(!openDrawer);
            }}
            className={style.navbarMenuBtn}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>
      {/* </ScrollNavbarHandle> */}
      <ScrollToTopHandle {...props}>
        <Fab
          size="large"
          aria-label="scroll back to top"
          className={style.backToTop}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTopHandle>
    </Box>
  );
};

export default Navbar;
