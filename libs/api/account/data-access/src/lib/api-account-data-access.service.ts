import { PrismaClient, User } from '@prisma/client';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class ApiAccountDataAccessService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
  }

  async onModuleInit() {
    this.$connect();
  }

  async onModuleDestroy() {
    this.$disconnect();
  }

  async getAll(): Promise<User[]> {
    return this.user.findMany();
  }

  findUserById(userId: string) {
    return this.user.findUnique({
      where: { id: userId },
      include: { emails: true },
    });
  }

  findUserByEmail(email: string) {
    return this.email
      .findUnique({ where: { email } })
      .owner({ include: { emails: true } });
  }
}
