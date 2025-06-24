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
import { ProductCard } from "../product-card";
import {
  sxStylesButtonGroup,
  sxStylesFormControl,
  sxStylesLabel,
  sxStylesProductListingWrapper,
  sxStylesProductsWrapper,
  sxStylesSelect,
  sxStylesSelectWrapper,
} from "./index.style";

const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"];
const cardArray = [
  {
    title: "Card 1",
    price: 900,
    content:
      "This is the content of card 1.This is the content of card 1This is the content of card 1This is the content of card 1This is the content of card 1This is the content of card 1This is the content of card 1This is the content of card 1This is the content of card 1This is the content of card 1",
    image:
      "https://image.made-in-china.com/43f34j00sUwoePlFiAkZ/Hot-Sale-Black-PU-Leather-Sneakers-Comfort-Casual-Shoes-for-Men.webp",
  },
  {
    title: "Card 11",
    price: 800,
    content:
      "This is the content of card 1.This is the content of card 1This is the content of card 1This is the content of card 1This is the content of card 1This is the content of card 1This is the content of card 1This is the content of card 1This is the content of card 1This is the content of card 1",
    image:
      "https://image.made-in-china.com/2f1j00ZzucIgvBCSpl/New-Women-Sports-Fashion-Lace-up-Breathable-Casual-Footwear.webp",
  },
  { title: "Card 2", content: "This is the content of card 2." },
  { title: "Card 3", content: "This is the content of card 3." },
  { title: "Card 3", content: "This is the content of card 3." },
  { title: "Card 3", content: "This is the content of card 3." },
  { title: "Card 3", content: "This is the content of card 3." },
  { title: "Card 3", content: "This is the content of card 3." },
  { title: "Card 3", content: "This is the content of card 3." },
  { title: "Card 3", content: "This is the content of card 3." },
  { title: "Card 3", content: "This is the content of card 3." },
  // Add more cards as needed
];

export const ProductsPage = () => {
  const buttons = [
    <Button key="All">All</Button>,
    <Button key="Apparel">Apparel</Button>,
    <Button key="Electronics">Electronics</Button>,
    <Button key="Footwear">Footwear</Button>,
    <Button key="Personal_Care">Personal Care</Button>,
  ];

  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box sx={sxStylesProductsWrapper}>
      <Box sx={sxStylesButtonGroup}>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
        >
          {buttons}
        </ButtonGroup>
      </Box>
      <Stack sx={sxStylesSelectWrapper}>
        <InputLabel htmlFor="sort" sx={sxStylesLabel}>
          Sort By:
        </InputLabel>
        <FormControl sx={sxStylesFormControl}>
          <Select
            name="sort"
            // defaultValue={names[0]}
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
      <Grid container sx={sxStylesProductListingWrapper}>
        {cardArray.map((card, index) => (
          <ProductCard key={index} card={card} />
        ))}
      </Grid>
    </Box>
  );
};
