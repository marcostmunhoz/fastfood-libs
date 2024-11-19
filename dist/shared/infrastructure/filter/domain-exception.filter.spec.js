"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_exception_filter_1 = require("./domain-exception.filter");
describe('DomainExceptionFilter', () => {
    describe('catch', () => {
        it('should catch the exception and return a response with status 400 and the exception message', () => {
            const filter = new domain_exception_filter_1.DomainExceptionFilter();
            const mockException = {
                name: 'DomainException',
                message: 'mock message',
            };
            const mockHost = {
                switchToHttp: jest.fn().mockReturnValue({
                    getResponse: jest.fn().mockReturnValue({
                        status: jest.fn().mockReturnValue({
                            json: jest.fn(),
                        }),
                    }),
                }),
            };
            filter.catch(mockException, mockHost);
            expect(mockHost.switchToHttp).toHaveBeenCalledTimes(1);
            expect(mockHost.switchToHttp().getResponse).toHaveBeenCalledTimes(1);
            expect(mockHost.switchToHttp().getResponse().status).toHaveBeenCalledTimes(1);
            expect(mockHost.switchToHttp().getResponse().status).toHaveBeenCalledWith(400);
            expect(mockHost.switchToHttp().getResponse().status().json).toHaveBeenCalledTimes(1);
            expect(mockHost.switchToHttp().getResponse().status().json).toHaveBeenCalledWith({
                statusCode: 400,
                message: 'mock message',
            });
        });
    });
});
//# sourceMappingURL=domain-exception.filter.spec.js.map