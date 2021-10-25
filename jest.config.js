module.exports = {
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
	moduleFileExtensions: ['ts', 'js'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	testMatch: ['**/tests/**/*.test.(ts|js)', '**/src/**/*.test.(ts|js)'],
	testEnvironment: 'node',
};
