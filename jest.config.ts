import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // for @ imports
  },
  collectCoverage: true,
  coverageProvider: "v8",
  clearMocks: true,
};

export default config;
