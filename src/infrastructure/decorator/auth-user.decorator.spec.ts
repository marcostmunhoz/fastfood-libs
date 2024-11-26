import { ExecutionContext } from '@nestjs/common';
import { ROUTE_ARGS_METADATA } from '@nestjs/common/constants';
import 'reflect-metadata';
import { UserData } from '../../domain';
import { AuthUser } from './auth-user.decorator';

const getParamDecoratorFactory = (decorator: (...args: any[]) => any) => {
  class Test {
    public test(@decorator() param: any): any {
      return param;
    }
  }

  const args = Reflect.getMetadata(ROUTE_ARGS_METADATA, Test, 'test');

  return args[Object.keys(args)[0]].factory;
};

describe('AuthUser', () => {
  test('should set the param as the current authenticated user', () => {
    // Arrange
    const user: UserData = {
      id: 'some-id',
      name: 'Some Name',
    };
    const ctx: ExecutionContext = {
      switchToHttp: () => ({ getRequest: () => ({ user }) }),
    } as ExecutionContext;

    // Act
    const factory = getParamDecoratorFactory(AuthUser);
    const result = factory(null, ctx);

    // Assert
    expect(result).toBe(user);
  });
});
