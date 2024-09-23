import { Box, Button, Card, Grid, Typography } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  button: {
    title: string;
    url: string;
  };
}
export default function Banner({ title, description, image, button }: Props) {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 4,
        m: { xs: 1, lg: 0 },
      }}
    >
      <Grid
        container
        sx={{
          paddingX: { xs: 3, md: 10 },
          paddingY: { xs: 2, md: 5 },
          background: "linear-gradient(135deg, #300b4f 0%, #2b2738 100%)",
        }}
        rowGap={3}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={8}
          xl={8}
          sx={{ height: "100%" }}
        >
          <Box
            gap={1}
            sx={{
              display: { xs: "flex", lg: "block" },
              flexDirection: "column",
              alignItems: { xs: "center", lg: "left" },
            }}
          >
            <Typography
              variant={"h4"}
              color="text.primary"
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant={"subtitle1"}
              color="text.secondary"
              paragraph
              sx={{
                maxWidth: { xs: "100%", lg: "80%" },
                display: { xs: "block" },
                textAlign: { xs: "center", lg: "left" },
                mt: { xs: 2, lg: 4 },
              }}
            >
              {description}
            </Typography>

            <a href={button.url ? button.url : "/new-character"}>
              <Button
                variant="contained"
                size={"large"}
                startIcon={<AutoFixHighIcon />}
                sx={{ alignSelf: "center" }}
              >
                {button?.title ? button.title : "Create your AI"}
              </Button>
            </a>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Image
            height={350}
            width={350}
            src={image}
            alt={`${title} default`}
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            style={{ borderRadius: 10 }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
