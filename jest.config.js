/** @type {import('jest').Config} */
export default {
  moduleFileExtensions: ['js', 'ts', 'json'],
  rootDir: 'src',
  transform: { '^.+\\.ts$': 'ts-jest' },
  collectCoverageFrom: ['**/*.ts'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.spec.ts'],
};
