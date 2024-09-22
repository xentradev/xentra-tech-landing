import { Grid } from "@mui/material";

export default async function Home(context: any) {
  try {
    return (
      <Grid container justifyContent={"center"}>
        <h1>HOME</h1>
      </Grid>
    );
  } catch (e) {
    <h1>ERROR</h1>;
  }
}
