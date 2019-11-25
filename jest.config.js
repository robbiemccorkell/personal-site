module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"]
};
