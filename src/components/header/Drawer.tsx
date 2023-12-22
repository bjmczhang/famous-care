import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import style from "@/style/header.module.scss";

import HomeIcon from "@mui/icons-material/Home";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InfoIcon from "@mui/icons-material/Info";
import BookIcon from "@mui/icons-material/Book";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ArticleIcon from "@mui/icons-material/Article";
import ContactsIcon from "@mui/icons-material/Contacts";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import logo from "/public/images/logo.svg";

type props = {
  navLink: string[];
  drawerOpen: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};

const DrawerNav = (props: props) => {
  const iconItemDrawer = [
    <HomeIcon key="home" />,
    <InfoIcon key="info" />,
    <SupportAgentIcon key="support" />,
    <BookIcon key="book" />,
    <AccountTreeIcon key="account" />,
    <ArticleIcon key="article" />,
    <ContactsIcon key="contacts" />,
  ];

  return (
    <Drawer
      open={props.drawerOpen}
      onClose={() => {
        props.setOpenDrawer(false);
      }}
      className={style.drawer}
    >
      <List className={style.drawerList}>
        <Box className={style.drawerTop}>
          <Image src={logo} alt="Logo Brand" />
          <ListItemIcon onClick={() => props.setOpenDrawer(false)}>
            <CloseIcon className={style.drawerCloseIcon} />
          </ListItemIcon>
        </Box>

        <Divider className={style.drawerDivider} />

        {props.navLink.map((item: string, index: number) => (
          <ListItemButton
            key={`navLinkDrawer${index}`}
            component={Link}
            href={`/${item === "home" ? "" : item.replace(" ", "-")}`}
            className={style.drawerItemBtn}
            onClick={() => {
              props.setOpenDrawer(false);
            }}
          >
            <ListItemIcon className={style.drawerItemIcon}>
              {iconItemDrawer[index]}
            </ListItemIcon>
            <ListItemText primary={item} className={style.drawerItemText} />
            <ArrowRightIcon className={style.drawerItemIcon} />
          </ListItemButton>
        ))}

        <Divider className={style.drawerDivider} />

        <ListItemButton className={style.drawerItemBtn}>
          <ListItemIcon className={style.drawerItemIcon}>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText
            primary="Call - +61 434 620 028"
            className={style.drawerItemText}
          />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default DrawerNav;
