import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";

import { CmpNav } from "../components";

type CmpLayoutProps = {
  children: React.ReactNode;
};

export function CmpLayout(props: CmpLayoutProps) {
  return (
    <Grid container height="100vh">
      <Grid size={2}>
        <CmpNav />
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
