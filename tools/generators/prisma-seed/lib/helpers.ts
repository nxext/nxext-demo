import { Prisma, Role } from '@prisma/client';

export function createUser(
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: Role
): Prisma.UserCreateInput {
  return {
    id,
    firstName,
    lastName,
    emails: { create: { email, primary: true } },
    role,
    password,
    avatarUrl: 'https://www.gravatar.com/avatar?d=mp',
  };
}
