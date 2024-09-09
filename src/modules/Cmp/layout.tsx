import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";

import { Nav } from "./components/Nav";

type CmpAppProps = {
  children: React.ReactNode;
};

export function CmpLayout(props: CmpAppProps) {
  return (
    <Grid container height="100vh">
      <Grid size={2}>
        <Nav />
      </Grid>
      <Grid size="grow">
        <TabPanelWrapper>{props.children}</TabPanelWrapper>
      </Grid>
    </Grid>
  );
}

const TabPanelWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingBlock: theme.spacing(4),
  paddingInline: theme.spacing(16),
}));
