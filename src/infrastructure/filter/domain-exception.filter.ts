import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import {
  DomainException,
  EntityAlreadyExistsException,
  EntityNotFoundException,
  UnauthorizedResourceException,
} from '../../domain';

type ResponseBody = {
  statusCode: number;
  message: string;
};

@Catch(DomainException)
export class DomainExceptionFilter implements ExceptionFilter {
  catch(exception: DomainException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const body = this.mapExceptionToResponse(exception);

    response.status(body.statusCode).json(body);
  }

  mapExceptionToResponse(exception: DomainException): ResponseBody {
    const response: ResponseBody = {
      statusCode: HttpStatus.BAD_REQUEST,
      message: exception.message,
    };

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
}
