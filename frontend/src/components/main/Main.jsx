import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetail from "./ProductDetail";
import { useGetproductByNameQuery } from "../../redux/product";

const Main = () => {
  //API Strapi
  const allProductsAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women";

  const [categoryAPI, setCategoryAPI] = useState(allProductsAPI);

  const handleActiveButton = (event, activeButton) => {
    if (activeButton !== null) {
      setCategoryAPI(activeButton);
    }
  };

  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Redux
  const { data, error, isLoading } = useGetproductByNameQuery(categoryAPI);

  if (isLoading) {
    return <Typography variant="h6">LOADING.................</Typography>;
  }

  if (error) {
    // @ts-ignore
    return <Typography variant="h6">{error.message}</Typography>;
  }

  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Product</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            color="error"
            value={categoryAPI}
            exclusive
            onChange={handleActiveButton}
            aria-label="Platform"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 69, 0.5) !important",
                color: "#e9456",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={allProductsAPI}
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
              className="myButton"
              value={menCategoryAPI}
            >
              Men category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={womenCategoryAPI}
            >
              Women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .hoverImg": {
                    rotate: "1deg",
                    scale: "1.1",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277, transition: "0.35s" }}
                  className="hoverImg"
                  // @ts-ignore
                  // image={`${import.meta.env.VITE_BASE_URL}${
                  //   item.attributes.productImg.data[0].attributes.url
                  // }`}
                  image={item.attributes.productImg.data[0].attributes.url}
                  title="green iguana"
                />

                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component={"div"}>
                      {item.attributes.productTitle}
                    </Typography>

                    <Typography variant="subtitle1" component={"p"}>
                      ${item.attributes.productPrice}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.productDescription}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    <AddShoppingCartOutlinedIcon
                      sx={{ mr: 1 }}
                      fontSize="small"
                    />
                    add to cart
                  </Button>
                  <Button size="small">
                    <Rating
                      name="half-rating-read"
                      defaultValue={item.attributes.productRating}
                      precision={0.1}
                      readOnly
                    />
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover .hover-rotate": { rotate: "180deg", color: "#ff4848" },
              position: "absolute",
              top: 0,
              right: 0,
            }}
            onClick={handleClose}
          >
            <Close className="hover-rotate" sx={{ transition: "0.5s" }} />
          </IconButton>
          <ProductDetail />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
