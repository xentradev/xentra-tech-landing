import { Box, CardActionArea, Grid, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const DrawerLegalOptions = () => {
  const t = useTranslations();
  const theme = useTheme();
  const router = useRouter();
  return (
    <Grid
      container
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item xs={5}>
        <CardActionArea onClick={() => router.push("/legal/legal-information")}>
          <Typography
            variant="caption"
            sx={{ color: theme.palette.text.disabled }}
          >
            {t("drawer-items.down.privacy-policy")}
          </Typography>
        </CardActionArea>
      </Grid>
      <Grid item xs={1}>
        <Box
          sx={{
            borderRadius: "50%",
            width: 5,
            height: 5,
            backgroundColor: theme.palette.text.disabled,
          }}
        />
      </Grid>
      <Grid item xs={5}>
        <CardActionArea onClick={() => router.push("/legal/terms-of-service")}>
          <Typography
            variant="caption"
            sx={{ color: theme.palette.text.disabled }}
          >
            {t("drawer-items.down.terms-of-service")}
          </Typography>
        </CardActionArea>
      </Grid>
    </Grid>
  );
};
