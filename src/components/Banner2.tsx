"use client";
import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

interface Props {
  title: string;
  description: string;
  image: string;
  button: {
    title: string;
    url: string;
  };
}
export default function Banner2({ title, description, image, button }: Props) {
  const theme = useTheme();
  const router = useRouter();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
        borderRadius: 4,
        borderTopLeftRadius: 50,
        m: isMedium ? 1 : 0,
      }}
    >
      <Grid
        container
        sx={{
          background: "linear-gradient(135deg, #300b4f 0%, #2b2738 100%)",
        }}
        rowGap={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Box
            sx={{
              height: isMedium ? 200 : 400,
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              borderTopLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Box
            gap={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography
              variant={isMedium ? "h4" : "h4"}
              color="text.primary"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                px: isMedium ? 2 : 8,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant={isMedium ? "subtitle1" : "subtitle1"}
              color="text.secondary"
              paragraph
              sx={{
                maxWidth: { xs: "100%", lg: "80%" },
                display: { xs: "block" },
                textAlign: "center",
                px: isMedium ? 2 : 8,
              }}
            >
              {description}
            </Typography>
            <Button
              variant="contained"
              size={isMedium ? "small" : "large"}
              startIcon={<AutoFixHighIcon />}
              onClick={() =>
                router.push(button.url ? button.url : "/new-character")
              }
              sx={{
                mb: isMedium ? 2 : 0,
              }}
            >
              {button?.title ? button.title : "Create your AI"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
