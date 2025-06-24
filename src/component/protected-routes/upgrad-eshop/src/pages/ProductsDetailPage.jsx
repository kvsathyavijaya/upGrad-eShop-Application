// src/pages/ProductDetailsPage.jsx

import { Box, Chip, Typography, Grid } from "@mui/material";
import { useState } from "react";
import { CustomInputField } from "../common/custom-input-field";
import { CustomButton } from "../common/custom-button";

import { LAYOUT_CONTENT_HEIGHT } from "../common/layout/index.style";

const ProductDetailsPage = () => {
  const product = {
    name: "iPhone 12",
    category: "Electronics",
    description:
      "A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
    price: "100000",
    quantity: 148,
    imageUrl:
      "https://image.made-in-china.com/43f34j00sUwoePlFiAkZ/Hot-Sale-Black-PU-Leather-Sneakers-Comfort-Casual-Shoes-for-Men.webp",
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const val = Number(event.target.value);
    if (val >= 1 && val <= product.quantity) {
      setQuantity(val);
    }
  };

  const handlePlaceOrder = () => {
    alert(`Order placed for ${quantity} of ${product.name}`);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: 4,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} md={5} display="flex" justifyContent="center">
        <Box
          component="img"
          sx={{
            width: "80%",
            height: LAYOUT_CONTENT_HEIGHT,
            objectFit: "contain",
          }}
          src={product.imageUrl}
          alt={product.name}
        />
      </Grid>

      <Grid item xs={12} md={7}>
        <Box sx={{ padding: 2 }}>
          <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Chip
              label={`Available Quantity: ${product.quantity}`}
              color="primary"
              sx={{ marginBottom: 2, bgcolor: "#3f51b5" }}
            />
          </Box>

          <Typography variant="h6">
            Category:{" "}
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {product.category}
            </Typography>
          </Typography>

          <Typography variant="body1" color="textSecondary" gutterBottom>
            {product.description}
          </Typography>

          <Typography variant="h5" color="error" gutterBottom>
            ₹ {product.price}
          </Typography>

          <CustomInputField
            value={quantity}
            onChange={handleQuantityChange}
            label="Enter Quantity"
            type="number"
            InputProps={{ inputProps: { min: 1, max: product.quantity } }}
            sx={{ marginBottom: 2 }}
          />

          <CustomButton
            variant="contained"
            onClick={handlePlaceOrder}
            sx={{ px: 2 }}
          >
            Place Order
          </CustomButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetailsPage;
