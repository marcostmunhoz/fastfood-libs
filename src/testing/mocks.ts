import {
  CanActivate,
  ExecutionContext,
  INestApplication,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ObjectLiteral, Repository, SelectQueryBuilder } from 'typeorm';
import { EntityIdGeneratorHelper, UserData } from '../domain';

type RepositoryWithQueryBuilderResult<T extends ObjectLiteral> = {
  repositoryMock: jest.Mocked<Repository<T>>;
  queryBuilderMock: jest.Mocked<SelectQueryBuilder<T>>;
};

export const getQueryBuilderMock = <T extends ObjectLiteral>(): jest.Mocked<
  SelectQueryBuilder<T>
> => {
  return {
    where: jest.fn().mockReturnThis(),
    andWhere: jest.fn().mockReturnThis(),
    orWhere: jest.fn().mockReturnThis(),
    getMany: jest.fn(),
  } as unknown as jest.Mocked<SelectQueryBuilder<T>>;
};

export const getTypeOrmRepositoryMock = <
  T extends ObjectLiteral,
>(): RepositoryWithQueryBuilderResult<T> => {
  const queryBuilderMock = getQueryBuilderMock<T>();
  const repositoryMock = {
    find: jest.fn(),
    findOneBy: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
    exists: jest.fn(),
    existsBy: jest.fn(),
    createQueryBuilder: jest.fn().mockReturnValue(queryBuilderMock),
  } as unknown as jest.Mocked<Repository<T>>;

  return { repositoryMock, queryBuilderMock };
};

export const getEntityIdGeneratorHelperMock =
  (): jest.Mocked<EntityIdGeneratorHelper> => ({
    generate: jest.fn(),
  });

export const mockUser: UserData = {
  id: 'mock-id',
  name: 'John Doe',
};

export class MockGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    request.user = mockUser;

    return true;
  }
}

export const createMockGuard = () => {
  return new MockGuard();
};

export const getAuthToken = (
  app: INestApplication,
  user: UserData = mockUser,
) => {
  return app.get(JwtService).sign({
    sub: user.id,
    name: user.name,
  });
};
