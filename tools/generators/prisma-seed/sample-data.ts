import { Prisma, Role } from '@prisma/client';
import { hashSync } from 'bcryptjs';
import { createUser } from './lib/helpers';

const PASSWORD = hashSync('nxext', 10);

export const users: Prisma.UserCreateInput[] = [
  createUser('admin', 'Jane', 'Doe', 'admin@nxext.dev', PASSWORD, Role.Admin),
  createUser('user', 'John', 'Doe', 'user@nxext.dev', PASSWORD, Role.User),
];
