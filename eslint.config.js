import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),

  // Fichiers de configuration Node (Jest, Babel)
  {
    files: ['jest.config.cjs', 'babel.config.cjs'],
    languageOptions: {
      globals: {
        module: true,
        require: true,
      },
    },
  },

    // Fichiers de test : autorise les globals Jest
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        jest: true,
        test: true,
        expect: true,
      },
    },
  },

  // Fichiers JS/JSX classiques
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]);