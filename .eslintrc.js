module.exports = {
	env: {
		node: true,
		jest: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:promise/recommended',
		'plugin:eslint-comments/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'eslint-comments', 'jest', 'promise'],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.eslint.json',
		ecmaVersion: 12,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts'],
			},
		},
	},
	rules: {
		semi: 'off',
		'@typescript-eslint/semi': ['error'],
		'no-unused-vars': 'off',
		'arrow-body-style': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'no-use-before-define': 'warn',
		'no-console': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-inferrable-types': [
			'warn',
			{
				ignoreParameters: true,
			},
		],
		'import/extensions': [
			'warn',
			{
				ts: 'never',
				js: 'never',
			},
		],
	},
	overrides: [
		{
			files: ['**/*-test.ts', '**/*-test.tsx'],
			env: {
				jest: true,
			},
		},
		{
			files: ['**/*.ts'],
			plugins: ['@typescript-eslint'],
			rules: {
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': ['warn'],
				'@typescript-eslint/explicit-module-boundary-types': ['off'],
				'@typescript-eslint/typedef': [
					'error',
					{
						parameter: true,
					},
				],
				'@typescript-eslint/no-inferrable-types': [
					'warn',
					{
						ignoreParameters: true,
					},
				],
			},
		},
		{
			files: ['*.ts', '*.tsx'], // Your TypeScript files extension
			parserOptions: {
				project: ['./tsconfig.json'], // Specify it only for TypeScript files
			},
		},
	],
};
