import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const listImg = [
  {
    img: "src/assets/images/1.jpg",
  },
  {
    img: "src/assets/images/2.jpg",
  },
];

const ProductDetail = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box display={"flex"}>
        <img width={300} src="src\assets\images\1.jpg" alt="" />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">WOmen fahsi</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $12.99
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          dignissimos ea? Ducimus at sapiente ullam dolores harum nam soluta
          inventore.
        </Typography>

        <Stack
          justifyContent={{ xs: "center", sm: "left" }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {listImg.map((item, index) => {
            return (
              <img
                style={{ borderRadius: 3 }}
                width={90}
                key={index}
                src={item.img}
                alt=""
              />
            );
          })}
        </Stack>
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetail;
