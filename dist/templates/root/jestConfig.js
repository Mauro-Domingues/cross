"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateJestConfig = void 0;
class CreateJestConfig {
  execute() {
    return `import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

export default {
  testTimeout: 20000,
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/modules/**/services/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
  preset: 'ts-jest',
  setupFiles: ['dotenv/config'],
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
};
`;
  }
}
exports.CreateJestConfig = CreateJestConfig;