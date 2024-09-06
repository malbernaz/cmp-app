import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const ConsentFormWrapper = styled(Stack)(({ theme }) => ({
  width: "100%",
  maxWidth: "600px",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
}));

const ConsentOptionsCard = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingInline: theme.spacing(2),
  paddingBlock: theme.spacing(1),
}));

const ConsentButton = styled(Button)(({ theme }) => ({
  alignSelf: "center",
  paddingInline: theme.spacing(3),
  paddingBlock: theme.spacing(2),
}));

export default function ConsentForm() {
  return (
    <ConsentFormWrapper>
      <Stack direction="row" gap={2}>
        <FormControl fullWidth>
          <FormLabel htmlFor="name">Name</FormLabel>
          <TextField
            error={false}
            helperText={null}
            name="name"
            placeholder="John Doe"
            type="text"
            id="name"
            autoComplete="current-name"
            autoFocus
            variant="outlined"
            color={false ? "error" : "primary"}
            sx={{ ariaLabel: "name" }}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={false}
            helperText={null}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            variant="outlined"
            color={false ? "error" : "primary"}
            sx={{ ariaLabel: "email" }}
          />
        </FormControl>
      </Stack>
      <Stack gap={2}>
        <Typography variant="body1" align="center">
          I agree to:
        </Typography>
        <ConsentOptionsCard variant="outlined">
          <FormControlLabel
            label="Receive newsletter"
            control={<Checkbox value="remember" color="primary" />}
          />
          <FormControlLabel
            label="Be shown targeted ads"
            control={<Checkbox value="remember" color="primary" />}
          />
          <FormControlLabel
            label="Contribute to anonymous visit statistics"
            control={<Checkbox value="remember" color="primary" />}
          />
        </ConsentOptionsCard>
      </Stack>
      <ConsentButton type="submit" variant="contained" onClick={() => {}}>
        Give consent
      </ConsentButton>
    </ConsentFormWrapper>
  );
}
