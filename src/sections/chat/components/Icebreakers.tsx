import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

interface Props {
  handleSendMessagge: (message: string) => void;
}

const initMessagges = [
  "chat.init-phrase-1",
  "chat.init-phrase-2",
  "chat.init-phrase-3",
  "chat.init-phrase-4",
  "chat.init-phrase-5",
  "chat.init-phrase-6",
];

const randomPackOfPhrases = () => {
  const packs = [
    [0, 1, 2],
    [3, 4, 5],
  ];

  return packs[Math.floor(Math.random() * packs.length)];
};

let values = randomPackOfPhrases();

export const IceBreakers = ({ handleSendMessagge }: Props) => {
  //const { i18n } = useTranslation();
  const t = useTranslations();
  const theme = useTheme();

  const sendMessage = (index: number) => {
    const text = t(initMessagges[values[index]]);
    handleSendMessagge(text);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.p
          animate={{ color: "white" }}
          initial={{ color: "transparent" }}
          transition={{ duration: 20, delay: 1.2 }}
          className="d-flex align-items-start"
        >
          {t("chat.ice-breaker")}
        </motion.p>

        {values.map((value, index) => (
          <motion.div
            key={index}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.4,
              delay: index === 2 ? 0 : index === 1 ? 0.3 : 0.7,
            }}
            onClick={() => sendMessage(index)}
          >
            <p
              style={{
                textAlign: "center",
                padding: "8px 16px",
                width: "fit-content",
                gap: "8px",
                borderRadius: "35px",
                background: theme.palette.primary.light,
                boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                marginBottom: 5,
              }}
            >
              {t(initMessagges[values[index]])}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
