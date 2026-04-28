"use client";
import { Product } from "@/lib/types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Chip, IconButton, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const productTag = product.itemname.split(" ")[0];
  const randomizeTag = useMemo(() => (Math.random() > 0.5 ? true : false), []);
  const [liked, setLiked] = useState(false);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",

        background: "white",
        borderRadius: 1.5,
        border: "2px solid #ececec",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        gap: 4,
        p: 2,
      }}
    >
      <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <Box sx={{ position: "relative", cursor: "pointer" }}>
          <Image
            src={product.image}
            alt={product.itemname}
            height={200}
            width={200}
            style={{
              objectFit: "cover",
              borderRadius: 16,
              filter: "brightness(0.75)",
              width: "100%",
              aspectRatio: "3/2",
            }}
            loading="eager"
          />

          <Box sx={{ position: "absolute", top: 8, right: 8 }}>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setLiked(!liked);
              }}
              size="small"
              sx={{
                position: "relative",
                color: liked ? "error.main" : "text.secondary",
                border: "2px solid #ececec",
                p: 1,

                "& .filled": {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  opacity: liked ? 1 : 0,
                  transition: "opacity 0.3s ease",
                },

                "&:hover .filled": {
                  opacity: 1,
                },

                "&:hover .outline": {
                  opacity: 0,
                },
              }}
            >
              <FavoriteBorderIcon
                className="outline"
                sx={{
                  height: 18,
                  width: 18,
                  color: "#ececec",
                }}
              />
              <FavoriteIcon
                className="filled"
                sx={{ color: "error.main", height: 18, width: 18 }}
              />
            </IconButton>
          </Box>
        </Box>
      </Link>

      <CardContent sx={{ flexGrow: 1, p: 0, ":last-child": { pb: 0 } }}>
        <Stack sx={{ gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: 1,
            }}
          >
            {randomizeTag ? (
              <Chip
                label="Best Seller"
                variant="filled"
                size="small"
                sx={{
                  width: "fit-content",
                  bgcolor: `#a4fca490`,
                  color: "green",
                  px: 1.25,
                }}
              />
            ) : (
              <Typography
                variant="caption"
                sx={{ color: (theme) => theme.palette.success.main }}
              >
                {productTag}
              </Typography>
            )}
            <Typography
              variant="h6"
              component="h3"
              sx={{
                flexGrow: 1,
                color: (theme) => theme.palette.grey[900],
                fontSize: "14px",
              }}
            >
              {product.itemname}
            </Typography>
          </Box>
          <Link
            href={`/product/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                height: 32,
                color: "white",
                bgcolor: "#1e1e1e",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                  border: "2px solid #d5d5d5",
                },
              }}
            >
              Buy Now
            </Button>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}
