import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  Paper,
  Divider,
  Stack,
  Card,
} from "@mui/material";

import { getProductById } from "@/lib/product";
import Link from "next/link";
import { categoryIcons, products } from "@/lib/constants";
import ProductCard from "@/components/product-card";
import Image from "next/image";
export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productDetails = id ? getProductById(id) : undefined;

  if (!productDetails) {
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
        <Typography variant="h4">Item not found</Typography>

        <Typography color="text.secondary">
          We couldn&apos;t find what you&apos;re looking for.
        </Typography>

        <Button
          // component={RouterLink}
          // to="/"
          variant="contained"
          startIcon={<ArrowBackIcon />}
          sx={{ borderRadius: "999px", textTransform: "none", px: 3 }}
        >
          Back to catalog
        </Button>
      </Box>
    );
  }

  const { category, itemname, itemprops, image } = productDetails;

  const related = products
    .filter((i) => i.category === category && i.itemname !== itemname)
    .slice(0, 4);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Back Link */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{ textTransform: "none", mb: 1 }}
          >
            Back to catalog
          </Button>
        </Link>
        {/*<Link href={"/"}>Back to catalog</Link>*/}

        {/* Main Section */}
        <Grid container spacing={6} sx={{ mt: 2 }}>
          {/* Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderRadius: 1.5,
                border: "2px solid #ececec",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                height: 350,
                overflow: "hidden",
              }}
            >
              <Image
                src={image}
                alt={itemname}
                height={200}
                width={800}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  aspectRatio: "4/3",
                  height: "100%",
                  width: "100%",
                  borderRadius: 16,
                }}
              />
            </Box>
          </Grid>

          {/* Details */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack sx={{ gap: 2 }}>
              <Chip
                size="small"
                label={
                  <>
                    <span style={{ marginRight: 6 }}>
                      {categoryIcons[category]}
                    </span>
                    {category}
                  </>
                }
                sx={{
                  width: "fit-content",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              />

              <Typography
                variant="h1"
                sx={{ fontSize: "24px", fontWeight: 900 }}
              >
                {itemname}
              </Typography>

              <Typography color="text.secondary">
                Detailed specifications for the {itemname}.
              </Typography>

              {/* Specs */}
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 1,
                  border: "1px solid #ececec",
                  mt: 3,
                }}
              >
                {itemprops.map((prop, index) => (
                  <Box key={prop.label}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        px: 4,
                        py: 3,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {prop.label}
                      </Typography>
                      <Typography variant="body2">{prop.value}</Typography>
                    </Box>
                    {index !== itemprops.length - 1 && (
                      <Divider variant="middle" />
                    )}
                  </Box>
                ))}
              </Card>
            </Stack>
          </Grid>
        </Grid>

        {/* Related */}
        {related.length > 0 && (
          <Box sx={{ mt: 10 }}>
            <Typography
              variant="h5"
              sx={{ fontSize: 18, fontWeight: 700, mb: 2 }}
            >
              More in {category}
            </Typography>

            <Grid container spacing={3}>
              {related.map((r, index) => (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={r.itemname}>
                  <ProductCard product={r} index={index} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
}
