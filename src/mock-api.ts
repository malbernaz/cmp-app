export const Consents = {
  newsletter: "newsletter",
  targeted_ads: "targeted_ads",
  telemetry: "telemetry",
} as const;

export type ConsentType = (typeof Consents)[keyof typeof Consents];

export type User = {
  name: string;
  email: string;
  consents: ConsentType[];
};

export const users: User[] = [
  {
    name: "Homer Simpson",
    email: "homer@simpson.com",
    consents: [Consents.newsletter, Consents.targeted_ads],
  },
  {
    name: "Marge Simpson",
    email: "marge@simpson.com",
    consents: [Consents.newsletter],
  },
  {
    name: "Lisa Simpson",
    email: "lisa@simpson.com",
    consents: [Consents.telemetry],
  },
  {
    name: "Bart Simpson",
    email: "bart@simpson.com",
    consents: [Consents.newsletter, Consents.telemetry],
  },
  {
    name: "Maggy Simpson",
    email: "maggy@simpson.com",
    consents: [Consents.targeted_ads, Consents.telemetry],
  },
];

export async function getUsers(): Promise<User[]> {
  return users;
}

export async function addUser(newUser: User): Promise<User> {
  users.push(newUser);
  return newUser;
}
