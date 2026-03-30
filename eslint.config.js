import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    files: ['**/*.js'],
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'always'],
      'no-console': 'off', // Разрешаем console.log для консольных игр
    },
  },
];
