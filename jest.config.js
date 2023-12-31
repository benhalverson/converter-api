module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	testRegex: "(/__tests__/.*\\.(ts|tsx))$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	collectCoverage: true, // Enable code coverage collection
	coverageDirectory: "coverage", // Specify the directory where coverage reports will be stored
	testPathIgnorePatterns: ["dist"],
};