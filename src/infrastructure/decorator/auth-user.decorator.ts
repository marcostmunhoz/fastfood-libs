import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserData } from '../../domain';

export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Readonly<UserData> => {
    const request = ctx.switchToHttp().getRequest();

    return request.user;
  },
);
