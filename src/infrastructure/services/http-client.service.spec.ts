import { HttpService } from '@nestjs/axios';
import { AxiosInstance, Method } from 'axios';
import { HttpClientResponse, HttpClientService } from './http-client.service';

describe('HttpClientService', () => {
  let axiosMock: jest.Mocked<AxiosInstance>;
  let httpService: HttpService;
  let sut: HttpClientService;

  beforeEach(() => {
    axiosMock = {
      request: jest.fn(),
    } as any;
    httpService = {
      axiosRef: axiosMock,
    } as any;
    sut = new HttpClientService(httpService);
  });

  test('request should return a promise that resolves into a complete HttpResponse object', async () => {
    // Arrange
    const request = {
      method: 'get' as Method,
      url: 'http://localhost:3000',
      data: { key: 'value' },
    };
    const response: Partial<HttpClientResponse<any>> = {
      data: { key: 'other value' },
      status: 200,
      statusText: 'OK',
      headers: {},
    };
    axiosMock.request.mockResolvedValue(response);

    // Act
    const result = await sut.request(request.method, request.url, request.data);

    // Assert
    expect(axiosMock.request).toHaveBeenCalledWith(request);
    expect(result).toEqual(response);
  });

  test('requestJson should return a promise that resolves into the data property of the HttpResponse object', async () => {
    // Arrange
    const request = {
      method: 'get' as Method,
      url: 'http://localhost:3000',
      data: { key: 'value' },
    };
    const data = { key: 'other value' };
    const response: Partial<HttpClientResponse<any>> = {
      data,
      status: 200,
      statusText: 'OK',
      headers: {},
    };
    axiosMock.request.mockResolvedValue(response);

    // Act
    const result = await sut.requestJson(
      request.method,
      request.url,
      request.data,
    );

    // Assert
    expect(axiosMock.request).toHaveBeenCalledWith(request);
    expect(result).toEqual(data);
  });
});
