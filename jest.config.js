module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@theme/Layout$': '<rootDir>/jest/mocks/Layout',
    '^@theme/(.*)$': '<rootDir>/theme/$1',
    '^@docusaurus/(.*)$': '<rootDir>/jest/mocks/$1',
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./jest/cssMapper.js'),
  },
  testMatch: ['**/__tests__/**/*.js', '**/*.test.js'],
  collectCoverageFrom: ['components/**/*.js', 'theme/**/*.js', 'index.js', '!**/node_modules/**'],
};
