import { Box, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { CustomInputField } from "../../common/custom-input-field";
import { CustomButton } from "../../common/custom-button";
import { LAYOUT_CONTENT_HEIGHT } from "../../common/layout/index.style";

export const ProductDetailsPage = () => {
  const product = {
    name: "iPhone 12",
    category: "Electronics",
    description:
      "A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
    price: "100000",
    quantity: 148,
    imageUrl:
      "https://image.made-in-china.com/43f34j00sUwoePlFiAkZ/Hot-Sale-Black-PU-Leather-Sneakers-Comfort-Casual-Shoes-for-Men.webp", // Sample image URL
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePlaceOrder = () => {
    // Add order handling logic here
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
      <Grid size={{ xs: 12, md: 5 }} display="flex" justifyContent="center">
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

      <Grid size={{ xs: 12, md: 7 }}>
        <Box sx={{ padding: 2, alignItems: "start" }}>
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
            onBlur={handleQuantityChange}
            label="Enter Quantity"
            type="number"
            defaultValue={1}
            InputProps={{ inputProps: { min: 1, max: product.quantity } }}
            sx={{ marginBottom: 2 }}
          />

          {/* Place Order Button */}
          <CustomButton
            variant="contained"
            handleClick={handlePlaceOrder}
            sx={{ px: 2 }}
          >
            Place Order
          </CustomButton>
        </Box>
      </Grid>
    </Grid>
  );
};
