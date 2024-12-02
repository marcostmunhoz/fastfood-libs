import { HttpStatus, UnprocessableEntityException } from '@nestjs/common';
import {
  DomainException,
  EntityAlreadyExistsException,
  EntityNotFoundException,
  UnauthorizedResourceException,
} from '../../domain';
import { GlobalExceptionFilter } from './global-exception.filter';

describe('GlobalExceptionFilter', () => {
  describe.each([
    [
      new EntityNotFoundException('Some message'),
      HttpStatus.NOT_FOUND,
      'EntityNotFoundException',
    ],
    [
      new EntityAlreadyExistsException('Some message'),
      HttpStatus.CONFLICT,
      'EntityAlreadyExistsException',
    ],
    [
      new UnauthorizedResourceException(),
      HttpStatus.FORBIDDEN,
      'UnauthorizedResourceException',
    ],
    [
      new UnprocessableEntityException(['some error', 'some other error']),
      HttpStatus.UNPROCESSABLE_ENTITY,
      'UnprocessableEntityException',
      ['some error', 'some other error'],
    ],
  ])(
    'catch',
    (
      exception: DomainException,
      status: number,
      name: string,
      message?: string | string[],
    ) => {
      it(`should catch the ${exception.name} and return a response with status ${status} and the exception message`, () => {
        const filter = new GlobalExceptionFilter();
        const mockHost = {
          switchToHttp: jest.fn().mockReturnValue({
            getResponse: jest.fn().mockReturnValue({
              status: jest.fn().mockReturnValue({
                json: jest.fn(),
              }),
            }),
          }),
        };

        filter.catch(exception, mockHost as any);

        expect(mockHost.switchToHttp).toHaveBeenCalledTimes(1);
        expect(mockHost.switchToHttp().getResponse).toHaveBeenCalledTimes(1);
        expect(
          mockHost.switchToHttp().getResponse().status,
        ).toHaveBeenCalledTimes(1);
        expect(
          mockHost.switchToHttp().getResponse().status,
        ).toHaveBeenCalledWith(status);
        expect(
          mockHost.switchToHttp().getResponse().status().json,
        ).toHaveBeenCalledTimes(1);
        expect(
          mockHost.switchToHttp().getResponse().status().json,
        ).toHaveBeenCalledWith({
          error: name,
          statusCode: status,
          message: message ?? exception.message,
        });
      });
    },
  );
});
