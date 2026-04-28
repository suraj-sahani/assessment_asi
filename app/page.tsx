import CategorySection from "@/components/category-section";
import { getCategorizedProducts } from "@/lib/product";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  const categorizedProducts = getCategorizedProducts();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <Box sx={{ py: 6 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              textAlign: "center",
              color: "#333",
            }}
          >
            Multi-Category Product Showcase
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              textAlign: "center",
              color: "#666",
            }}
          >
            Browse our extensive collection of products across multiple
            categories. Click on any item to view detailed specifications.
          </Typography>
        </Container>
      </Box>

      {categorizedProducts.map((category) => {
        return <CategorySection key={category.name} category={category} />;
      })}
    </Box>
  );
}
