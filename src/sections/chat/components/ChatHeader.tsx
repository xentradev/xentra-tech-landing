import Text from "@/components/Generics/Text";
import { Avatar as MuiAvatar, IconButton, useTheme } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const avatarImgSize = 50;

interface Props {
  name: string;
  avatar: string;
  onBackClick: () => void;
}

export default function ChatHeader({ name, avatar, onBackClick }: Props) {
  const theme = useTheme()
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        padding: 10
      }}
    >
      <IconButton onClick={onBackClick} aria-label="back" sx={{color: "text.secondary"}}>
        <ArrowBackIosIcon />
      </IconButton>
      <MuiAvatar
        alt={name}
        src={avatar}
        sx={{ width: avatarImgSize, height: avatarImgSize }}
      />
      <div
        style={{
          flex: 1,
          paddingLeft: 15,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around", // Distribuye el espacio alrededor de los elementos
          alignItems: "flex-start",
        }}
      >
        <Text variant="text" sx={{ py: 1 }} color="secondary">
          {name}
        </Text>
      </div>
    </div>
  );
}
