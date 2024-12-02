import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { isObject } from 'class-validator';
import {
  EntityAlreadyExistsException,
  EntityNotFoundException,
  UnauthorizedResourceException,
} from '../../domain';

type ResponseBody = {
  statusCode: number;
  message: string | string[];
  error: string;
};

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const body = this.mapExceptionToResponse(exception);

    response.status(body.statusCode).json(body);
  }

  private mapExceptionToResponse(exception: any): ResponseBody {
    const response: ResponseBody = {
      statusCode:
        'status' in exception
          ? exception.status
          : HttpStatus.INTERNAL_SERVER_ERROR,
      message:
        'message' in exception
          ? exception.message
          : 'An unexpected error occurred',
      error: this.resolveExceptionName(exception),
    };

    if (
      exception instanceof HttpException &&
      isObject(exception.getResponse())
    ) {
      const { statusCode, message } = exception.getResponse() as any;
      response.statusCode = statusCode || response.statusCode;
      response.message = message || response.message;
    }

    if (exception instanceof EntityNotFoundException) {
      response.statusCode = HttpStatus.NOT_FOUND;
    }

    if (exception instanceof EntityAlreadyExistsException) {
      response.statusCode = HttpStatus.CONFLICT;
    }

    if (exception instanceof UnauthorizedResourceException) {
      response.statusCode = HttpStatus.FORBIDDEN;
    }

    return response;
  }

  private resolveExceptionName(exception: any): string {
    if (exception?.name) {
      return exception.name;
    }

    if (exception.constructor?.name) {
      return exception.constructor.name;
    }

    return 'InternalServerError';
  }
}
