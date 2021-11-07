import { compareSync } from 'bcryptjs';

export function validatePassword(
  password: string,
  hashedPassword: string
): boolean {
  return compareSync(password, hashedPassword);
}
