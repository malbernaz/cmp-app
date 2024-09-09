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

import { Consents } from "../../../../mock-api";
import { useCmpForm, useCmpFormMutation } from "../../hooks";

const ConsentLabels = {
  [Consents.newsletter]: "Receive newsletter",
  [Consents.targeted_ads]: "Be shown targeted ads",
  [Consents.telemetry]: "Contribute to anonymous visit statistics",
};

export function CmpForm() {
  const {
    handleSubmit,
    name,
    email,
    consents,
    formState,
    handleConsentsChange,
  } = useCmpForm();
  const mutation = useCmpFormMutation();

  const isConsentsInErrorState =
    !!consents.fieldState.isDirty && !consents.field?.value.length;

  return (
    <ConsentFormWrapper
      as="form"
      onSubmit={handleSubmit((data) => mutation.mutate(data))}
    >
      <Stack direction="row" gap={2}>
        <FormControl fullWidth>
          <FormLabel htmlFor="name">Name</FormLabel>
          <TextField
            {...name.field}
            error={!!formState.errors.name}
            helperText={formState.errors.name?.message ?? null}
            id="name"
            placeholder="John Doe"
            autoFocus
            variant="outlined"
            color={formState.errors.name ? "error" : "primary"}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            {...email.field}
            error={!!formState.errors.email}
            helperText={formState.errors.email?.message ?? null}
            id="email"
            placeholder="your@email.com"
            type="email"
            variant="outlined"
            color={formState.errors.email ? "error" : "primary"}
          />
        </FormControl>
      </Stack>
      <Stack>
        <Typography variant="body1" align="center" mb={2}>
          I agree to:
        </Typography>
        <ConsentOptionsCard
          variant="outlined"
          hasError={isConsentsInErrorState}
        >
          {Object.values(Consents).map((consent) => (
            <FormControlLabel
              key={consent}
              label={ConsentLabels[consent]}
              control={
                <Checkbox
                  value={consent}
                  checked={consents.field.value.includes(consent)}
                  onChange={(_, checked) =>
                    handleConsentsChange(consent, checked)
                  }
                />
              }
            />
          ))}
        </ConsentOptionsCard>
        {isConsentsInErrorState && (
          <Typography
            variant="body2"
            color="error"
            sx={{ margin: "3px 14px 0", fontSize: 12 }}
          >
            At least one consent must be selected
          </Typography>
        )}
      </Stack>
      <ConsentButton
        type="submit"
        variant="contained"
        role="submit"
        disabled={!formState.isValid}
      >
        {mutation.isPending ? "Submitting..." : "Give consent"}
      </ConsentButton>
    </ConsentFormWrapper>
  );
}

const ConsentFormWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "600px",
  gap: theme.spacing(2),
}));

const ConsentOptionsCard = styled(MuiCard, {
  shouldForwardProp: (props) => props !== "hasError",
})<{ hasError: boolean }>(({ theme, hasError }) => ({
  display: "flex",
  flexDirection: "column",
  paddingInline: theme.spacing(2),
  paddingBlock: theme.spacing(1),
  borderColor: hasError ? theme.palette.error.main : theme.palette.divider,
}));

const ConsentButton = styled(Button)(({ theme }) => ({
  alignSelf: "center",
  paddingInline: theme.spacing(3),
  paddingBlock: theme.spacing(2),
}));
