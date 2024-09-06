import { ConsentType, User, users } from "./data";

/**
 * Mock function to fetch all users
 */
export function getUsers(): User[] {
  return users;
}

/**
 * Mock function to add a new user
 * @param name - Name of the user
 * @param email - Email address of the user
 * @param consents - List of consents given by the user
 */
export function addUser(
  name: string,
  email: string,
  consents: ConsentType[],
): User {
  const newUser: User = { name, email, consents };
  users.push(newUser);
  return newUser;
}
