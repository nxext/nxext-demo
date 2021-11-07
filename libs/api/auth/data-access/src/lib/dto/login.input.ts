import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginInput {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
