module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  collectCoverage: true,
  coverageDirectory: '<rootDir>/tests/unit/coverage',
};
