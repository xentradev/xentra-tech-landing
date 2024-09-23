import { Box, CardActionArea, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  isSelected: boolean;
  label: string;
  icon: any;
  onClick: () => void;
  textWithColor?: boolean;
  renderMuiIcon?: () => ReactNode;
}

export const DrawerOption = ({
  icon,
  label,
  isSelected,
  onClick,
  textWithColor = false,
  renderMuiIcon,
}: Props) => {
  const theme = useTheme();
  return (
    <CardActionArea onClick={onClick}>
      <Box
        sx={{
          paddingY: 1.5,
          ...(isSelected && {
            backgroundColor: theme.palette.background.paper,
            borderRadius: "10px",
          }),
        }}
      >
        <Grid container direction={"row"} alignItems={"center"}>
          <Grid item>
            {renderMuiIcon ? (
              renderMuiIcon()
            ) : (
              <Image
                alt={"menu"}
                src={icon}
                height={24}
                width={24}
                style={{ marginLeft: "2px" }}
              />
            )}
          </Grid>
          <Grid item sx={{ marginLeft: 1.5 }}>
            <Typography
              variant="body2"
              fontWeight={"600"}
              sx={{
                ...(textWithColor && {
                  background:
                    "linear-gradient(51.06deg, #652AC8 0.87%, #7B78F2 37.1%, #6197EE 62.22%, #45B5E9 79.12%, #10D7E2 97.48%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }),
              }}
            >
              {label}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </CardActionArea>
  );
};
