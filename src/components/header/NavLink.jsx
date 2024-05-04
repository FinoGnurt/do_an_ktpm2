import {
  ExpandMore,
  KeyboardArrowRightOutlined,
  Translate,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const NavLink = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        ":hover .show-when-hover": { display: "block" },
      }}
    >
      <Typography variant="body1">Home</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          minWidth: "170px",
          transform: "TranslateX(-50%)",
          display: "none",
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Dashboard"
                  />
                  <Box flexGrow={1} />
                </ListItemButton>
              </ListItem>

              <ListItem
                sx={{
                  ":hover .sub-link": { display: "block" },
                  position: "relative",
                }}
                disablePadding
              >
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="products"
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>

                <Box
                  className="sub-link"
                  sx={{
                    display: "none",
                    position: "absolute",
                    top: 0,
                    left: "100%",
                  }}
                >
                  <Paper sx={{ ml: 1, minWidth: 150 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ display: "flex", p: 0, px: 1.5 }}
                          >
                            <ListItemText
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: "300",
                                },
                              }}
                              primary="Add Product"
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ display: "flex", p: 0, px: 1.5 }}
                          >
                            <ListItemText
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: "300",
                                },
                              }}
                              primary="Edit Product"
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Dashboard"
                  />
                  <Box flexGrow={1} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Dashboard"
                  />
                  <Box flexGrow={1} />

                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default NavLink;
