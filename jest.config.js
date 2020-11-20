module.exports = {
  roots: ['<rootDir>/src'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/___Mocks___/*',
    '<rootDir>/src/reportWebVitals.js',
    '<rootDir>/src/__snapshots__/*',
    '<rootDir>/src/interfaces/*'
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  resolver: null,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js'
  }
};
