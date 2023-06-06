const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
  rootDir: '.',
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  transform: { '^.+\\.ts$': 'ts-jest' },
  collectCoverageFrom: ['src/**/*.*.ts'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  // Helps to use aliases in tsconfig (@module/*)
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths ?? {}, {
    prefix: '<rootDir>',
  }),
};
