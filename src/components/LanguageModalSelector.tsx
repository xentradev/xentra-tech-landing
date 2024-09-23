import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import CustomModal from "./CustomModal";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CookieManager } from "@/utils/cookies";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export const LanguageModalSelector = ({ isOpen, handleClose }: Props) => {
  const t = useTranslations();
  const locale = useLocale();
  const [selectedValue, setSelectedValue] = useState(locale);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <CustomModal open={isOpen} handleClose={handleClose} md={6} xs={9}>
      <FormControl sx={{ padding: 3, width: "100%" }}>
        <FormLabel id="demo-radio-buttons-group-label" sx={{ pb: 2 }}>
          {t("drawer-items.language.select")}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="english"
          name="radio-buttons-group"
          onChange={handleChange}
          value={selectedValue}
        >
          <FormControlLabel
            value="en"
            control={<Radio />}
            label={t("drawer-items.language.option-english")}
          />
          <FormControlLabel
            value="ja"
            control={<Radio />}
            label={t("drawer-items.language.option-japonese")}
          />
          <FormControlLabel
            value="es"
            control={<Radio />}
            label={t("drawer-items.language.option-spanish")}
          />
          <FormControlLabel
            value="pl"
            control={<Radio />}
            label={t("drawer-items.language.option-polish")}
          />
        </RadioGroup>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button color="inherit" onClick={handleClose}>
            {t("common.cancel")}
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              CookieManager.SetCookie("language", selectedValue);
              location.reload();
            }}
          >
            {t("common.ok")}
          </Button>
        </Box>
      </FormControl>
    </CustomModal>
  );
};
