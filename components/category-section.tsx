"use client";

import { categoryIcons } from "@/lib/constants";
import { CategoryGroup } from "@/lib/types";
import { getRandomNumber } from "@/lib/utils";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ProductCard from "./product-card";

interface CategorySectionProps {
  category: CategoryGroup;
}

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <Box component="section" sx={{ py: 6 }}>
      <Container fixed>
        <Stack
          sx={{ flexDirection: "row", justifyContent: "space-between", gap: 4 }}
        >
          <Stack
            sx={{ flexDirection: "row", gap: 3, mb: 3, alignItems: "center" }}
          >
            <Typography variant="h2" sx={{ fontSize: "2rem", fontWeight: 500 }}>
              {categoryIcons[category.name]}
            </Typography>

            <Box>
              <Typography
                variant="h2"
                sx={{ fontSize: "1.5rem", fontWeight: 500 }}
              >
                {category.name}
                <Typography variant="caption" component={"span"} sx={{ ml: 2 }}>
                  ({category.items.length}{" "}
                  {category.items.length === 1 ? "item" : "items"})
                </Typography>
              </Typography>
            </Box>
          </Stack>

          <Link
            href={`category/${category.name}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              endIcon={<KeyboardArrowRightIcon />}
              sx={{ textTransform: "none", mb: 1 }}
            >
              View All
            </Button>
          </Link>
        </Stack>

        <Grid container spacing={6}>
          {category.items
            .slice(0, getRandomNumber(1, category.items.length))
            .map((product, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                key={`${category.name}-${index}`}
              >
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}
