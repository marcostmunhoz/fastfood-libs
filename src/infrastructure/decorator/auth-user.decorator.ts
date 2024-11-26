import { UserData } from '@/domain/data/user.data';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Readonly<UserData> => {
    const request = ctx.switchToHttp().getRequest();

    return request.user;
  },
);
