// ProductsPage.jsx
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import { useState } from "react";
import ProductCard from "./ProductCardPage";

// ===== Styles =====
const LAYOUT_CONTENT_HEIGHT = "calc(100vh - 128px)";
const sxStylesProductsWrapper = {
  display: "flex",
  flexDirection: "column",
  p: "24px 64px",
  height: LAYOUT_CONTENT_HEIGHT,
};
const sxStylesButtonGroup = {
  display: "flex",
  justifyContent: "center",
  mb: 2,
  height: "48px",
};
const sxStylesSelectWrapper = { display: "flex", mb: 3 };
const sxStylesFormControl = { width: 300 };
const sxStylesLabel = { fontSize: "1rem", mr: 2 };
const sxStylesSelect = { height: "38px" };
const sxStylesProductListingWrapper = {
  paddingY: "16px",
  flexGrow: 1,
  overflowY: "auto",
  gap: 2,
  justifyContent: "center",
};

// ===== Sample Data =====
const names = ["Price: Low to High", "Price: High to Low", "Name: A-Z", "Name: Z-A"];

const cardArray = [
  {
    title: "boAt Airdopes 131",
    price: 1299,
    content:
      "Bring home the boAt Airdopes 131 that comes with a carrying case for easy portability.",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/headphone/k/y/o/-original-imagzbfajgbzggs3.jpeg",
  },
  {
    title: "Sneakers - Black",
    price: 999,
    content: "Hot Sale Black PU Leather Sneakers. Comfort Casual Shoes for Men.",
    image:
      "https://image.made-in-china.com/43f34j00sUwoePlFiAkZ/Hot-Sale-Black-PU-Leather-Sneakers-Comfort-Casual-Shoes-for-Men.webp",
  },
  {
    title: "Women's Footwear",
    price: 799,
    content:
      "New Women Sports Fashion Lace-up Breathable Casual Footwear, great for daily use.",
    image:
      "https://image.made-in-china.com/2f1j00ZzucIgvBCSpl/New-Women-Sports-Fashion-Lace-up-Breathable-Casual-Footwear.webp",
  },
  {
    title: "Card 4",
    price: 500,
    content: "Generic product description for testing.",
    image: "",
  },
];

export const ProductsPage = () => {
  const [personName, setPersonName] = useState([]);

  const buttons = [
    <Button key="All">All</Button>,
    <Button key="Apparel">Apparel</Button>,
    <Button key="Electronics">Electronics</Button>,
    <Button key="Footwear">Footwear</Button>,
    <Button key="Personal_Care">Personal Care</Button>,
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box sx={sxStylesProductsWrapper}>
      <Box sx={sxStylesButtonGroup}>
        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
          {buttons}
        </ButtonGroup>
      </Box>

      <Stack sx={sxStylesSelectWrapper} alignItems="center">
        <InputLabel htmlFor="sort" sx={sxStylesLabel}>
          Sort By:
        </InputLabel>
        <FormControl sx={sxStylesFormControl}>
          <Select
            name="sort"
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            sx={sxStylesSelect}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <Grid container spacing={3} sx={sxStylesProductListingWrapper}>
        {cardArray.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProductCard card={card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
