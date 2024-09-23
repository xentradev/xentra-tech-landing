import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Loader(
  props: CircularProgressProps & { value: number } & { isProgressing: boolean }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress size={90} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{ fontSize: 20, fontWeight: "bold" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

interface Props {
  isProgressing: boolean;
}

export default function LoaderWithValueLabel({ isProgressing }: Props) {
  const [progress, setProgress] = React.useState(7);
  const [delay, setDelay] = React.useState(80);

  React.useEffect(() => {
    if (isProgressing && progress < 100) {
      const handler = setTimeout(() => {
        setProgress((prevCount) => prevCount + 1);
      }, delay);

      if (progress <= 93) {
        setDelay(80);
      } else if (progress > 93 && progress < 100) {
        setDelay(2400);
      }

      return () => clearTimeout(handler);
    }
  }, [delay, progress, isProgressing]);

  return <Loader value={progress} isProgressing={isProgressing} />;
}
