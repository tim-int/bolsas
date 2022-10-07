import {
  Product,
  ProductActionsWrapper,
  ProductFavButton,
  ProductImage,
  ProductActionButton,
  ProductAddToCart,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { Stack } from "@mui/material";
import { useState } from "react";
import ProductDetail from "../productDetail";
import useDialogModal from "../../hooks/useDialogModal";

export default function SingleProductDesktop({ product, matches }) {
  const [showOptions, setShowOptions] = useState(false);

  const [ProductDetailDialog, showProductDetailDialog] =
    useDialogModal(ProductDetail);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>

        {showOptions && (
          <ProductAddToCart show={showOptions} variant="contained">
            Add to Cart
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOptions}>
          <Stack direction="column">
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
      <ProductDetailDialog product={product} />
    </>
  );
}
