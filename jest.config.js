module.exports = {
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/styleMock.js',
    },
    "collectCoverage": true,
    collectCoverageFrom: [
      'src/**/*.jsx',
      '**/*.{jsx}',
      '!**/*.{js}',
      '!**/node_modules/**',
      '!**/src/AuthorizationHook/**',
    ],
    coveragePathIgnorePatterns:["<rootDir>/backend/", "<rootDir>/backend_dir/", "<rootDir>/src/AuthorizationHooks/*", "<rootDir>/src/components/"]
  };