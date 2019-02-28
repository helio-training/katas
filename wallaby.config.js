module.exports = wallaby => ({
  files: ['katas/**/*.ts', '!katas/**/*.test.ts'],

  tests: ['katas/**/*.test.ts'],

  env: {
    type: 'node',
    runner: 'node'
  },

  testFramework: 'jest'
})
