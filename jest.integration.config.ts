import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./tests/integration'],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: `./tests/reports/int-coverage-report-${Date.now()}`,
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    }
  }
}

export default config;