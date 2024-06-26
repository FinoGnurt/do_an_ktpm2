import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  Close,
  ExpandMore,
  KeyboardArrowRightOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
  Window,
} from "@mui/icons-material";

import MenuIcon from "@mui/icons-material/Menu";

import NavLink from "./NavLink";

const menuLink = () => [
  { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
  { mainLink: "Mega menu", subLink: ["Link1", "Linkâ2", "Linsk3"] },
  { mainLink: "Full", subLink: ["Link1", "Lsink2", "Link3s"] },
];

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  const navLink = () => {
    return [
      {
        title: [
          "Home",
          "Mega Menu",
          "Full Screen Menu",
          "Pages",
          "User Account",
          "Vendor Account",
        ],
      },
    ];
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
        mb: 2.5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            height: "40px",
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.primary,
          }}
        >
          <Window />
          <Typography sx={{ padding: "0", textTransform: "capitalize", mx: 1 }}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 222,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery(`(min-width: 1101px)`) && (
        <Stack gap={3} direction={"row"} alignItems={"center"}>
          {navLink()[0].title.map((i, e) => {
            return <NavLink key={e} title={i} />;
          })}
        </Stack>
      )}

      {useMediaQuery(`(max-width: 1100px)`) && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
        >
          <IconButton
            sx={{
              ":hover": { rotate: "180deg", color: "#ff4848" },
              transition: "0.5s",
              position: "absolute",
              top: 0,
              right: 0,
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {menuLink().map((menuItem, menuIndex) => {
            const panel = `panel${menuIndex + 1}`;
            return (
              <Accordion
                expanded={expanded === panel}
                onChange={handleChange(panel)}
                key={menuIndex}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`${panel}-content`}
                  id={`${panel}-header`}
                >
                  <Typography>{menuItem.mainLink}</Typography>
                </AccordionSummary>
                <List sx={{ py: 0, my: 0 }}>
                  {menuItem.subLink.map((subItem, subIndex) => (
                    <ListItem key={subIndex} sx={{ py: 0, my: 0 }}>
                      <ListItemButton>
                        <ListItemText primary={subItem} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Accordion>
            );
          })}
        </Box>

        <style>
          {`
            .css-1mn5fzf-MuiPaper-root-MuiAccordion-root.Mui-expanded::before {
              opacity: 1 !important;
            }

            .css-1mn5fzf-MuiPaper-root-MuiAccordion-root.Mui-expanded{
              margin: 0 0 16px !important;
            }
          `}
        </style>
      </Drawer>
    </Container>
  );
};

export default Header3;
