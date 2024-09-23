"use client";
import { Box, Divider, Grid, List, useTheme } from "@mui/material";
import MenuExploreIcon from "../../public/img/icon/menu-explore.svg";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { DrawerOption } from "./DrawerOption";
import { useTranslations } from "next-intl";
import LanguageIcon from "@mui/icons-material/Language";
import { LanguageModalSelector } from "./LanguageModalSelector";

const defaultItems = [
  {
    text: "My AIs",
    Icon: MenuExploreIcon,
    redirect: "/admin/my-ai",
    isPublic: true,
    hasColor: false,
    textWithColor: false,
    hasRedirect: true,
  },
];

export default function CustomDrawer() {
  const t = useTranslations();
  const [isLanguageModalOpen, setIsLanguageModalOpen] =
    useState<boolean>(false);
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const drawerItems = defaultItems;

  const handleDrawerOption = (redirect: string, hasRedirect?: boolean) => {
    if (hasRedirect) {
      hasRedirect && router.push(redirect);
    }
  };

  const drawerContent = (): ReactNode => {
    return (
      <Box
        sx={{
          width: 250,
          paddingX: 2,
          paddingTop: 1,
          paddingBottom: 10,
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default,
          height: "100%",
        }}
      >
        <Grid
          container
          direction={"column"}
          justifyContent={"space-between"}
          height={"100%"}
        >
          <Grid item>
            <List>
              {drawerItems.map(
                (
                  {
                    text,
                    Icon,
                    redirect,
                    isPublic,
                    textWithColor,
                    hasRedirect,
                  },
                  index
                ) => (
                  <DrawerOption
                    key={index}
                    icon={Icon}
                    onClick={() => handleDrawerOption(redirect, hasRedirect)}
                    label={text}
                    isSelected={
                      pathname === redirect ||
                      (redirect !== "/" && pathname.includes(redirect))
                    }
                    textWithColor={textWithColor}
                  />
                )
              )}
            </List>
          </Grid>
          <Box>
            <Divider />
            <DrawerOption
              icon={LanguageIcon}
              onClick={() => setIsLanguageModalOpen(true)}
              label={t("drawer-items.language.title")}
              isSelected={false}
              renderMuiIcon={() => <LanguageIcon />}
            />
            <Divider />
          </Box>
        </Grid>
      </Box>
    );
  };

  return (
    <Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
          height: "100%",
          borderRight: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        {drawerContent()}
      </Box>
      <LanguageModalSelector
        isOpen={isLanguageModalOpen}
        handleClose={() => setIsLanguageModalOpen(false)}
      />
    </Box>
  );
}
