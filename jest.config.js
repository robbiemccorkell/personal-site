module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^@(components|test-utils|lib|public)(.*)$": "<rootDir>/$1$2"
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"]
};
