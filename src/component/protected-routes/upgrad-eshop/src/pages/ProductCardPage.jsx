// ProductCardPage.jsx
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth"; // Make sure this path is correct
import { CustomButton } from "../common/custom-button"; // Make sure this path is correct

// ===== Styles =====
const sxStylesCardWrapper = {
  padding: 2,
  width: "100%",
  maxWidth: 370,
  height: 430,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: 2,
  "&:hover": {
    boxShadow: 6,
  },
};

const sxStylesImage = {
  objectFit: "contain",
};

const sxStylesCardContent = {
  height: "130px",
};

const sxStylesTypography = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitLineClamp: 5,
};

const sxStylesCardAction = {
  display: "flex",
  justifyContent: "space-between",
  flex: 1,
};

const ProductCard = ({ card }) => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  return (
    <Card sx={sxStylesCardWrapper}>
      {card.image && (
        <CardMedia
          component="img"
          height="200px"
          image={card.image}
          alt="Product"
          sx={sxStylesImage}
        />
      )}
      <CardContent sx={sxStylesCardContent}>
        <Stack direction="row" justifyContent="space-between" pb={2}>
          <Typography variant="h6">{card.title}</Typography>
          <Typography variant="h6">
            <CurrencyRupeeOutlinedIcon fontSize="small" sx={{ mb: "-2px" }} />{" "}
            {card.price}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={sxStylesTypography}>
          {card.content}
        </Typography>
      </CardContent>
      <CardActions sx={sxStylesCardAction}>
        <CustomButton handleClick={() => navigate("/product-details")}>BUY</CustomButton>
        {isAdmin && (
          <Box>
            <IconButton onClick={() => navigate("/modify-product")}>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton>
              <DeleteOutlineRounded />
            </IconButton>
          </Box>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
