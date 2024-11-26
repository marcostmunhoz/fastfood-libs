import { ObjectLiteral, Repository, SelectQueryBuilder } from 'typeorm';

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
