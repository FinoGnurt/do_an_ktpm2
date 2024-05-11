import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

const Main = () => {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Container>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography variant="h6">Selected Product</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton className="myButton" value="web">
            All Products
          </ToggleButton>
          <ToggleButton className="myButton" value="android">
            Men category
          </ToggleButton>
          <ToggleButton className="myButton" value="ios">
            Women category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack></Stack>
    </Container>
  );
};

export default Main;
