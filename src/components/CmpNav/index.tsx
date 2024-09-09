import Tab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";

export function CmpNav() {
  const { pathname } = useLocation();

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={pathname}
      aria-label="Consents navigation"
    >
      <Tab component={Link} label="Give consent" value="/" to="/" />
      <Tab
        component={Link}
        label="Collected consents"
        value="/consents"
        to="/consents"
      />
    </Tabs>
  );
}

const Tabs = styled(MuiTabs)(({ theme }) => ({
  borderInlineEnd: `1px solid ${theme.palette.divider}`,
  height: "100%",
  paddingBlock: theme.spacing(4),
}));
