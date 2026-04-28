import { findCategory } from "@/lib/product";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import ProductCard from "@/components/product-card";
import { categoryGradients, categoryIcons, products } from "@/lib/constants";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) {
  const { categoryName } = await params;
  const category = categoryName ? findCategory(categoryName) : undefined;

  if (!category) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          px: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Category not found</Typography>

        <Typography color="text.secondary">
          We couldn&apos;t find what you&apos;re looking for.
        </Typography>

        <Link href="/" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{ textTransform: "none", mb: 1 }}
          >
            Back to catalog
          </Button>
        </Link>
      </Box>
    );
  }

  const productsForCategory = products.filter((i) => i.category === category);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: categoryGradients[category],
          color: "white",
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 8, sm: 10 } }}>
          {/* Back link */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                textTransform: "none",
                mb: 1,
                color: "rgba(255,255,255,0.85)",

                "&:hover": {
                  color: "white",
                  backgroundColor: "transparent",
                },
              }}
            >
              All categories
            </Button>
          </Link>

          {/* Header content */}
          <Stack
            sx={{ flexDirection: "row", alignItems: "center", mt: 4, gap: 3 }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              {categoryIcons[category]}
            </Box>

            <Box>
              <Typography variant="h3">{category}</Typography>

              <Typography variant="body2" sx={{ opacity: 0.85 }}>
                {productsForCategory.length}{" "}
                {productsForCategory.length === 1 ? "item" : "items"} available
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* GRID */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {productsForCategory.map((item) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4, xl: 3 }} key={item.itemname}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
