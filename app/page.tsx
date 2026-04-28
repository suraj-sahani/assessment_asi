import CategorySection from "@/components/category-section";
import { getCategorizedProducts } from "@/lib/product";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Home() {
  const categorizedProducts = getCategorizedProducts();

  const categoryOrder = ["Cars", "Bikes", "Phones", "Computers"];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="h1"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            Product Catalog
          </Typography>
        </Toolbar>
      </AppBar>

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

      {categorizedProducts.map((category, idx) => {
        const categoryIndex = categoryOrder.indexOf(category.name);
        return (
          <CategorySection
            key={category.name}
            category={category}
            categoryIndex={categoryIndex}
          />
        );
      })}

      <Box sx={{ py: 6, bgcolor: "#fff", borderTop: "1px solid #e0e0e0" }}>
        <Container maxWidth="xl">
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#999",
            }}
          >
            © 2024 Product Catalog. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
