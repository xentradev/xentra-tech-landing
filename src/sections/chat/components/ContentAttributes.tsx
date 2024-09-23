import { Box, Grid, Typography, useTheme } from "@mui/material";

interface Props {
  title: string;
  attributes: any[];
  hasMarginBottom?: boolean;
  hasBorderTop?: boolean;
  hasIconColor?: boolean;
}

export const ContentAttributes = ({
  title,
  attributes,
  hasMarginBottom = false,
  hasBorderTop = true,
  hasIconColor = false,
}: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderTop: hasBorderTop ? "solid 3px white" : "",
        mt: 3,
        mb: hasMarginBottom ? 8 : 0,
      }}
    >
      <Typography sx={{ opacity: 0.6, fontSize: 15, py: 2 }}>
        {title}
      </Typography>

      <Grid container xs={12}>
        {attributes.map((a) => (
          <Grid
            xs={6}
            item
            key={a.title}
            sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
          >
            <a.icon
              sx={{ color: hasIconColor ? theme.palette.primary.main : "" }}
            />

            <Box>
              <Typography sx={{ fontSize: 12 }}>{a.title}</Typography>

              {a.isArray ? (
                <Box sx={{ dispaly: "flex", flexDirection: "column" }}>
                  {a.value.map((val: string) => (
                    <Typography key={val} sx={{ fontSize: 12 }}>
                      {val}
                    </Typography>
                  ))}
                </Box>
              ) : (
                <Typography sx={{ fontSize: 12 }}>{a.value}</Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
