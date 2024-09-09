import { z } from "zod";
import { useForm, useController } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { addUser, Consents, ConsentType } from "../../../mock-api";

const consentFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  consents: z
    .array(
      z.enum([Consents.newsletter, Consents.targeted_ads, Consents.telemetry]),
    )
    .min(1),
});

type ConsentFormValues = z.infer<typeof consentFormSchema>;

export function useCmpForm() {
  const { control, handleSubmit, formState } = useForm<ConsentFormValues>({
    resolver: zodResolver(consentFormSchema),
    mode: "onChange",
  });
  const name = useController({ name: "name", control, defaultValue: "" });
  const email = useController({ name: "email", control, defaultValue: "" });
  const consents = useController({
    name: "consents",
    control,
    defaultValue: [],
  });
  const handleConsentsChange = (consent: ConsentType, checked: boolean) =>
    consents.field.onChange(
      checked
        ? [...consents.field.value, consent]
        : consents.field.value.filter((v) => v !== consent),
    );

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: ConsentFormValues) => addUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/consents");
    },
  });

  return {
    formState,
    handleConsentsChange,
    name,
    email,
    consents,
    mutation,
    handleSubmit: handleSubmit((data) => mutation.mutate(data)),
  };
}
