import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default [
  stylistic.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      'no-console': 'off', // Разрешаем console.log для консольных игр\
    },
  },
]
