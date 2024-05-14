import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        fontSize={18}
      >
        Designed and developed by{" "}
        <Button
          variant="text"
          color="primary"
          sx={{
            mx: 0.5,
            p: 0,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
            lineHeight: 0,
            ":hover": {
              backgroundColor: "rgba(144, 202, 249, 0)",
              textDecoration: "underline !important",
            },
          }}
        >
          FinoDev
        </Button>
        ©2024
      </Typography>
    </Box>
  );
};

export default Footer;
