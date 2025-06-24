import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { CustomButton } from "../../common/custom-button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import {
  sxStylesCardAction,
  sxStylesCardContent,
  sxStylesCardWrapper,
  sxStylesImage,
  sxStylesTypography,
} from "./index.style";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export const ProductCard = ({ card }) => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  console.log(card);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={sxStylesCardWrapper}>
        <CardMedia
          component="img"
          height="200px"
          image={card.image}
          alt="Shoe"
          sx={sxStylesImage}
        />
        <CardContent sx={sxStylesCardContent}>
          <Stack direction="row" justifyContent="space-between" pb={2}>
            <Typography variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="h5" component="div" alignContent="baseline">
              <CurrencyRupeeOutlinedIcon /> {card.price}
            </Typography>
          </Stack>
          <Typography variant="body2" sx={sxStylesTypography}>
            {card.content}
          </Typography>
        </CardContent>
        <CardActions sx={sxStylesCardAction}>
          <CustomButton
            handleClick={() => {
              navigate("/product-details");
            }}
          >
            BUY
          </CustomButton>
          <Box>
            {/* add logic for editing and deleting the card */}
            {isAdmin && (
              <>
                <IconButton
                  onClick={() => {
                    navigate("/modify-product");
                  }}
                >
                  <EditOutlinedIcon />
                </IconButton>
                <IconButton>
                  <DeleteOutlineRounded />
                </IconButton>
              </>
            )}
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};
