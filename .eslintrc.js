module.exports = {
	root: true,
	extends: [
		'@react-native-community',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', 'react-native', 'react-hooks', '@typescript-eslint'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/no-shadow': ['error'],
				'no-shadow': 'off',
				'no-undef': 'off',
			},
		},
	],
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/style-prop-object': 0,
		'react/function-component-definition': [1, { namedComponents: 'arrow-function' }],
		'import/prefer-default-export': 0,
		'react/jsx-indent': [0],
		'no-console': 1,
		'no-unused-vars': 1,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
