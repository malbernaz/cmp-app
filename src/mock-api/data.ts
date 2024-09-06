export const Consents = {
  newsletter: "newsletter",
  targeted_ads: "targeted_ads",
  telemetry: "telemetry",
} as const;

export type ConsentType = keyof typeof Consents;

export type User = {
  name: string;
  email: string;
  consents: ConsentType[];
};

export const users: User[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    consents: [Consents.newsletter, Consents.targeted_ads],
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    consents: [Consents.newsletter],
  },
  {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    consents: [Consents.telemetry],
  },
  {
    name: "Mary Brown",
    email: "mary.brown@example.com",
    consents: [Consents.newsletter, Consents.telemetry],
  },
  {
    name: "Chris Evans",
    email: "chris.evans@example.com",
    consents: [Consents.targeted_ads, Consents.telemetry],
  },
  {
    name: "Ana Lee",
    email: "ana.lee@example.com",
    consents: [Consents.newsletter],
  },
  {
    name: "Tom Hanks",
    email: "tom.hanks@example.com",
    consents: [Consents.telemetry],
  },
  {
    name: "Sara Davis",
    email: "sara.davis@example.com",
    consents: [Consents.newsletter, Consents.targeted_ads, Consents.telemetry],
  },
  {
    name: "Mike Miller",
    email: "mike.miller@example.com",
    consents: [Consents.newsletter],
  },
  {
    name: "Sophia Wilson",
    email: "sophia.wilson@example.com",
    consents: [Consents.targeted_ads, Consents.telemetry],
  },
  {
    name: "James Taylor",
    email: "james.taylor@example.com",
    consents: [Consents.newsletter, Consents.targeted_ads],
  },
  {
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    consents: [Consents.telemetry],
  },
  {
    name: "Liam White",
    email: "liam.white@example.com",
    consents: [Consents.newsletter],
  },
  {
    name: "Emily Harris",
    email: "emily.harris@example.com",
    consents: [Consents.targeted_ads, Consents.telemetry],
  },
  {
    name: "Henry Clark",
    email: "henry.clark@example.com",
    consents: [Consents.newsletter, Consents.targeted_ads],
  },
  {
    name: "Isabella Lewis",
    email: "isabella.lewis@example.com",
    consents: [Consents.newsletter, Consents.telemetry],
  },
];
