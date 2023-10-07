const nextJest = require('next/jest');

/* Provide the path to your Next.js app
 to load next.config.js and .env files in your test environment */
const createJestConfig = nextJest({ dir: './' });

/** @type {import('ts-jest').JestConfigWithTsJest} */
// Add any custom config to be passed to Jest
const customJestConfig = {
  /*
   * For a detailed explanation regarding each configuration property and type check, visit:
   * https://jestjs.io/docs/configuration
   */

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  /* An array of glob patterns
   indicating a set of files for which coverage information should be collected */
  collectCoverageFrom: [
    '<rootDir>/components/**/*.tsx',
    '!<rootDir>/components/pages/**/*.tsx',
    '<rootDir>/components/pages/About/AboutMe/TechStack/BackEnd/*.tsx',
    '<rootDir>/components/pages/About/AboutMe/TechStack/FrontEnd/*.tsx',
    '<rootDir>/components/pages/Portfolio/Projects/TechStack/MyWebsiteFrontEnd/*.tsx',
    '!<rootDir>/components/Form/FormField/**/*.tsx',
    '<rootDir>/utils/**/*.ts',
    '!<rootDir>/node_modules/**',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/coverage/',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['clover', 'json', 'lcov', 'text'],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: { global: { lines: 90 } },

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', '<rootDir>/'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'cjs', 'json', 'node'],

  /* if using TypeScript with a baseUrl set to the root directory,
   then you need the below for alias to work */
  moduleNameMapper: {
    // Handle module aliases (This will be automatically configured for you soon)
    '^app/(.*)$': '<rootDir>/app/$1',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^lib/(.*)$': '<rootDir>/lib/$1',
  },

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The root directory that Jest should scan for tests and modules within
  rootDir: './',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>'],

  /* A list of paths to modules that run some code to configure
   or set up the testing framework before each test */
  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/*.spec.ts?(x)'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(t)sx?$': ['@swc/jest'],
    // '\\.[t]sx?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/fileTransformer.config.js',
  },

  /* An array of regexp pattern strings
   that are matched against all source file paths before transformation. */
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates whether each test should be reported during the run
  verbose: true,

  // Whether to use watchman for file crawling
  watchman: true,
};

/* `createJestConfig`
 is exported this way to ensure that next/jest can load the Next.js config which is async */
module.exports = createJestConfig(customJestConfig);
