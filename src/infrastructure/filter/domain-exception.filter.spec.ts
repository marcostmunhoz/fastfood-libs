import { HttpStatus } from '@nestjs/common';
import {
  DomainException,
  EntityAlreadyExistsException,
  EntityNotFoundException,
  UnauthorizedResourceException,
} from '../../domain';
import { DomainExceptionFilter } from './domain-exception.filter';

describe('DomainExceptionFilter', () => {
  describe.each([
    [new EntityNotFoundException('Some message'), HttpStatus.NOT_FOUND],
    [new EntityAlreadyExistsException('Some message'), HttpStatus.CONFLICT],
    [new UnauthorizedResourceException(), HttpStatus.FORBIDDEN],
  ])('catch', (exception: DomainException, status: number) => {
    it(`should catch the ${exception.name} and return a response with status ${status} and the exception message`, () => {
      const filter = new DomainExceptionFilter();
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
      expect(mockHost.switchToHttp().getResponse().status).toHaveBeenCalledWith(
        status,
      );
      expect(
        mockHost.switchToHttp().getResponse().status().json,
      ).toHaveBeenCalledTimes(1);
      expect(
        mockHost.switchToHttp().getResponse().status().json,
      ).toHaveBeenCalledWith({
        statusCode: status,
        message: exception.message,
      });
    });
  });
});
