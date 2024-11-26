/** @type {import('jest').Config} */
module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  rootDir: 'src',
  transform: { '^.+\\.ts$': 'ts-jest' },
  collectCoverageFrom: ['**/*.ts'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.spec.ts'],
};
