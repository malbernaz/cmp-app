import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Tab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";

import ConsentForm from "./form";
import ConsentsTable from "./table";

const Tabs = styled(MuiTabs)(({ theme }) => ({
  borderRight: 1,
  borderColor: "divider",
  height: "100%",
  paddingBlock: theme.spacing(4),
}));

const TabPanelWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingBlock: theme.spacing(4),
  paddingInline: theme.spacing(16),
}));

type TabPanelProps = {
  index: number;
  value: number;
  children: React.ReactNode;
};

const TabPanel = ({ index, value, children }: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`vertical-tabpanel-${index}`}
    aria-labelledby={`vertical-tab-${index}`}
  >
    {value === index && <TabPanelWrapper>{children}</TabPanelWrapper>}
  </div>
);

const a11yProps = (index: number) => ({
  id: `vertical-tab-${index}`,
  "aria-controls": `vertical-tabpanel-${index}`,
});

export default function CmpApp() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container height="100vh">
      <Grid size={2}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Consents navigation"
        >
          <Tab label="Give consent" {...a11yProps(0)} />
          <Tab label="Collected consents" {...a11yProps(1)} />
        </Tabs>
      </Grid>
      <Grid size="grow">
        <TabPanel value={value} index={0}>
          <ConsentForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ConsentsTable />
        </TabPanel>
      </Grid>
    </Grid>
  );
}
